const initialState = {
  companies: [],
};
const companies = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COMPANIES ':
      return { ...state };
    default:
      return state;
  }
};
export default companies;
