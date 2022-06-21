<template lang="pug">
    .benefits 
        .benefits__title Your benefits
        .benefits__wrap
            .benefits__item(v-for="(item, i) in benefits" :key="i")
                .benefits__img 
                    img(:src="item.img")
                .benefits__subtitle {{item.title}}
</template>
<script>
export default {
  data() {
    return {
      benefits: [
        {
          img: "https://shop.kaercher.com/assets/images/orderInfoBox/delivery.png",
          title: "Free delivery on all orders over £50.",
        },
        {
          img: "https://shop.kaercher.com/assets/images/orderInfoBox/safety.png",
          title: "Secure connection through SSL.",
        },
        {
          img: "https://shop.kaercher.com/assets/images/orderInfoBox/chat.png",
          title: "Help and advice via live chat.",
        },
        {
          img: "https://shop.kaercher.com/assets/images/orderInfoBox/payment.png",
          title: "We accept different payment methods.",
        },
        {
          img: "	https://shop.kaercher.com/assets/images/orderInfoBox/guarantee5.png",
          title: "Market leading guarantees*",
        },
        {
          img: "https://shop.kaercher.com/assets/images/orderInfoBox/return.png",
          title: "Hassle free returns.",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.benefits {
  padding: 30px 105px;

  &__title {
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 12px;
    border-bottom: 1px solid rgb(227, 227, 227);
    margin-bottom: 40px;
  }

  &__wrap {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 30px;
  }

  &__img {
    width: 120px;
    height: 80px;
    margin-right: auto;
    margin-left: auto;

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  &__subtitle {
    margin-top: 14px;
    font-size: 13px;
    line-height: 1.38;
  }
}
</style>
