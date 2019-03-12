class Dep {
    constructor () {
        this.subs = []
    }
    addSub (_sub) {
        if (this.subs.indexOf(_sub) === -1) {
            this.subs.push(_sub)
        }
    }
    notify () {
        this.subs.forEach(_sub => {
            _sub.update()
        })
    }
    removeSub (_removeSub) {
        this.subs = this.subs.map((_subItem, _subIndex) => {
            return _subItem !== _removeSub
        })
    }
}
Dep.target = null

class Watcher {
    constructor (vm, keys, updateCb) {
        this.vm = vm
        this.keys = keys
        this.updateCb = updateCb
        this.value = null
        this.get()
    }
    get () {
        Dep.target = this
        const keys = this.keys.split('.')
        let value = this.vm
        keys.forEach(_key => {
            value = value[_key]
        })
        this.value = value
        Dep.target = null
        return this.value
    }
    update () {
        const oldValue = this.value
        const newValue = this.get()
        if (oldValue !== newValue) {
            this.updateCb(oldValue, newValue)
        }
    }
}

class Observer {
    constructor (_data) {
        if (!_data || typeof _data !== 'object') {
            return
        }
        this.data = _data
        this.walk()
    }
    walk () {
        for (let key in this.data) {
            this.defineReactive(this.data, key, this.data[key])
        }
    }
    defineReactive (_obj, _key, _value) {
        let dep = new Dep()
        new Observer(_value)
        Object.defineProperty(_obj, _key, {
            get () {
                console.log(_value)
                if (Dep.target) {
                    dep.addSub(Dep.target)
                }
                return _value
            },
            set (newValue) {
                if (newValue === _value) {
                    return
                }
                new Observer(newValue)
                _value = newValue
                dep.notify()
            }
        })
    }
}

let data = {
    name: 'wc',
    obj: {
        name: 'hehe'
    }
}

new Observer(data)
new Watcher(data, 'name', (_oldValue, _newValue) => {
    console.log(_oldValue, _newValue)
})

data.name = 'stupid'