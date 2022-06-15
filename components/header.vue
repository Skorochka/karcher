<template lang="pug">
    .header(:class="{'type1': type === 1, 'type2': type === 2}")
        .header__nav
            n-link.header__logo(:to="('/')")
                img(src="https://s1.kaercher-media.com/versions/2022.11.0/fileadmin/templates/kaercher2014/images/kaercher_logo.png")
            .header__links
                n-link.header__nav-item(:to="('/shop/home-garden')") Home & Garden
                n-link.header__nav-item(:to="('/shop/professional')") Professional
                n-link.header__nav-item(:to="('/shop')") shop
        n-link.header__basket(:to="('/')")
            img(src="https://s1.kaercher-media.com/versions/2022.11.0/static/img/picto_target_group_retail_oth_3_CI15_RGB.svg")

</template>
<script>
export default {
  props: ["type"],
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 90px;

  &.type1 {
    border-bottom: 6px solid rgb(237, 237, 237);
  }
  &.type2 {
    border-bottom: 6px solid var(--accent-dark-color);
  }

  &__logo {
    margin-right: 15px;
  }

  &__nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &-item {
      padding: 0 15px;
      text-transform: uppercase;
      font-weight: 500;
      font-family: ClanPro;
      color: var(--primary-color);
      font-size: 13px;
      transition: all 500ms ease;
      &:hover {
        color: var(--hover-color);
        cursor: pointer;
      }
    }
  }

  &__links {
    display: flex;
  }

  &__basket {
    width: 30px;
    height: 30px;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
