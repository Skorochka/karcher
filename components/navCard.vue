<template lang="pug">
    .nav-card(:class="{'type1': type === 1, 'type2': type === 2}") card
</template>
<script>
export default {
  props: ["type"],
};
</script>
<style lang="scss" scoped>
.nav-card {
  &.type1 {
    background-color: var(--accent-color);
  }
  &.type2 {
    background-color: rgb(110, 110, 110);
  }
}
</style>
