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
    }),
  },
  mounted() {
    let slug = this.$route.params.id;
    if (!slug) {
      console.log("shop page");
    } else if (slug === "professional") {
      console.log(slug, "professional");
    } else if (slug === "home-garden") {
      console.log(slug, "home-garden");
    }
  },
};
</script>
<style lang="scss" scoped></style>
