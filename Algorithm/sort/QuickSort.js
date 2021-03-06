/* 
快速排序
时间复杂度：O(N*logN)
算法介绍：http://developer.51cto.com/art/201403/430986.htm
疑问点：
基数在左边，为什么要从右边先开始查找？
答：从代码层面分析，因为最后找到的一个数也就是小标为i的数需要与基数对换，而基数在最左边，说明最后一个数会放到最左边，也就是最后一个数必须必基数小，而从右边开始查找的是必基数小的数，终止
查找的可能性：
从右侧开始查找终止查找的可能性：
1. 前一次对调结束，j找到i所在位置，此时i是比基数小的，i下标对应的数与基数对换没有问题
2. 前一次对调结束，j找到最后一个数，这个数比基数小，j停止，i开始查找比基数大的数，走到j的位置，i不小于j，停止，i下标对应的数与基数对换没有问题
从左侧开始查找终止查找的可能性：
1. 前一次对调结束，i找到j所在位置，此时i是比基数大的，i下标对应的数与基数对换出错
2. 前一次对调结束，i找到最后一个数，这个数比基数大，i停止，j开始查找比基数小的数，走到i的位置，i不小于j，停止，i下标对应的数与基数对换出错
*/

function quickSort (_left, _right, _arr) {
    if (!(_arr instanceof Array)) {
        return
    }

    if (_left >= _right) {
        return
    }

    let baseNum = _arr[_left]
    let i = _left
    let j = _right

    while (i !== j) {
        
        while (_arr[j] >= baseNum && i < j) {
            j--
        }

        while (_arr[i] <= baseNum && i < j) {
            i++
        }
    
        if (i < j) {
            let tempNum = _arr[i]
            _arr[i] = _arr[j]
            _arr[j] = tempNum
        }
    }

    _arr[_left] = _arr[i]
    _arr[i] = baseNum 
    console.log(_arr)
    quickSort(_left, i - 1, _arr)
    quickSort(i + 1, _right, _arr)
}

let arr = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8]
// let arr = [5, 80, 55, 40, 42, 85]
quickSort(0, arr.length - 1, arr)
console.log(arr)