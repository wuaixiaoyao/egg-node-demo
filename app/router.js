'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);

  app.router.get('/api/repos', app.controller.home.listReposByOrg);

  // search
  app.router.get('/search', app.controller.search.index);
  app.router.get('/search/show', app.controller.search.show);

  // user
  // app.router.get('/api/user', app.controller.user.index);
  router.resources('user', '/user', controller.user);
  app.router.get('/api/user/:id/', controller.user.info);
  // file
  app.router.post('/api/file/upload/', controller.file.upload);
  // socket.io
  io.of('/').route('chat', io.controller.default.ping);
  io.of('/').route('chat', app.io.controller.chat.index);
  const client1 = app.mysql.get('user');
};
