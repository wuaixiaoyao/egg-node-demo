'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);
  // socket.io
  // io.of('/').route('chat', io.controller.default.ping);
  // io.of('/').route('chat', app.io.controller.chat.index);
};
