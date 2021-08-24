<template>
  <div>
    <span>a: {{a}}</span>
    <button @click="change">change</button>
  </div>
</template>

<script>
export default {
  computed: {
    a() {
      return this.$state.a
    },
  },
  methods: {
    change() {
      this.$state.a ++
    },
  },
}
</script>
