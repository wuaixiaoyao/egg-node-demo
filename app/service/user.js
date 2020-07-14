/*
 * @Author: wuaixiaoyao
 * @Date: 2020-07-14 16:53:49
 * @Last Modified by: wuaixiaoyao
 * @Last Modified time: 2020-07-14 19:44:51
 */
// user service
'use strict';
const Service = require('egg').Service;
class UserService extends Service {
  // 默认不需要提供构造函数。
  // constructor(ctx) {
  //   super(ctx); 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
  //   // 就可以直接通过 this.ctx 获取 ctx 了
  //   // 还可以直接通过 this.app 获取 app 了
  // }
  async find(uid) {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    // const user = await this.ctx.db.query('select * from user where uid = ?', uid);
    // const client1 = await this.app.mysql.get('db1');
    // console.log('client1:', client1);
    console.log('uid:', uid);
    const user = await this.app.mysql.get('users', { id: uid, user_name: 'test' });
    console.log('this.app.mysql', this.app.mysql);
    console.log(user, 'user');
    return { user };
    // const user = {
    //   user_name: 'wuaixiaoyao',
    //   age: 18,
    // };
    // 假定这里还有一些复杂的计算，然后返回需要的信息。
    // const picture = await new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('https://www.baidu.com/');
    //   }, 2000);
    // });

    // return {
    //   name: user.user_name,
    //   age: user.age,
    //   picture,
    // };
  }

  // async getPicture(uid) {
  //   const result = await this.ctx.curl(`http://photoserver/uid=${uid}`, {
  //     dataType: 'json',
  //   });
  //   return result.data;
  // }
}
module.exports = UserService;