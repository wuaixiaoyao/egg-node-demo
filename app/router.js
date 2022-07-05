'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);
  // search
  app.router.get('/search', app.controller.search.index);
  app.router.get('/search/show', app.controller.search.show);

  // user
  app.router.get('/user/:id/', app.controller.user.info);
  // socket.io
  io.of('/').route('chat', io.controller.default.ping);
  io.of('/').route('chat', app.io.controller.chat.index);
  const client1 = app.mysql.get('user');
};
