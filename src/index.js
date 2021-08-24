import { reactive, inject } from 'vue'
import { createReactive } from 'ts-fns/es/object'
import { assign } from 'ts-fns/es/key-path'

export class Store {
  constructor(initState) {
    this._subscribers = []
    this._silent = false

    const state = createReactive(initState, {
      dispatch: ({ keyPath, next, prev }, force) => {
        if (this._silent) {
          return
        }
        const trace = new Error().stack
        const lines = trace.split('\n')
        lines.shift()
        lines.shift()
        lines.shift()
        lines.shift()
        lines.shift()
        lines.shift()
        const stack = lines.join('\n')
        this._subscribers.forEach((fn) => {
          fn({ keyPath, next, prev, force, stack })
        })
      },
    })
    const react = reactive({
      data: state,
    })
    this.state = react.data
  }

  subscribe(fn) {
    const subs = this._subscribers
    if (!subs.includes(fn)) {
      subs.push(fn)
    }
    return () => {
      subs.forEach((item, i) => {
        if (item === fn) {
          subs.splice(i, 1)
        }
      })
    }
  }

  drive(key, value) {
    this._silent = true
    assign(this.state, key, value)
    this._silent = false
  }

  install(app) {
    app.provide('$state', this.state)
    app.config.globalProperties.$state = this.state
  }
}

export function createStore(initState) {
  return new Store(initState)
}

export function useState() {
  return inject('$state')
}
