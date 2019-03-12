import * as types from './types'

export default {
    'order.setOrderInfo'({ commit }, payload) {
        commit(types.set_order_info, payload)
    }
}