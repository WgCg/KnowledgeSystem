import component from './component'

const Constructor = Vue.extend(component)

function getInstance() {
    return new Constructor({
        el: document.createElement('div')
    })
}

// const domContainer = document.body

Constructor.prototype.close = function({domContainer = document.body} = {}) {
    const dom = domContainer.querySelector('[loading-component]')
    dom && (domContainer.removeChild(dom))
    this.$destroy()
}

// 保存页面中已经存在的组件，同一时间只能存在一个
let instanceTemp

function Loading({domContainer = document.body} = {}) {
    let instance
    if(document.querySelector('[loading-component]')) {
        instance = instanceTemp
    } else {
        instance = getInstance()
        instanceTemp = instance
        domContainer.appendChild(instance.$el)
    }

    return instance
}

export default {
    install(Vue) {
        Vue.loading = Loading
        Vue.prototype.$loading = Loading
    }
}
