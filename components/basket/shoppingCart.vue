<template lang="pug">
    .cart 
        .cart__title Your shopping cart
        CartTable
        TotalBlock
        .cart__btns 
            n-link.cart__keep-shopping(:to="('/shop')") Keep shopping
            .cart__checkout Proceed to checkout
</template>
<script>
import CartTable from "~/components/basket/shoppingCartTable.vue";
import TotalBlock from "~/components/basket/totalBlock.vue";
export default {
  components: {
    CartTable,
    TotalBlock,
  },
};
</script>
<style lang="scss" scoped>
.cart {
  padding: 20px 105px;

  &__title {
    font-size: 30px;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--primary-color);
    margin-bottom: 10px;
  }

  &__btns {
    display: flex;
    margin-bottom: 15px;
    justify-content: flex-end;
  }
  &__keep-shopping {
    background-color: #e3e3e3;

    &::before {
      content: " ";
      width: 6px;
      height: 14px;
      background: transparent
        url(https://shop.kaercher.com/assets/images/icon-sprite.png) no-repeat -4px -1px;
      float: left;
      margin: 2px 8px 0 0;
      vertical-align: middle;
      margin: -2px 8px 0 0;
      float: none;
      display: inline-block;
    }
  }

  &__checkout {
    background-color: var(--accent-color);
    margin-left: 5px;

    &::after {
      content: " ";
      width: 6px;
      height: 14px;
      background: transparent
        url(https://shop.kaercher.com/assets/images/icon-sprite.png) no-repeat -21px -1px;
      float: left;
      margin: 2px 8px 0 0;
      vertical-align: middle;
      margin: -2px 0 0 10px;
      float: none;
      display: inline-block;
    }
  }

  &__checkout,
  &__keep-shopping {
    padding: 12px 20px;
    display: inline-block;
    border: 1px solid rgb(227, 227, 227);
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--primary-color);
  }
}
</style>
