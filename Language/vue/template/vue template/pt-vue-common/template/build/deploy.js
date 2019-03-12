var fs = require('vinyl-fs')
var ftp = require('vinyl-ftp')
var config = require('../config/deploy')
var deployEnv = process.env.NODE_ENV
var _ = require('lodash')
var chalk = require('chalk')

if (!config || !_.isPlainObject(config)) {
  console.error(chalk.red('Deploy: 大兄弟，部署参数错了，要不您再瞅瞅？'))
  process.exit()
}

if (!config[deployEnv]['user'] || !config[deployEnv]['password']) {
  console.error(chalk.yellow(`Warn: 环境${env}没有配置ftp账号密码`))
  process.exit()
}

var conn = new ftp({
  host: config[deployEnv]['host'],
  port: config[deployEnv]['port'],
  user: config[deployEnv]['user'],
  password: config[deployEnv]['password'],
  log: logstr
})

fs.src(['./dist/**'], {buffer: false})
  .pipe(conn.dest(config[deployEnv]['path']))

function logstr (mode, address) {
  if (address) {
    console.log(mode, address)
  } else {
    console.log(mode)
  }
}