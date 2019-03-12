const counter = (x, y) => {
    return ~~Math.sqrt(x * x + y * y)
}

/**
 * 通过计算用户触点距离差判断用户行为
 */
const directive = (el, binding) => {
    let startPosition = 0 // 保存touchstart触点
    const distance = 10 // 差值

    // 屏蔽所有元素的点击事件
    const doms = Array.prototype.slice.call(document.getElementsByTagName('*'))
    doms.map(item => item.addEventListener('click', e => e.preventDefault()))

    el.addEventListener('touchstart', e => {
        const { clientX, clientY } = e.touches[0]
        startPosition = counter(clientX, clientY)
    })

    el.addEventListener('touchend', e => {
        const { clientX, clientY } = e.changedTouches[0]
        const endPosition = counter(clientX, clientY)
        if(Math.abs(endPosition - startPosition) < distance) { // 点击行为
            if(typeof binding.value === 'function') {
                binding.value()
            }
        }
    })
}

export default Vue => {
    Vue.directive('tap', directive)
}
