<template lang="pug">
    .home(v-if="title || text")
        //- .home__subtitle Home
        .home__title(v-if="title") {{title}}
        .home__text(v-if="text") {{text}}
</template>
<script>
export default {
  props: ["title", "text"],
};
</script>
<style lang="scss" scoped>
.home {
  padding: 30px 105px;
  background-color: var(--accent-color);

  //   &__subtitle {
  //     font-weight: 500;
  //     font-size: 11px;
  //     line-height: 1.42;
  //     color: #757575;
  //   }

  &__title {
    font-size: 30px;
    font-weight: 900;
    line-height: 1.42;
    margin: 10px 0 20px 0;
  }

  &__text {
    font-size: 13px;
    color: var(--primary-color);
    line-height: 1.42;
    font-weight: 400;
  }
}
</style>
