'use strict';
module.exports = app => {
  return async (ctx, next) => {
    ctx.socket.emit('res', 'connected!');
    console.log('server端 connection 了');
    await next();
    // execute when disconnect.
    console.log('disconnection!');
  };
};
