import component from './component'
const ToastConstructor = Vue.extend(component)
let canToast = true // 控制toast次数

const getInstance = () => {
    return new ToastConstructor().$mount()
}

const removeDom = event => {
    if(event.target.parentNode) {
        event.target.parentNode.removeChild(event.target)
    }
}

ToastConstructor.prototype.close = function() {
    this.visible = false
    this.$el.addEventListener('transitionend', removeDom)
}

function Toast(options = '') {
    // 控制点击次数
    if(!canToast) return
    canToast = false

    const instance = getInstance()
    instance.message = typeof options === 'string' ? options : options.message
    instance.type = options.type

    document.body.appendChild(instance.$el)
    setTimeout(() => {
        // 手动设置组件坐标使其居中
        // instance.$el.style.left = `${ (document.body.offsetWidth - instance.$el.offsetWidth) / 2 }px`
        instance.visible = true

        clearTimeout(timer)
        let timer = setTimeout(() => {
            instance.close()
            canToast = true
        }, options.interval || 2000)
    }, 0)
}

export default {
    install(Vue) {
        Vue.toast = Toast
        Vue.prototype.$toast = Toast
    }
}
