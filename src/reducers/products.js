let initialState = [
  {
    id: 1,
    name: "iphone 6plus",
    price: 4000,
    status: false
  },
  {
    id: 2,
    name: "iphone 7 plus",
    price: 5000,
    status: false
  },
  {
    id: 3,
    name: "iphone 8 plus",
    price: 6000,
    status: false
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default: return [...state]
  }
}

export default products;
