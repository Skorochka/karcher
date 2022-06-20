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
  mounted() {
    let id = this.$route.params.id;
    this.$store.dispatch("app/getOneProduct", id);
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
    DescriptionBlock,
    Footer,
  },
};
</script>
