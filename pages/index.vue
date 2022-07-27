<template lang="pug">
    .main 
        Header(:type="1")
        Nav
        ShopNow
        InfoIcons
        OptionsSection
        TextSection
        Footer
</template>

<script>
import Header from "~/components/header.vue";
import Nav from "~/components/navSection.vue";
import ShopNow from "~/components/shopNowSection.vue";
import InfoIcons from "~/components/infoIconsSection.vue";
import OptionsSection from "~/components/optionsSection.vue";
import TextSection from "~/components/textSection.vue";
import Footer from "~/components/footer.vue";

import { mapState } from "vuex";

export default {
  name: "IndexPage",
  components: {
    Header,
    Nav,
    ShopNow,
    InfoIcons,
    OptionsSection,
    TextSection,
    Footer,
  },
  computed: {
    ...mapState({
      basket: (state) => state.app.basket,
    }),
  },
  mounted() {
    if (this.basket.length === 0 && localStorage.lSData) {
      let data = JSON.parse(localStorage.getItem("lSData"));
      this.$store.dispatch("app/getProductsForCart", data);
    }
  },
  // async asyncData({ $api, route, store }) {
  //   if (store.state.app.basket.length === 0) {
  //     store.dispatch("app/getProductsForCart");
  //   }
  //   return {
  //     // comp,
  //   };
  // },
};
</script>

<style lang="scss" scoped>
// .header-test {

// }
</style>
