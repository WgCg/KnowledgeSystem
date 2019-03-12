import Component from './component'

const Constructor = Vue.extend(Component)

const getInstance = (options) => {
    return new Constructor({
        el: document.createElement('div'),
        data: options
    })
}

// 判断页面中是否已经存在该组件
let hasInstance = false

Constructor.prototype.close = function() {
    this.$el.parentNode.removeChild(this.$el)
}

const Dialog = (options = {}) => {
    if(document.querySelector('[dialog-component]')) {
        hasInstance = true
    }

    let instance = null
    if(!hasInstance) {
        instance = getInstance(options)
        document.body.appendChild(instance.$el)
    }

    return instance
}

export default {
    install() {
        Vue.dialog = Dialog
        Vue.prototype.$dialog = Dialog
    }
}
