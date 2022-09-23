module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const User = app.model.define('user', {
        user_id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_name: STRING(30),
        comment: STRING(60),
        created_at: DATE,
        updated_at: DATE,
    });

    return User;
}