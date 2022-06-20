<template lang="pug">
    .info-icons
        .info-icons__wraper
            .info-icons__card(v-for="(item, i) in list" :key="i")
                .info-icons__img 
                    img(:src="item.img")
                p.info-icons__text(v-html="item.text") {{item.text}}
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          img: "https://s1.kaercher-media.com/media/file/45411/delivery.png",
          text: "<span> FREE UK Delivery </span> on orders over £50",
        },
        {
          img: "https://s1.kaercher-media.com/media/file/45412/expertadvice.png",
          text: "Expert advice and support",
        },
        {
          img: "https://s1.kaercher-media.com/media/file/62822/1year_guarantee_html.png",
          text: "+1 extra year guarantee <br/> on Home & Garden machines",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.info-icons {
  padding: 30px 105px;

  &__wraper {
    padding: 30px 0;
    border-top: 1px solid rgba(43, 43, 43, 0.2);
    border-bottom: 1px solid rgba(43, 43, 43, 0.2);

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  &__card {
    text-align: center;
  }

  &__img {
    height: 65px;
    width: 100%;
    overflow: hidden;
    margin-bottom: 5px;
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  &__text ::v-deep {
    font-size: 13px;
    font-weight: 500;

    & span {
      font-weight: 700;
    }
  }
}
</style>
