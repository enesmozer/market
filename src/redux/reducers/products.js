const initialState = {
  products: [],
  loading: false,
  error: null,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_REQUESTED':
      return { ...state, loading: true };
    case 'GET_PRODUCTS_SUCCESS':
      return { ...state, loading: false, products: action.products };
    case 'GET_PRODUCTS_FAILED':
      return { ...state, loading: false, error: action.message };
    default:
      return state;
  }
};

export default products;
