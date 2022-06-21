<template lang="pug">
    .basket 
        BasketHeader
        ShoppingCart
        Benefits
        Footer
</template>
<script>
import BasketHeader from "~/components/basket/basketHeader.vue";
import ShoppingCart from "~/components/basket/shoppingCart.vue";
import TotalBlock from "~/components/basket/totalBlock.vue";
import Benefits from "~/components/basket/benefits.vue";

import Footer from "~/components/footer.vue";

import { mapState } from "vuex";

export default {
  components: {
    BasketHeader,
    ShoppingCart,
    TotalBlock,
    Benefits,
    Footer,
  },
  mounted() {
    if (this.basket.length === 0 && localStorage.lSData) {
      let data = JSON.parse(localStorage.getItem("lSData"));
      this.$store.dispatch("app/getProductsForCart", data);
    }
  },
  computed: {
    ...mapState({
      basket: (state) => state.app.basket,
    }),
  },
};
</script>
