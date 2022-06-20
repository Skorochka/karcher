<template lang="pug">
    .table 
        .table__header 
            .table__header-item(v-for="(name, i) in tableHeader" :key="i" :class="['name'+ i]") {{name}}
        .table__list
            .table__item(v-for="(product, i) in basket" :key="i")
                .table__item-about 
                    .table__item-about-img 
                        img(:src="getImg(product)")
                    .table__item-about-wrap 
                        .table__item-about-title {{product.product.attributes.title}}
                        .table__item-about-text Delivery in 1-2 Working days (excl. weekends/hols)
                        button.table__item-about-btn Remove
                .table__item-price £{{product.product.attributes.price}}
                .table__item-quantity 
                    input( type="number" :data-id="product.product.id" :value="product.amount" @change="changeValue")
                .table__item-total £{{countTotalPrice(product)}}
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      basket: (state) => state.app.basket,
    }),
  },
  data() {
    return {
      tableHeader: ["Item", "Item price", "Quantity", "Total price"],
      reserveImg: "/",
      selectOptions: [
        {
          value: 1,
          selected: false,
        },
        {
          value: 2,
          selected: true,
        },
      ],
      show: true,
    };
  },
  methods: {
    getImg(product) {
      console.log(product);
      if (product.product.attributes.images.data) {
        let url;
        url = product.product.attributes.images.data[0].attributes.url;
        let link = `https://91aa-212-111-203-155.ngrok.io${url}`;
        return link;
      } else {
        return this.reserveImg;
      }
    },
    changeValue(e) {
      let data = {
        value: Number(e.target.value),
        id: e.target.dataset.id,
      };
      this.$store.commit("app/UPDATE_PRODUCT_VALUE", data);
    },
    countTotalPrice(product) {
      let total =
        Number(product.amount) * Number(product.product.attributes.price);
      return total;
    },
  },
};
</script>
<style lang="scss" scoped>
.table {
  &__header {
    background-color: rgb(248, 248, 248);
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 0.5fr;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.38;
    color: var(--primary-color);
    padding: 8px 15px;
    margin-bottom: 20px;
    & .name1,
    & .name2 {
      margin-left: auto;
      margin-right: auto;
    }
    & .name3 {
      margin-left: auto;
    }
  }

  &__item {
    padding: 15px 15px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 0.5fr;

    &-quantity {
      margin-left: auto;
      margin-right: auto;
      & input {
        width: 50px;
        height: 50px;
        border: 1px solid rgb(204, 204, 204);
        padding: 11px 0;
        text-align: center;
        border-radius: 0;

        &:focus {
          outline-color: var(--accent-color);
        }
      }
    }

    &-price {
      font-size: 13px;
      font-weight: 400;
      color: var(--primary-color);
      margin-left: auto;
      margin-right: auto;
    }

    &-total {
      font-size: 16px;
      font-weight: 700;
      color: var(--primary-color);

      margin-left: auto;
    }

    &-about {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      &-title {
        font-size: 13px;
        font-weight: 500;
        color: var(--primary-color);
        margin-bottom: 8px;
      }
      &-text {
        font-size: 13px;
        font-weight: 400;
        color: var(--primary-color);
        margin-bottom: 8px;
      }

      &-btn {
        font-size: 13px;
        font-weight: 500;
        color: rgb(117, 117, 117);
      }
    }

    &-about-img {
      width: 100px;
      height: 100px;
      overflow: hidden;
      margin-right: 10px;
      & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }
  }
}
</style>
