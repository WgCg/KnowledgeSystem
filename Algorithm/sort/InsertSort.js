/* 
插入排序
时间复杂度：最好：O(n) 最坏O(n2)
算法介绍：https://www.cnblogs.com/hapjin/p/5517667.html
*/


function insertSort (arr) {
    if (!(arr instanceof Array)) {
        return []
    }

    const arrLen = arr.length

    for (let i = 1; i < arrLen; i++) {
        let tempNum = arr[i]

        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                arr.splice(i, 1)
                arr.splice(j, 0, tempNum)
                break
            }
        }
    }
}

let arr = [5, 2, 8, 4, 9, 1]
insertSort(arr)
console.log(arr)
