/* 
冒泡排序
时间复杂度：O(n2)
算法介绍：https://blog.csdn.net/shuaizai88/article/details/73250615
*/

function bubbleSort (arr) {
    if (!(arr instanceof Array)) {
        return []
    }

    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                let tempNum = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = tempNum
            }
        }
    }
}

let arr = [5, 2, 8, 4, 9, 1]
bubbleSort(arr)
console.log(arr)