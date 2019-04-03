<template lang="html">
  <button type="button" @click="counter++">{{ counter }}</button>
</template>

<script>
export default {
  data() {
    return {
      counter : 0
    }
  }
}
</script>

<style lang="css" scoped>
</style>
