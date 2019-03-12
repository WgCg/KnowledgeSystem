/**
 * 封装axios请求方法
 * @example
 * import axios from 'path/to/request'
 * axios({ url: '', data: { token: '' } })
 */
import axios from 'axios'
import queryString from '../../utils/queryString'
import VuePageLoading from '../vue-page-loading'
Vue.use(VuePageLoading)
import VueToast from '../vue-toast'
Vue.use(VueToast)

/**
 * 合并用户传递参数和公用参数
 */
function mergeCommonData(data, common = {}) {
    let _data

    // 判断data类型
    if (data instanceof FormData) {
        for (const key in common) {
            data.append(key, common[key])
        }

        _data = data
    } else {
        _data = { ...data,
            ...common
        }
    }

    return _data
}

// 查询url中的token、source
let commonData = {}
const {
    token,
    source
} = queryString()
if (token) {
    commonData.token = token
}
if (source) {
    commonData.source = source
}

// 本地开发通过node代理，上线后和接口同域
// axios.defaults.baseURL = HTTP_HOST.PROXY_HOST

function request({
    url,
    method = 'GET',
    data = {},
    customConfig = {}
}, isLoading = true) {
    let options = {
        url,
        method,
        ...customConfig,
        withCredentials: true
    }

    // 合并公用参数
    const _data = mergeCommonData(data, commonData)

    // 区分请求方式
    if (method === 'GET') {
        options = { ...options,
            params: _data
        }
    } else {
        options = { ...options,
            data: _data
        }
    }

    // 添加loading组件
    const loading = isLoading ? Vue.pageLoading() : null
    return axios(options).then(res => {
        loading && loading.close()
        return res.data
    }).catch((err) => {
        loading && loading.close()
        return Promise.reject(err)
    })
}

export default {
    install(Vue) {
        Vue.request = request
        Vue.prototype.$request = request
    }
}