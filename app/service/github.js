const { Service } = require('egg');

class GithubService extends Service {
  async listReposByOrg(org) {
    const { ctx, config } = this;
    // 读取配置
    const { endpoint, pageCount } = config.github;
    // 请求后端 API
    const repos = await ctx.curl(`${endpoint}/orgs/${org}/repos`, {
      data: { per_page: pageCount },
      dataType: 'json',
    });
    // 响应数据
    if (repos.status !== 200) return [];
    return repos.data.reduce((arr, repo) => {
      arr.push(repo.name);
      return arr;
    }, []);
  }
}

module.exports = GithubService;
