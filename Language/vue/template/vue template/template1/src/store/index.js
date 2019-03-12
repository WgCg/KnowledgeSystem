import Vuex from 'vuex'
Vue.use(Vuex)
import card from './card'
import order from './order'

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        card,
        order
    }
})

export default store
