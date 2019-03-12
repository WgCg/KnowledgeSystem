import component from './component'

const Constructor = Vue.extend(component)

const getInstance = data => {
    return new Constructor({ data }).$mount()
}

const preview = imgUrl => {
    if(!imgUrl) return console.warn('param error') // eslint-disable-line no-console
    const instance = getInstance({ imgUrl })
    document.body.appendChild(instance.$el)
}

export default () => {
    Vue.previewImg = preview
    Vue.prototype.$previewImg = preview
}
