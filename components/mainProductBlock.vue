<template lang="pug">
    .product(v-if="currentProduct")
        .product__images
            .product__main-img
                img(:src="getImg()")
            //- .product__small-imgs
            //-     .product__small-img(v-for="(img, i) in info.images" :key="i")
            //-         img(:src="img.img")
        .product__info
            .product__price(v-if="currentProduct.attributes") £{{currentProduct.attributes.price}}
            .product__delivery Delivery in 1-2 Working days (excl. weekends/hols)
            .product__part-num Part number: {{info.partNum}}
            button.product__button  
                span.icon
                span.text Add to basket
</template>
<script>
import { mapState } from "vuex";

export default {
  props: ["info"],
  methods: {
    getImg() {
      if (this.currentProduct.attributes) {
        let url;
        url = this.currentProduct.attributes.images.data[0].attributes.url;
        let link = `https://91aa-212-111-203-155.ngrok.io${url}`;
        return link;
      } else {
        return this.reserveImg;
      }
    },
  },
  computed: {
    ...mapState({
      currentProduct: (state) => state.app.currentProduct,
    }),
  },
};
</script>
<style lang="scss" scoped>
.product {
  margin: 30px 90px;
  border: 1px solid #f8f8f8;
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: #f8f8f8;

  &__images {
    background-color: #fff;
    padding: 0 170px;
  }

  &__main-img {
    width: 471px;
    height: 471px;
    overflow: hidden;
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  &__small-imgs {
    border: 1px solid #f8f8f8;
    display: flex;
  }
  &__small-img {
    width: 95px;
    height: 65px;
    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
  &__info {
    padding: 20px;
  }

  &__price {
    font-size: 32px;
    font-weight: 500;
    color: var(--primary-color);
    margin-bottom: 40px;
  }
  &__delivery,
  &__part-num {
    font-size: 13px;
    font-style: normal;
    color: var(--primary-color);
  }
  &__part-num {
    margin-top: 5px;
  }

  &__button {
    width: 100%;
    padding: 13px 20px 11px;
    border: 1px solid #e3e3e3;
    background-color: var(--accent-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    & .text {
      font-size: 13px;
      font-weight: 500;
      text-transform: uppercase;
      line-height: 1.38;
    }

    & .icon {
      display: inline-block;
      width: 21px;
      height: 18px;
      background: transparent
        url(https://s1.kaercher-media.com/versions/2022.12.0/static/img/sprites/sprite.png)
        no-repeat -20px -110px;
      overflow: hidden;
      text-indent: -999px;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
}
</style>
