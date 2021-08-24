# STUPID VUEX

傻瓜式vuex，我心目中真正正宗的vuex。

## 安装

```
npm i stupid-vuex
```

## 使用

*仅支持vue3！*

```js
import { createApp } from 'vue'
import { createStore } from 'stupid-vuex'

const app = createApp(...)
const store = createStore({
  some: 1,
})

app.use(store)
app.mount('#root')
```

在app内的任意组件中，你可以这样使用:

```js
export default {
  computed: {
    some() {
      return this.$state.some
    },
  },
  methods: {
    update() {
      this.$state.some ++
    },
  },
}
```

或者使用composition api：

```html
<script setup>
import { useState } from 'stupid-vuex'

const $state = useState()
const change = () => {
  $state.a ++
}
</script>

<template>
  <div>
    <span>a: {{$state.a}}</span>
    <button @click="change">change</button>
  </div>
</template>
```

## 追踪改动

如果你想知道状态在哪个地方被修改了（一般在开发时才有这个需求），你可以使用下面这个操作：

```js
store.subscribe(({ keyPath, next, prev, stack }) => {
  console.log(keyPath, next, prev)
  console.log(stack) // 需要单独一行才能在浏览器里面显示为可点击的地址
})
```

你可以通过stack追踪到具体修改状态的那一行代码。
