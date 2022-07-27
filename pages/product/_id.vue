<template lang="pug">
    .product(v-if="currentProduct")
        Header(:type="2")
        Information(v-if="currentProduct.attributes" :title="currentProduct.attributes.title" :text="currentProduct.attributes.description")
        ProductInfo(:info="currentProduct")
        DescriptionBlock
        Footer
</template>
<script>
import Header from "~/components/header.vue";
import Information from "~/components/informationBlock.vue";
import ProductInfo from "~/components/mainProductBlock.vue";
import DescriptionBlock from "~/components/descriptionProduct.vue";

import Footer from "~/components/footer.vue";

import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      currentProduct: (state) => state.app.currentProduct,
      basket: (state) => state.app.basket,
    }),
  },
  async asyncData({ $api, route, store }) {
    let id = route.params.id;
    store.dispatch("app/getOneProduct", id);

    if (store.state.app.basket.length === 0) {
      store.dispatch("app/getProductsForCart");
    }

    return {
      // comp,
    };
  },
  mounted() {
    // let id = this.$route.params.id;
    // this.$store.dispatch("app/getOneProduct", id);
    // if (this.basket.length === 0 && localStorage.lSData) {
    //   let data = JSON.parse(localStorage.getItem("lSData"));
    //   this.$store.dispatch("app/getProductsForCart", data);
    // }
  },
  components: {
    Header,
    Information,
    ProductInfo,
    DescriptionBlock,
    Footer,
  },
};
</script>
