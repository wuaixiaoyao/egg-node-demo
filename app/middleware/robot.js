// options === app.config.robot
module.exports = (options, app) => {
  return async function robotMiddleware(ctx, next) {
    const source = ctx.get('user-agent') || '';
    const match = options.ua.some((ua) => ua.test(source));
    if (match) {
      ctx.status = 403;
      ctx.body = {
        code: 403,
        message: 'Go away, robot.',
      };
    } else {
      await next();
    }
  };
};
