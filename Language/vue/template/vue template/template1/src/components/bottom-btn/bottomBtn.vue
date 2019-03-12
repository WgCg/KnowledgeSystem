<template>
    <div class="bottom-btn-wrapper border-top-1px" onselectstart="return false">
        <div class="bottom-btn" :class="[`btn-${type}`]" @click="clickEvent">
            {{ text }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'BottomBtn',
    props: {
        type: {
            type: String,
            default: 'confirm'
        },
        text: {
            type: String,
            default: '确定'
        }
    },
    methods: {
        clickEvent () {
            this.$emit('click-event')
        }
    }
}
</script>

<style lang="scss">
.bottom-btn-wrapper {
    position: fixed!important;
    bottom: 0;
    width: 100%;
    height: 1.28rem;
    background: #fff;
    .bottom-btn {
        height: .88rem;
        width: 7.1rem;
        line-height: .88rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        font-size: .34rem;
        border-radius: .08rem;
        color: #FFFFFF;
        &.btn-confirm {
            background: #E6454A;
            &:active {
                background: #C23A3F;
            }
        }
        &.btn-cancel {
            background: #959595;
        }
    }
}
</style>


