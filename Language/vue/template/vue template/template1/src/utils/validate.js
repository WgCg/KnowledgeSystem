/**
 * 对待校验的列表项逐项进行非空和自定义正则校验
 * @param validationList {Array}
 * {
 *      reg: /./, 自定义正则
 *      value: '', 待校验项
 *      errorMessage: '' 错误信息
 * }
 */
export default function(validationList = []) {
    let result = ''
    for(let i = 0, len = validationList.length; i < len; i++) {
        const { reg, value, errorMessage } = validationList[i]

        // 校验是否为空
        if(!value) {
            return result = errorMessage
        }

        // 校验正则
        if(reg && !reg.test(value)) {
            return result = errorMessage
        }
    }
    return result
}
