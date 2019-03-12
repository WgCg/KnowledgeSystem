/**
 * vue-router路径映射
 */
import base from '../lib/base'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 异步路由组件
const Index = resolve => {
    import('../container/index').then(module => resolve(module.default))
}

// 定义路由
const routes = [
    {
        path: '/index',
        name: 'index',
        component: Index,
        meta: {
            title: '首页'
        }
    },
    {
        path: '*',
        redirect: '/index'
    }
]

// 创建router实例
const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    // 设置页面title
    if( to.meta.title ) {
        base.setTitle(to.meta.title)
    }

    next()
})

export default router
