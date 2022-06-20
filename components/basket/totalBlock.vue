<template lang="pug">
    .total 
        .total__price 
            .text Total
            .sum £{{countTotal()}}
        
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      basket: (state) => state.app.basket,
    }),
  },
  methods: {
    countTotal() {
      let total = 0;
      this.basket.forEach((el) => {
        let totalEl = Number(el.product.attributes.price) * Number(el.amount);
        total = total + totalEl;
      });

      return total;
    },
  },
};
</script>
<style lang="scss" scoped>
.total {
  padding: 15px;
  background-color: rgb(248, 248, 248);
  margin-bottom: 20px;

  &__price {
    display: flex;
    justify-content: flex-end;
  }

  & .text,
  & .sum {
    text-transform: uppercase;

    font-size: 20px;
    font-weight: 700;
    line-height: 1.4;
  }

  & .text {
    margin-right: 200px;
  }
}
</style>
