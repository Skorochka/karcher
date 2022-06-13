<template lang="pug">
    .options
        .options__wraper
            .options__card(v-for="(card, i) in cards" :key="i")
                OptionCard(:card="card")
</template>
<script>
import OptionCard from "~/components/optionCard.vue";
export default {
  components: {
    OptionCard,
  },
  data() {
    return {
      cards: [
        {
          title: "Accessories",
          text: "Discover the Kärcher range of Home & Garden and Professional accessories and get the most out of your Kärcher cleaning machine.",
          img: "https://s1.kaercher-media.com/media/image/selection/2507/d3/accessories.webp",
        },
        {
          title: "Detergents",
          text: "Shop Kärcher Home & Garden detergents, specially formulated for specific tasks to deliver optimal cleaning performance.",
          img: "https://s1.kaercher-media.com/media/image/selection/3802/d3/detergents.webp",
        },
        {
          title: "Register or Review Your Product",
          text: "Leave us a review or register your product to keep up-to-date with the latest information, offers and tips.",
          img: "https://s1.kaercher-media.com/media/image/selection/52618/d3/123.webp",
        },
        {
          title: "Industry Solutions",
          text: "Kärcher offer an extensive range of products tailored precisely to your requirements.",
          img: "https://s1.kaercher-media.com/media/image/selection/3378/d3/professional-products-for-industry.webp",
        },
        {
          title: "Kärcher Center Locations",
          text: "Find your local Kärcher specialist, for the full range of home and garden and professional products as well as servicing and expert advice.",
          img: "https://s1.kaercher-media.com/media/image/selection/3551/d3/center-showroom-shop.webp",
        },
        {
          title: "Cleaning and hygiene in times of coronavirus",
          text: "The coronavirus, known as SARS-CoV-2, is spreading worldwide. With simple hygiene measures, everyone can help to protect themselves and others from the life-threatening lung disease and stem its rapid spread.",
          img: "https://s1.kaercher-media.com/media/image/selection/52617/d3/cv19-news.webp",
        },
        {
          title: "Home Line Range",
          text: "Our Home Line range showcases our premium range of indoor products. Combine style with effective cleaning results.",
          img: "https://s1.kaercher-media.com/media/image/selection/35516/d3/home-line-white.webp",
        },
        {
          title: "+1 extra year guarantee",
          text: "+1 extra year guarantee on Home and Garden machines when you buy direct from Kärcher.",
          img: "https://s1.kaercher-media.com/media/image/selection/17690/d3/1-year-guarantee-teaser.webp",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.options {
  padding: 30px 90px;
  &__wraper {
    padding: 30px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid rgba(43, 43, 43, 0.2);
    border-bottom: 1px solid rgba(43, 43, 43, 0.2);
    gap: 30px;
  }
}
</style>
