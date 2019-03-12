import actions from './actions'
import mutations from './mutations'

export default {
    /* 
        cardInfo:
        status： 0:未购买，1：未使用，2：已使用，3：已失效
        purchaseTime：购卡时间
        invalidTime：卡失效时间
    */
    state: {
        cardInfo: null,
        userInfo: null
    },
    actions,
    mutations
}