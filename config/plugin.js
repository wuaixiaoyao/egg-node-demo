'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
    package: 'egg-view-nunjucks',

  },
  // 开启socketio 插件
  io: {
    enable: true,
    package: 'egg-socket.io',
  },

};
