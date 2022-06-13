<template lang="pug">
    .option-card(v-if="card") 
        .option-card__img
            img(:src="card.img")
        p.option-card__title {{card.title}}
        p.option-card__text {{card.text}}
</template>
<script>
export default {
  props: ["card"],
};
</script>
<style lang="scss" scoped>
.option-card {
  &__img {
    width: 285px;
    height: 142px;
    overflow: hidden;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__title {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.1;
    margin: 5px 0 10px 0;
  }

  &__text {
    font-size: 13px;
    line-height: 1.42;
    font-family: ClanPro;
    font-weight: 400;
  }
}
</style>
