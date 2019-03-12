import './style/app.scss'
import router from './router'
import base from '../src/lib/base'
import { isApp, initCordova } from './utils/appBridge'
import need from './utils/need'
import { RESOURCE_HOST, HOME_URL } from '../constants/HTTP'

// import '../mock'

// 加载fastclick
need(
    RESOURCE_HOST + '/library/fastclick.js',
    () => {
        document.addEventListener('DOMContentLoaded', () => {
            FastClick.attach(document.body)
        }, false)
    }
)

// 挂载根实例
function initVueInstance() {
    new Vue({
        el: '#mount',
        router,
        render() {
            return (
                <transition>
                    <router-view />
                </transition>
            )
        }
    })
}

// 初始化cordova
if(isApp()) {
    initCordova()

    document.addEventListener('deviceready', () => {
        initVueInstance()
        base.onDeviceReady()
        base.appShare({
            shareUrl: HOME_URL,
            iconUrl: `${RESOURCE_HOST}/assets/share.jpg`,
            title: '标题',
            content: '内容'
        })
    })
} else {
    initVueInstance()
}

