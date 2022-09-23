module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const User = app.model.define('user', {
        userId: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userName: STRING(30),
        comment: STRING(60),
        createdAt: DATE,
        updatedAt: DATE,
    });

    return User;
}
