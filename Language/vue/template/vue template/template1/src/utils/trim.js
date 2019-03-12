/**
 * 去除字符首尾两边的空格
 */
export default function(str) {
    if(!str) {
        return ''
    } else {
        return str.replace(/^\s+/, '').replace(/\s+$/, '')
    }
}
