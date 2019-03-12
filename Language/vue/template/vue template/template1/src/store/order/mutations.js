import * as types from './types'

export default {
    [types.set_order_info](state, payload) {
        state.orderList = payload
    }
}