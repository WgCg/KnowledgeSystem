/**
 * apiRoute.js
 * API结构路由
 */

import express from 'express'
import request from '../requestProxy'
import { HTTP_HOST } from '../../constants/HTTP'

// 创建路由节点
const apiRoute = new express.Router()

// api中转配置
apiRoute.post('/', (req, res) => {
    const url = `${ HTTP_HOST.PROXY_HOST }${ req.originalUrl }`
    request.post(url, req.body)
        .then((result) => {
            res.json(result)
        }).catch(err => console.log(err))
})

apiRoute.get('/', (req, res) => {
    const url = `${ HTTP_HOST.PROXY_HOST }${ req.originalUrl }`
    request.get(url, req.body)
        .then((result) => {
            res.json(result)
        }).catch(err => console.log(err))
})

export default apiRoute
