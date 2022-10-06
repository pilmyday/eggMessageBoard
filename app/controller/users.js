const Controller = require('egg').Controller;

function toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    
    return parseInt(str, 10) || 0;
}

class UserController extends Controller {
    async index() {
        const ctx = this.ctx;
        const query = {
            limit: toInt(ctx.query.limit),
            offset: toInt(ctx.query.offset)
        };

        const comments = await ctx.model.User.findAll(query);

        await ctx.render('index.html', {
            csrf: this.ctx.csrf,
            comments: comments
        });
    }

    async show() {
        const ctx = this.ctx;
        const id = toInt(ctx.params.userId);

        const comment = await ctx.model.User.findByPk(id);

        await ctx.render('show.html', {
            csrf: this.ctx.csrf,
            comment: comment,
        });
    }

    async create() {
        const ctx = this.ctx;
        const { userName, comment } = ctx.request.body;

        const user = await ctx.model.User.create({ userName, comment });
        ctx.status = 201;
        ctx.body = user;

        ctx.redirect('/');
    }

    async update() {
        const ctx = this.ctx;
        const id = toInt(ctx.params.userId);
        const { userName, comment } = ctx.request.body;

        const user = await ctx.model.User.findByPk(id);
        if (!user) {
            ctx.status = 404;
            
            return;
        };

        await user.update({ userName, comment });
        ctx.body = user;

        ctx.redirect('/');
    }

    async destroy() {
        const ctx = this.ctx;
        const id = toInt(ctx.params.userId);

        const user = await ctx.model.User.findByPk(id);
        if (!user) {
            ctx.status = 404;
            
            return;
        };
        await user.destroy();
        ctx.status = 200;

        ctx.redirect('/');
    }
}

module.exports = UserController;
