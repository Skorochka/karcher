<template lang="pug">
    .nav
        .nav__card(v-for="(card, i) in cards" :key="i")
            NavCard(:info="card")
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
          link: "/",
          img: "https://s1.kaercher-media.com/media/image/file/91137/d2/neu_hg_13_schlauch.webp",
        },
        {
          type: 2,
          title: "Professional",
          subtitle: "Cleaning machines for professional use",
          link: "/",
          img: "https://s1.kaercher-media.com/media/image/file/91175/d2/neu_prof_07_luftreiniger.webp",
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
