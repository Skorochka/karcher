<template lang="pug">
    .shop
        Header(:type="2")
        Information(:title="info.title" :text="info.text")
        ProductsList(:list="list")
        Footer
</template>
<script>
import Header from "~/components/header.vue";
import Information from "~/components/informationBlock.vue";
import ProductsList from "~/components/productsList.vue";
import Footer from "~/components/footer.vue";

import { mapState } from "vuex";

export default {
  components: {
    Header,
    Information,
    ProductsList,
    Footer,
  },
  data() {
    return {
      info: {
        title: "Online Shop",
        text: "Shop Kärcher products from our Home & Garden and Professional Range. Whether it's inside or outside the home, Kärcher has the solution for all cleaning missions. ",
      },
    };
  },
  computed: {
    ...mapState({
      list: (state) => state.app.productsList,
      basket: (state) => state.app.basket,
    }),
  },
  // mounted() {
  //   let slug = this.$route.params.id;

  //   this.$store.dispatch("app/getProducts", slug);

  //   if (this.basket.length === 0 && localStorage.lSData) {
  //     let data = JSON.parse(localStorage.getItem("lSData"));
  //     this.$store.dispatch("app/getProductsForCart", data);
  //   }
  // },
  async asyncData({ $api, route, store }) {
    let slug = route.params.id;
    store.dispatch("app/getProducts", slug);

    if (store.state.app.basket.length === 0) {
      store.dispatch("app/getProductsForCart");
    }
    return {
      // comp,
    };
  },
};
</script>
<style lang="scss" scoped></style>
