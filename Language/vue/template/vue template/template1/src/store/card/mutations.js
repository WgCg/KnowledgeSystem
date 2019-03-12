import * as types from './types'

export default {
    [types.set_card_info] (state, payload) {
        state.cardInfo = Object.assign({}, state.cardInfo, payload)
    },
    [types.set_card_status] (state, payload) {
        if ( state.cardInfo ) {
            state.cardInfo.status = payload
        }
    },
    [types.set_user_info] (state, payload) {
        state.userInfo = payload
    }
}