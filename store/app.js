export const actions = {
  async getProducts({ commit }, slug) {
    const qs = require("qs");

    // console.log("heloooooo", slug);

    let filters = {
      filters: {},
    };

    if (slug == "professional") {
      filters.filters.category = {
        $eq: "professional",
      };
    }
    if (slug == "home-garden") {
      filters.filters.category = {
        $eq: "home-garden",
      };
    }

    let query = qs.stringify(filters, {
      encodeValuesOnly: true, // prettify url
    });

    // console.log("query", query);

    try {
      // console.log("fhggfggff", this.$axios);
      // console.log("fhggfggff--", $axios);
      const response = await this.$axios.get(
        `/api/products?populate=*&${query}`
      );
      console.log("response", response);

      commit("UPDATE_PRODUCTS_LIST", response.data.data);
    } catch (err) {
      console.log(err);
    }
  },
  async getOneProduct({ commit }, id) {
    const qs = require("qs");

    let filters = {
      filters: {
        id: {
          $eq: id,
        },
      },
    };

    let query = qs.stringify(filters, {
      encodeValuesOnly: true, // prettify url
    });

    try {
      const response = await this.$axios.get(
        `/api/products?populate=*&${query}`
      );

      commit("UPDATE_SELECTED_PRODUCT", response.data.data);
    } catch (err) {
      console.log(err);
    }
  },
  async getProductsForCart({ commit }) {
    if (localStorage.getItem("lSData")) {
      let data = JSON.parse(localStorage.getItem("lSData"));
      commit("UPDATE_BASKET_FROM_LS", data);
    }
  },
};

const setBasketToLS = (basket) => {
  localStorage.setItem("lSData", JSON.stringify(basket));
};

export const mutations = {
  UPDATE_PRODUCTS_LIST(state, data) {
    console.log("data", data);
    state.productsList = data;
  },
  UPDATE_SELECTED_PRODUCT(state, product) {
    console.log("product", product[0]);
    state.currentProduct = product[0];

    console.log("productproductproductproduct", product[0]);
  },
  UPDATE_BASKET(state, prod) {
    let obj = {
      amount: 1,
      product: prod,
    };

    // if (state.basket.length === 0) {
    //   state.basket.push(obj);
    // } else {
    //   let find = false;
    //   state.basket.forEach((el) => {
    //     if (el.product.id === prod.id) {
    //       find = true;
    //     }
    //   });

    //   if (find) {
    //     state.basket.forEach((el) => {
    //       if (el.product.id === prod.id) {
    //         el.amount = el.amount + 1;
    //       }
    //     });
    //   } else {
    //     state.basket.push(obj);
    //   }
    // }
    const basketInd = state.basket.findIndex(
      (item) => item.product.id === prod.id
    );
    if (basketInd === -1) {
      state.basket.push(obj);
    } else {
      ++state.basket[basketInd].amount;
    }

    setBasketToLS(state.basket);
  },
  UPDATE_PRODUCT_VALUE(state, data) {
    state.basket.forEach((el) => {
      if (el.product.id == data.id) {
        el.amount = data.value;
      }
    });
  },
  REMOVE_PRODUCT_FROM_CART(state, id) {
    const indexOfObject = state.basket.findIndex((object) => {
      return object.product.id === id;
    });

    state.basket.splice(indexOfObject, 1);

    setBasketToLS(state.basket);
  },
  UPDATE_BASKET_FROM_LS(state, data) {
    state.basket = data;
  },
};
export const state = () => ({
  productsList: [],
  currentProduct: {},
  basket: [],
});
export const getters = {
  getBasket(state) {
    return state.basket;
  },
};
