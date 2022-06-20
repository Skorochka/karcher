export const actions = {
  async getProducts({ commit }, slug) {
    const qs = require("qs");

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

    try {
      const response = await this.$axios.get(
        `/api/products?populate=*&${query}`
      );

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
};
export const mutations = {
  UPDATE_PRODUCTS_LIST(state, data) {
    console.log("data", data);
    state.productsList = data;
  },
  UPDATE_SELECTED_PRODUCT(state, product) {
    console.log("product", product[0]);
    state.currentProduct = product[0];
  },
  UPDATE_BASKET(state, product) {
    let obj = {
      amount: 1,
      product: product,
      id: product.id,
    };

    if (state.basket.length === 0) {
      state.basket.push(obj);
    } else {
      state.basket.forEach((el) => {
        if (el.id === product.id) {
          el.amount = el.amount + 1;
        } else {
          state.basket.push(obj);
        }
      });
    }
  },
};
export const state = () => ({
  productsList: [],
  currentProduct: {},
  basket: [],
});
