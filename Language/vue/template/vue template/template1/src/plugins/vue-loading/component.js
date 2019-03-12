import './style.scss'

export default {
    name: 'Loading',
    render() {
        return (
            <section
                class="vue-loading"
                loading-component>
                <div class="vue-loading-el"></div>
                <div class="vue-loading-text">正在加载服务时间</div>
            </section>
        )
    }
}
