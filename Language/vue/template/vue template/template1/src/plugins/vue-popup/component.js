import './style.scss'

export default {
    name: 'Popup',
    data() {
        return {
            /**
             * 显示信息
             */
            message: String,
            /**
             * 取消回调
             */
            cancel: {
                type: Function
            },
            cancelText: {
                type: String,
                default: '取消'
            },
            /**
             * 确认回调
             */
            confirm: {
                type: Function
            },
            confirmText: {
                type: String,
                default: '确认'
            }
        }
    },
    render() {
        const { message, cancel, cancelText, confirm, confirmText } = this

        return (
            <section class="popup">
                <div class="popup-box">
                    <div class="popup-info">{ message }</div>
                    <div class="popup-button">
                        <p onClick={ cancel }>{ cancelText.default || cancelText }</p>
                        <p onClick={ confirm }>{ confirmText.default || confirmText }</p>
                    </div>
                </div>
            </section>
        )
    }
}
