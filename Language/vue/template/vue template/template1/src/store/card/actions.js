import * as types from './types'
import { reqErrorHandle } from '../../utils/util'
import { getCardStatus } from '../../api'
import base from '../../lib/base'
import VueRequest from '../../plugins/vue-request'
Vue.use(VueRequest)
import VueToast from '../../plugins/vue-toast'
Vue.use(VueToast)
import { getUserInfo } from '../../utils/appBridge'

export default {
    'card.getCardInfo'({ commit }, callback = () => {}) {
        if (!base.isLogin()) {
            base.Login()
        }
        commit(types.set_user_info, getUserInfo())
        getCardStatus({

        }).then((res) => {
            if ( res.code == 0 ) {
                if ( res.data ) {
                    commit(types.set_card_info, res.data)
                    callback()
                } else {
                    throw new Error('DATA ERROR')
                }
            } else {
                throw res
            }
        }).catch((err) => {
            reqErrorHandle(err)
        })
    },
    'card.setCardInfo'({ commit }, payload) {
        commit(types.set_card_info, payload)
    },
    'card.setCardStatus'({ commit }, payload) {
        commit(types.set_card_status, payload)        
    }
}