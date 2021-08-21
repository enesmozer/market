const initialState = {
  companies: [],
  loading: false,
  error: null,
};

const companies = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COMPANIES_REQUESTED':
      return { ...state, loading: true };
    case 'GET_COMPANIES_SUCCESS':
      return { ...state, loading: false, companies: action.companies };
    case 'GET_COMPANIES_FAILED':
      return { ...state, loading: false, error: action.message };
    default:
      return state;
  }
};

export default companies;
