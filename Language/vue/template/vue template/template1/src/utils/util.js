import VueToast from '../plugins/vue-toast'
Vue.use(VueToast)

/**
 *  往url后追加参数
 * @export
 * @param {any} url 
 * @param {any} params 
 * @returns 
 */
export function addQuery(url, params) {
    let key,
        _url = url.split('#')[0],
        hash = url.split('#')[1],
        arrParams = [],
        strParams = ''
    if (hash) {
        hash = '#' + hash
    } else {
        hash = ''
    }
    for (key in params) {
        arrParams[arrParams.length] = '&' + key + '=' + encodeURIComponent(params[key])
    }
    // 去掉第一个'&', 因为有joinChar存在
    strParams = arrParams.join('').substring(1)
    // return url + joinChar + encodeURIComponent(strParams);
    return _url.split('?')[0] + '?' + (strParams) + hash
}

/**
 * 判断是否支持storage
 * @export
 * @returns 
 */
export function storageSupport() {
    let localStorage = window.localStorage
    let localStorageSupportedFn = function() {
        let testKey = 'test'
        try {
            localStorage.setItem(testKey, '1')
            localStorage.removeItem(testKey)
            return true
        } catch (error) {
            return false
        }
    }
    return localStorageSupportedFn()
}

/**
 * 存储storage
 * @export
 * @param {any} key 
 * @param {any} data 
 * @param {string} [type='session'] 
 */
export function setStorage (key, data, type = 'local') {
    try {
        if ( type === 'session' ) {
            window.sessionStorage.setItem(key, JSON.stringify(data))
        } else if ( type === 'local' ) {
            window.localStorage.setItem(key, JSON.stringify(data))
        }
        return true
    } catch (error) {
        console.error('写入Storage异常')
        return false
    }
}

/**
 * 获取storage数据
 * @export
 * @param {any} key 
 * @param {string} [format='string'] 
 * @param {string} [type='session'] 
 */
export function getStorage (key, format = 'string', type = 'local') {
    try {
        let storageData = ''
        if ( type === 'session' ) {
            storageData = window.sessionStorage.getItem(key)
        } else if ( type === 'local' ) {
            storageData = window.localStorage.getItem(key)
        }
        if ( format === 'object' ) {
            return JSON.parse(storageData)
        }
        return storageData
    } catch (error) {
        console.error('读取Storage异常')
        return false
    }
}

/**
 * post表单提交
 * @export
 * @param {any} URL 
 * @param {any} PARAMS 
 */
export function postForm (URL, PARAMS) {        
    var temp = document.createElement('form')       
    temp.action = URL      
    temp.method = 'post'       
    temp.style.display = 'none'       
    for (var x in PARAMS) {        
        var opt = document.createElement('textarea')        
        opt.name = x       
        opt.value = PARAMS[x]     
        temp.appendChild(opt)       
    }        
    document.body.appendChild(temp)    
    temp.submit()       
}

export function reqErrorHandle (data, toastMsg = '网络延迟，请稍后再试') {
    const SUCCESS_DATA_CODE = 0
    const ERR_OBJ = {
        '1000': '系统异常，请稍后再试',
        '1005': '登录失效，请重新登录',
        '4001': '订单参数异常，请联系我们',
        '4002': '该订单不存在',
        '4003': '您尚未选择服务内容',
        '4004': '该服务内容尚不支持下单，请重新选择',
        '4005': '当前时间段服务已约满，请选择其它时间段',
        '4006': '您已购买过当前服务，不能重复购买',
        '4007': '卡已过期'
    }
    if (data && data.message && data.message === 'DATA ERROR') {
        toastMsg = '数据异常，请重新尝试'
    } else if (data && data.code && data.code != SUCCESS_DATA_CODE && ERR_OBJ[data.code]) {
        toastMsg = `${ERR_OBJ[data.code]}`
        console.error(data.codeMsg)
    }
    Vue.toast({
        message: toastMsg
    })
}