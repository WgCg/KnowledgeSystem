// deploy开发配置
// var no_static_domain = process.env.npm_config_static_domain === 'no';
let no_static_domain = process.env.static_domain === 'no';
var password = require('./ftp-password.js')

if (!password) {
  console.log('**  没有ftp密码文件，需手动创建配置文件  **')
  console.log('**  密码文件保密，创建后请勿上传至git仓库  **')
}

module.exports = {
  test: {
    host: '',
    port: '',
    user: password['test'].userName,
    password: password['test'].password,
    path: no_static_domain ? '/' : '',  // CDN部署路径，xxx替换成自己项目部署的路径
    domain: no_static_domain ? '' : ''
  },

  sandbox: {
    host: '',
    port: '',
    user: password['sandbox'].userName,
    password: password[ 'sandbox' ].password,
    path: no_static_domain ? '/' : '',  // CDN部署路径，xxx替换成自己项目部署的路径
    domain: no_static_domain ? '' : '/'
  },
  
  production: {
    host: 'ossftp.djdns.cn',
    port: '2048',
    user: password['production'].userName,
    password: password['production'].password,
    path: no_static_domain ? '/' : 'pt/project/xxx/',  // CDN部署路径，xxx替换成自己项目部署的路径
    domain: no_static_domain ? '' : ''
  }
}