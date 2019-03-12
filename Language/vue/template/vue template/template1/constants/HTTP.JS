import env from './env'

const HTTP_HOST = {
    PROXY_HOST: ''
}

// 静态资源请求路径
const RESOURCE = {
    'development': '',
    'test': '',
    'production': ''
}
const RESOURCE_HOST = RESOURCE[env]

// 通用接口地址
const ORDER_ADDRESS = {
    'development': '',
    'test': '',
    'production': ''
}
const ORDER_HOST = ORDER_ADDRESS[env]


export { HTTP_HOST, RESOURCE_HOST, ORDER_HOST }
