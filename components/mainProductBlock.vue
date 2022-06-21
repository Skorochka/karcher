<template lang="pug">
    .product(v-if="currentProduct")
        .product__images(v-if="currentProduct.attributes")
            VueSlickCarousel(:arrows="false" :dots="false" v-bind="settings" ref="photosSlider")
              .product__main-img( v-for="(images, i) in currentProduct.attributes.images.data")
                  img(:src="getImg(images)")
            .product__btns-slider(@click="handlerSlide")
                .product__btns-slider-left(data-name="left")
                .product__btns-slider-right(data-name="right")
        .product__info
            .product__price(v-if="currentProduct.attributes") £{{currentProduct.attributes.price}}
            .product__delivery Delivery in 1-2 Working days (excl. weekends/hols)
            .product__part-num Part number: {{info.partNum}}
            button.product__button(@click="addProductToBasket") 
                span.icon
                span.text Add to basket
</template>
<script>
import { mapState } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  props: ["info"],
  methods: {
    getImg(image) {
      if (image) {
        let url;
        url = image.attributes.url;
        let link = `https://4d19-176-105-101-170.ngrok.io${url}`;
        return link;
      } else {
        return this.reserveImg;
      }
    },
    addProductToBasket() {
      this.$store.commit("app/UPDATE_BASKET", this.currentProduct);
    },
    handlerSlide(e) {
      console.log(e);
      if (e.target.dataset.name === "left") {
        this.$refs.photosSlider.prev();
      } else if (e.target.dataset.name === "right") {
        this.$refs.photosSlider.next();
      }
    },
  },
  computed: {
    ...mapState({
      currentProduct: (state) => state.app.currentProduct,
    }),
  },
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.product {
  margin: 30px 105px;
  border: 1px solid #f8f8f8;
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: #f8f8f8;

  &__images {
    background-color: #fff;
    // padding: 0 170px;
    overflow: hidden;
    position: relative;
  }

  &__btns-slider {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    &-left {
      width: 50px;
      height: 50px;
      position: absolute;
      top: 50%;
      left: 25px;
      z-index: 99;
      margin-top: -20px;
      background: #fff url(../assets/images/carousel_arrows.png) no-repeat 0 0;
      background-color: rgba(255, 255, 255, 0.3);
    }
    &-right {
      width: 50px;
      height: 50px;
      position: absolute;
      top: 50%;
      right: 25px;
      z-index: 99;
      margin-top: -20px;
      background: #fff url(../assets/images/carousel_arrows.png) no-repeat 0 0;
      background-color: rgba(255, 255, 255, 0.3);
      background-position: right;
    }
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
      background: transparent url(../assets/images/sprite.png) no-repeat -20px -110px;
      overflow: hidden;
      text-indent: -999px;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
}
</style>
