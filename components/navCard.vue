<template lang="pug">
    .nav-card(v-if="info"  :class="{'type1': info.type === 1, 'type2': info.type === 2}") 
        .nav-card__img
            img(:src="info.img")
        .nav-card__info
            h2.nav-card__title {{info.title}}
            p.nav-card__subtitle {{info.subtitle}}
            n-link.nav-card__btn(:to="(info.link)") Learn more
</template>
<script>
export default {
  props: ["info"],
};
</script>
<style lang="scss" scoped>
.nav-card {
  &.type1 {
    background-color: var(--accent-color);

    .nav-card {
      &__title,
      &__subtitle,
      &__btn {
        color: var(--dark-color);
      }

      &__btn {
        border-color: var(--dark-color);
      }
    }
  }
  &.type2 {
    background-color: var(--accent-dark-color);

    .nav-card {
      &__title,
      &__subtitle,
      &__btn {
        color: var(--light-color);
      }

      &__btn {
        border-color: var(--light-color);
      }
    }
  }

  &__img {
    width: 504px;
    height: 415px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 50px;
    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__info {
    padding: 50px;
  }

  &__title {
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 10px;
  }
  &__subtitle {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.42;
  }

  &__btn {
    display: inline-block;
    border: 2px solid;
    padding: 10px 20px;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 30px;
    font-weight: 700;
  }
}
</style>
