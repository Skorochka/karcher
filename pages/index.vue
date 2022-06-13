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
};
</script>

<style lang="scss" scoped>
// .header-test {

// }
</style>
