import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'stupid-vuex'

const store = createStore({
  a: 1,
})

// 跟踪被修改的位置
store.subscribe(({ keyPath, next, prev, force, stack }) => {
  console.log(keyPath, next, prev, force)
  console.log(stack)
})
// 把上面的这些变化记录下来后，你可以通过下面的方法再恢复当时的变化
/**
 * store.drive(keyPath, value)
 */

const app = createApp(App)
app.use(store)
app.mount('#app')
