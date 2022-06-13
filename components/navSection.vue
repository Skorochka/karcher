<template lang="pug">
    .nav
        .nav__card(v-for="(card, i) in cards" :key="i")
            NavCard(:type="card.type")
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
        },
        {
          type: 2,
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
