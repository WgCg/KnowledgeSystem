import actions from './actions'
import mutations from './mutations'

export default {
    /* type: 服务类型: 1：全部 2：家电、保洁 3：鲜花
    provinceName: 省份名称
    cityId: 城市id
    cityName: 城市名称
    serviceAddress：服务地址
    serviceTime：服务时间
    customName：联系人
    customPhone：联系电话
    productIdList：选择服务列表 */
    state: {
        orderList: []
    },
    actions,
    mutations
}