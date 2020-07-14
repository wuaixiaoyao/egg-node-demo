'use strict';
const room = 'default_room';


module.exports = () => {
  return async (ctx, next) => {
    const { socket, session } = ctx;
    // 获取客户端ID
    const clientId = socket.id;
    // console.log('clientId: ', clientId);
    // console.log('session: ', session);
    // 权限校验通过
    ctx.socket.emit('res', 'auth success');
    // 加入房间
    ctx.socket.join(room);
    // 放行
    await next();
    // console.log('断开连接');
  };
};
