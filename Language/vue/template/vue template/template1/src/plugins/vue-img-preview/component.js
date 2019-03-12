import './style.scss'

export default {
    name: 'ImgPreviewer',
    data() {
        return {
            imgUrl: ''
        }
    },
    methods: {
        handleRemove() {
            this.$el.parentNode.removeChild(this.$el)
        }
    },
    render() {
        return (
            <section
                class="img-previewer"
                onClick={ this.handleRemove }>
                <img
                    src={ this.imgUrl } />
            </section>
        )
    }
}
