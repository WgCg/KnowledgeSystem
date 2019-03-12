<template>
    <div class="index-wrapper">
        index
    </div>
</template>

<script>

import VueToast from '../plugins/vue-toast'
Vue.use(VueToast)
import VueLoading from '../plugins/vue-page-loading'
Vue.use(VueLoading)
import VueDialog from '../plugins/vue-dialog'
Vue.use(VueDialog)



export default {
    name: 'Index',
    data: () => {
        return {
            msg: 'index'
        }
    },
    created () {
        Vue.toast('hahaha')
    },
    methods: {

    },
    components: {
        
    }
}
</script>

<style lang="scss" scoped>
@import '../style/_variable';
@import '../style/_mixins';

</style>


