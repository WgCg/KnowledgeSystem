/**
 * global
 * DjUser: true
 */
import VueRequest from '../plugins/vue-request'
Vue.use(VueRequest)
import jsonp from 'jsonp'
import { VALIDATE_URL, HOME_URL } from 'constants/HTTP'

let base = {
    setTitle(title) {
        document.title = title
        var i = document.createElement('iframe')
        i.src = '/favicon.ico'
        i.style.display = 'none'
        i.onload = function() {
            setTimeout(function() {
                i.remove()
            }, 100)
        }
        document.body.appendChild(i)
    },
    setCookie(name, value) {
        var Days = 1
        var exp = new Date()
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
        document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
    },
    getCookie(name) {
        var arr,
            reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
        if ((arr = document.cookie.match(reg))) {
            const result = unescape(arr[2])
            return result
        } else {
            return null
        }
    },
    isApp() {
        var ret = false
        var userAgent = navigator.userAgent
        var ua = userAgent.toLowerCase()
        var cookiestr = document.cookie
        if (userAgent.indexOf('cdvsupport') >= 0 || cookiestr.indexOf('cdvsupport') >= 0) {
            ret = true
        }
        return ret
    },
    isWx() {
        var ret = false
        var userAgent = navigator.userAgent
        var ua = userAgent.toLowerCase()
        if (/micromessenger/.test(ua)) {
            ret = true
        }
        return ret
    },
    getAppType() {
        var ret = ''
        var userAgent = navigator.userAgent
        if (userAgent.indexOf('iPhone') >= 0 || userAgent.indexOf('iphone') >= 0 || userAgent.indexOf('ipad') >= 0) {
            ret = 'ios'
        } else {
            ret = 'android'
        }
        return ret
    },
    /**
     * 微信分享
     * validateUrl ajax验证获取appId接口的url
     * shareData 自定义分享参数：标题、内容、图片
     * shareUrl 分享后 用户打开的页面url 默认为当前页地址
     */
    // <script type="text/javascript" src="//res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    wxShare(
        validateUrl = VALIDATE_URL,
        shareData = {
            shareTitle: '标题',
            shareContent: '内容',
            shareImg: '图片'
        },
        shareUrl = HOME_URL
    ) {
        let url = window.location.href
        jsonp(
            validateUrl,
            {
                param: `url=${encodeURIComponent(url)}&callback` // vue-resource自己就encodeURIComponent 不能带hash
            },
            (err, res) => {
                if (res) {
                    let wechatData = res
                    wx.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: wechatData.appId, // 必填，公众号的唯一标识
                        timestamp: wechatData.timestamp, // 必填，生成签名的时间戳
                        nonceStr: wechatData.nonceStr, // 必填，生成签名的随机串
                        signature: wechatData.signature, // 必填，签名
                        jsApiList: [
                            'checkJsApi',
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage',
                            'onMenuShareQQ',
                            'onMenuShareWeibo',
                            'hideMenuItems',
                            'showMenuItems',
                            'hideAllNonBaseMenuItem',
                            'showAllNonBaseMenuItem',
                            'translateVoice',
                            'startRecord',
                            'stopRecord',
                            'onRecordEnd',
                            'playVoice',
                            'pauseVoice',
                            'stopVoice',
                            'uploadVoice',
                            'downloadVoice',
                            'chooseImage',
                            'previewImage',
                            'uploadImage',
                            'downloadImage',
                            'getNetworkType',
                            'openLocation',
                            'getLocation',
                            'hideOptionMenu',
                            'showOptionMenu',
                            'closeWindow',
                            'scanQRCode',
                            'chooseWXPay',
                            'openProductSpecificView',
                            'addCard',
                            'chooseCard',
                            'openCard'
                        ]
                    })

                    wx.ready(function() {
                        wx.onMenuShareTimeline({
                            title: shareData.shareTitle,
                            desc: shareData.shareContent,
                            link: shareUrl ? shareUrl : url,
                            imgUrl: shareData.shareImg,
                            trigger: function() {},
                            success: function() {},
                            cancel: function() {}
                        })

                        wx.onMenuShareAppMessage({
                            title: shareData.shareTitle,
                            desc: shareData.shareContent,
                            link: shareUrl ? shareUrl : url,
                            imgUrl: shareData.shareImg,
                            trigger: function(res) {},
                            success: function(res) {},
                            cancel: function(res) {},
                            fail: function(res) {}
                        })
                    })
                }
            }
        )
    }
}

export default base
