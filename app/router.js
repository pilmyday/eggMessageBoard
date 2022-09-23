'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.users.index);
  router.get('/post', controller.home.post);
  router.resources('users', '/users', controller.users);
  router.post('/update/:user_id', controller.users.update);
  router.post('/add', controller.users.create);
  router.get('/show/:user_id', controller.users.show);
  router.get('/destroy/:user_id', controller.users.destroy);
};
