<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import ComponentB from './components/component-b.vue'
import ComponentC from './components/component-c.vue'
</script>

<template>
  <div>
    <HelloWorld msg="Hello Vue 3 + Vite" />
    <ComponentB />
    <ComponentC />
  </div>
</template>
