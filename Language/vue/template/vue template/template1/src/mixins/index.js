import getSystemType from '../utils/getSystemType'
import throttle from '../utils/throttle'

/**
 * 隐藏固定在底部的按钮
 * 绑定变量isFixedButtonVisible
 */
export const hideFixedButtonInAndroid = {
    mounted() {
        if(getSystemType() === 2) {
            const originClientHeight = document.body.clientHeight

            // 监控窗口高度变化
            window.addEventListener('resize', throttle({
                action: () => {
                    const resizedClientHeight = document.body.clientHeight
                    if(resizedClientHeight < originClientHeight) {
                        this.isFixedButtonVisible = false
                    } else {
                        this.isFixedButtonVisible = true
                    }
                }
            }))
        }
    }
}
