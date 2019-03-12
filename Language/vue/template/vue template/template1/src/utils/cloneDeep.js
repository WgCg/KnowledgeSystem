function cloneDeep(obj, result) {
    result = result || (obj instanceof Array ? [] : {})
    if(obj instanceof Object) {
        Object.entries(obj).map(([ key, value ]) => {
            if(value instanceof Object) {
                result[key] = value instanceof Array ? [] : {}
                cloneDeep(value, result[key])
            } else {
                result[key] = value
            }
        })
    } else {
        result = obj
    }

    return result
}

export default cloneDeep

