<template lang="pug">
    .header
        .header__wrap
            .header__nav
                n-link.header__logo(:to="('/')")
                    img(src="~/assets/images/kaercher_logo.png")
                .header__name Online shop
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.header {
  border-bottom: 3px solid rgb(237, 237, 237);

  &__logo {
    margin-right: 15px;
    padding: 5px 0;
  }

  &__wrap {
    width: 100%;
    height: 100%;
    padding: 0 105px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 0;
    background-color: #fff;
  }

  &__nav {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 30px 0;
  }
  &__name {
    font-size: 22px;
    color: var(--primary-color);
    font-weight: 400;
    margin-left: 20px;
    line-height: 1.4;
  }
}
</style>
