<template lang="pug">
    .product 
        Header(:type="2")
        Information(:title="currentProduct.title" :text="currentProduct.description")
        ProductInfo(:info="currentProduct")
        Footer
</template>
<script>
import Header from "~/components/header.vue";
import Information from "~/components/informationBlock.vue";
import ProductInfo from "~/components/mainProductBlock.vue";

import Footer from "~/components/footer.vue";

import { mapState } from "vuex";

export default {
  mounted() {
    let id = this.$route.params.id;
    this.$store.commit("app/UPDATE_SELECTED_PRODUCT", id);
  },
  computed: {
    ...mapState({
      currentProduct: (state) => state.app.currentProduct,
    }),
  },
  components: {
    Header,
    Information,
    ProductInfo,
    Footer,
  },
};
</script>
