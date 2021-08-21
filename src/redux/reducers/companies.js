const initialState = {
  companies: [],
};
const companies = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COMPANIES ':
      return { ...state };
    default:
      break;
  }
};
export default companies;
