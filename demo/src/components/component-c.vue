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
