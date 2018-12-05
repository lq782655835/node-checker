class EmitEvent {
    constructor() {
        this._events = {}
    }

    on(type, callback) {
        if(!this._events[type]) this._events[type] = []

        this._events[type].push(callback)
    }

    emit(type, ...args) {
        if(this._events[type]) {
            this._events[type].forEach(fn => fn.call(this, ...args))
        }
    }
}

let emitEvent = new EmitEvent()
emitEvent.on('a', (data) => console.log('123', data))
emitEvent.emit('a', { field: 1 })