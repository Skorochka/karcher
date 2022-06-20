<template lang="pug">
    .list
        .list__title Cold water pressure washers
        .list__cards 
            ProductCard(v-for="(card, i) in list" :key="i" :card="card")
</template>

<script>
import ProductCard from "~/components/productCard.vue";
export default {
  components: {
    ProductCard,
  },
  props: ["list"],
};
</script>
<style lang="scss" scoped>
.list {
  padding: 30px 105px;

  &__title {
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(227, 227, 227);
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--primary-color);
  }
  &__cards {
    padding: 20px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
}
</style>
