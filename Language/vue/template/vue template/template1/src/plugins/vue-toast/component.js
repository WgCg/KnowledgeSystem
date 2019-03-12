import './style.scss'

export default {
    name: 'Toast',
    data() {
        return {
            /**
             * 控制组件显示/隐藏
             */
            visible: false,
            /**
             * 组件显示信息
             */
            message: '',
            /**
             * 通过控制type显示不同的icon
             */
            type: ''
        }
    },
    render() {
        const { message, visible, type } = this

        return (
            <section class="vue-toast-container">
                <div
                    class="vue-toast"
                    { ...{ class: [ type, type && 'animation' ] } }
                    style={ { opacity: visible ? 1 : 0 } }>{ message }</div>
            </section>
        )
    }
}
