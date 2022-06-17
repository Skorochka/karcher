<template lang="pug">
    .header(:class="{'type1': type === 1, 'type2': type === 2}")
        .header__wrap
            .header__nav
                n-link.header__logo(:to="('/')")
                    img(src="https://s1.kaercher-media.com/versions/2022.11.0/fileadmin/templates/kaercher2014/images/kaercher_logo.png")
                .header__links
                    n-link.header__nav-item(:to="('/shop/home-garden')") Home & Garden
                    n-link.header__nav-item(:to="('/shop/professional')") Professional
                    n-link.header__nav-item(:to="('/shop')") shop
            .header__basket(@click="handlerBasketClick")
                .header__basket-amount(v-if="basket.length > 0") {{amountProductsInBasket()}}
                .header__basket-icon
                    img(src="https://s1.kaercher-media.com/versions/2022.11.0/static/img/picto_target_group_retail_oth_3_CI15_RGB.svg")
        .header__basket-popup(:class="{'show': showPopup && basket.length === 0}")
            h3.header__basket-popup-title Basket
            p.header__basket-popup-subtitle Your basket is empty.
            button.header__basket-popup-btn(@click="closePopup") Continue shopping
            button.header__basket-popup-close(@click="closePopup") x
</template>
<script>
import { mapState } from "vuex";

export default {
  props: ["type"],
  computed: {
    ...mapState({
      basket: (state) => state.app.basket,
    }),
  },
  methods: {
    handlerBasketClick() {
      if (this.basket.length !== 0) {
        this.$router.replace({ path: `/basket` });
      } else {
        this.showPopup = !this.showPopup;
      }
    },
    closePopup() {
      this.showPopup = !this.showPopup;
    },
    amountProductsInBasket() {
      let amount = 0;

      this.basket.forEach((el) => {
        amount = amount + el.amount;
      });

      return amount;
    },
  },
  data() {
    return {
      showPopup: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 0;

  &.type1 {
    border-bottom: 6px solid rgb(237, 237, 237);
  }
  &.type2 {
    border-bottom: 6px solid var(--accent-dark-color);
  }

  &__logo {
    margin-right: 15px;
  }

  &__wrap {
    width: 100%;
    height: 100%;
    padding: 0 90px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 0;
    background-color: #fff;
  }

  &__nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 0;

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
    padding: 23px 10px;
    cursor: pointer;
    position: relative;

    &-icon {
      width: 30px;
      height: 30px;
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    &-amount {
      border-radius: 50%;
      background-color: var(--accent-color);
      position: absolute;
      top: 15px;
      left: 10%;
      padding: 2px 5px;
      font-size: 12px;
      font-weight: 500;
    }

    transition: all 500ms ease;

    &:hover,
    &:focus {
      background-color: rgb(237, 237, 237);
    }
  }

  &__basket-popup {
    position: absolute;
    bottom: -172px;
    right: 89px;
    width: 550px;
    background-color: rgb(237, 237, 237);
    padding: 30px;
    z-index: -10;

    opacity: 0;
    pointer-events: none;
    transition: all 500ms ease;

    transform: translateY(-100px);

    &.show {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0);
    }

    &-title {
      padding-top: 20px;
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 7px;
    }

    &-subtitle {
      font-size: 13px;
      font-weight: 400;
    }

    &-btn {
      margin-top: 20px;
      background-color: rgb(227, 227, 227);
      padding: 12px 20px;
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      cursor: pointer;
    }

    &-close {
      border-radius: 50%;
      background-color: #fff;
      position: absolute;
      top: 20px;
      right: 20px;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
}
</style>
