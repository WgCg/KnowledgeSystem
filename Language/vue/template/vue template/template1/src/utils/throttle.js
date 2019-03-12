export default function({ action, interval = 50 }) {
    let timer

    return function() {
        clearTimeout(timer)
        timer = setTimeout(() => {
            action && action()
        }, interval)
    }
}
