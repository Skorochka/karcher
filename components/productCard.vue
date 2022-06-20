<template lang="pug">
    .card(v-if="card" )
        n-link.card__info(:to="('/product/' + card.id)")
            .card__img 
                img(:src="getImg()")
            h3.card__title(v-if="card.attributes.title") {{card.attributes.title}}
            p.card__price(v-if="card.attributes.price") £{{card.attributes.price}}
            .card__rating
            p.card__desc(v-if="card.attributes.description") {{card.attributes.description}}
        button.card__button(@click="addProductToBasket")
            span.icon
            span.text Add to basket
</template>
<script>
export default {
  props: ["card"],
  methods: {
    addProductToBasket() {
      this.$store.commit("app/UPDATE_BASKET", this.card);
    },
    getImg() {
      if (this.card.attributes.images.data) {
        let url;
        url = this.card.attributes.images.data[0].attributes.url;
        let link = `https://91aa-212-111-203-155.ngrok.io${url}`;
        return link;
      } else {
        return this.reserveImg;
      }
    },
  },
  data() {
    return {
      reserveImg: "/",
    };
  },
};
</script>
<style lang="scss" scoped>
.card {
  &__img {
    width: 285px;
    height: 285px;
    overflow: hidden;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__title {
    margin-top: 10px;
    font-size: 20px;
    font-weight: 500;
    color: var(--primary-color);
  }
  &__price {
    margin-top: 6px;
    font-size: 18px;
    font-weight: 500;
    color: var(--primary-color);
  }

  &__desc {
    margin-top: 20px;
    font-size: 13px;
    font-weight: 400;
    color: var(--primary-color);
  }
  &__button {
    width: 100%;
    padding: 13px 20px 11px;
    border: 1px solid #e3e3e3;
    background-color: var(--accent-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

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
