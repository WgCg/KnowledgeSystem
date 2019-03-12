import component from './component'

const Constructor = Vue.extend(component)

function getInstance() {
    return new Constructor({
        el: document.createElement('div')
    })
}

const domContainer = document.body

Constructor.prototype.close = function() {
    const dom = domContainer.querySelector('[page-loading-component]')
    dom && (domContainer.removeChild(dom))
    this.$destroy()
}

// 保存页面中已经存在的组件，同一时间只能存在一个
let instanceTemp

function pageLoading() {
    let instance
    if(document.querySelector('[page-loading-component]')) {
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
        Vue.pageLoading = pageLoading
        Vue.prototype.$pageLoading = pageLoading
    }
}
