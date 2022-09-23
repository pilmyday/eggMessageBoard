'use strict';

const UserController = require('./users');

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async show() {
    const { ctx } = this;

    await ctx.render('show.html', {
      csrf: this.ctx.csrf,
    });
  }

  async post() {
    const ctx = this.ctx

    await ctx.render('post.html', {
      csrf: this.ctx.csrf,
    });
  }
}

module.exports = HomeController;
