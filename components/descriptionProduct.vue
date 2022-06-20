<template lang="pug">
    .desc(v-if="currentProduct")
        .desc__header
            .desc__block description
        .desc__text(v-if="currentProduct.attributes") {{currentProduct.attributes.description}}
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      currentProduct: (state) => state.app.currentProduct,
    }),
  },
};
</script>
<style lang="scss" scoped>
.desc {
  padding: 30px 0;

  &__header {
    border-bottom: 1px solid rgb(238, 238, 238);
    padding: 0 105px;
  }
  &__block {
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--accent-color);
    background-color: rgb(51, 51, 51);
    padding: 18px;
  }

  &__text {
    padding: 0 105px;
    font-size: 13px;
    font-weight: 400;
    color: rgb(43, 43, 43);
    margin-top: 20px;
  }
}
</style>
