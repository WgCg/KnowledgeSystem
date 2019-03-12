import jsonp from 'jsonp'

const request = (url, data, callback) => {
    if(!url) return
    
    let param = ''
    for(const item in data) {
        param += `${ item }=${ data[item] }&`
    }
    param += 'callback'
    
    return jsonp(url, { param }, callback)
}

export default request