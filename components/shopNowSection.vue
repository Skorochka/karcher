<template lang="pug">
    .shop-now 
        .shop-now__img(v-for="(img, i) in info" :key="i")
            img(:src="img")
</template>
<script>
export default {
  data() {
    return {
      info: [
        "https://s1.kaercher-media.com/media/image/selection/112572/d2/outdoor-vac.webp",
        "https://s1.kaercher-media.com/media/image/selection/107997/d2/hpw-wow-home-page.webp",
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.shop-now {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 105px;

  &__img {
    width: 600px;
    height: 300px;
    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
