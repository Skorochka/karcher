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
        require("~/assets/images/outdoor-vac.webp"),
        require("~/assets/images/hpw-wow-home-page.webp"),
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
