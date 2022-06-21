<template lang="pug">
    .nav
        NavCard(v-for="(card, i) in cards" :key="i" :info="card")
</template>
<script>
import NavCard from "~/components/navCard.vue";
export default {
  components: {
    NavCard,
  },
  data() {
    return {
      cards: [
        {
          type: 1,
          title: "Home & Garden",
          subtitle: "Cleaning devices for use around the home",
          link: "/shop/home-garden",
          img: require("~/assets/images/neu_hg_13_schlauch.webp"),
        },
        {
          type: 2,
          title: "Professional",
          subtitle: "Cleaning machines for professional use",
          link: "/shop/professional",
          img: require("~/assets/images/neu_prof_07_luftreiniger.webp"),
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
