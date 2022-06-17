export const actions = {};
export const mutations = {
  UPDATE_SELECTED_PRODUCT(state, id) {
    state.productsList.forEach((el) => {
      if (el.id == id) {
        state.currentProduct = el;
      }
    });
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
  productsList: [
    {
      id: 1,
      price: "1912.99",
      title: "HD 7/12-4 M Plus",
      description:
        "The HD 7/12-4 M Plus, a powerful, robust and versatile cold water pressure washer with good accessory storage and perfect manoeuvrability for daily operation",
      categoty: "",
      img: "https://s1.kaercher-media.com/products/15249390/main/1/d3.jpg",
      images: [
        {
          img: "https://s1.kaercher-media.com/products/15249390/main/1/d3.jpg",
        },
        {
          img: "https://s1.kaercher-media.com/products/15249390/main/1/d3.jpg",
        },
        {
          img: "https://s1.kaercher-media.com/products/15249390/main/1/d3.jpg",
        },
        {
          img: "https://s1.kaercher-media.com/products/15249390/main/1/d3.jpg",
        },
      ],
      partNum: "1111",
    },
    {
      id: 2,
      price: "1912.99",
      title: "HD 7/12-4 M Plus",
      description:
        "The HD 7/12-4 M Plus, a powerful, robust and versatile cold water pressure washer with good accessory storage and perfect manoeuvrability for daily operation",
      categoty: "",
      img: "https://s1.kaercher-media.com/products/15249390/main/1/d3.jpg",
      images: [
        {
          img: "https://s1.kaercher-media.com/products/15249390/main/1/d3.jpg",
        },
        {
          img: "https://s1.kaercher-media.com/products/15249390/main/1/d3.jpg",
        },
        {
          img: "https://s1.kaercher-media.com/products/15249390/main/1/d3.jpg",
        },
        {
          img: "https://s1.kaercher-media.com/products/15249390/main/1/d3.jpg",
        },
      ],
      partNum: "1111",
    },
  ],
  currentProduct: {},
  basket: [],
});
