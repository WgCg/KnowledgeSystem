/* 
选择排序
时间复杂度：O(n2)
算法介绍：https://www.cnblogs.com/shen-hua/p/5424059.html
*/

function selectionSort (arr) {
    if (!(arr instanceof Array)) {
        console.error('param type is not array!')
        return []
    }

    for (let i = 0; i < arr.length; i++) {
        let minNumIndex = i
        let tempNum = arr[i]

        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minNumIndex]) {
                minNumIndex = j
            }
        }
        
        arr[i] = arr[minNumIndex]
        arr[minNumIndex] = tempNum
    }
}

let arr = [5, 2, 8, 4, 9, 1]
selectionSort(arr)
console.log(arr)