// import jsonp from 'jsonp'
import VueRequest from '../plugins/vue-request'
Vue.use(VueRequest)
import { ORDER_HOST } from 'constants/HTTP'

// 校验通用地址服务范围
export function verifyLocation (data = {}) {
    return Vue.request({
        url: `${ORDER_HOST}/act/card/fill/checkAddrList?type=1`,
        data,
        method: 'post' //默认get
    })
}




