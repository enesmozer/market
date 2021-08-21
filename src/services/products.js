import http from '../utils/http';

const url = process.env.REACT_APP_API_URL;
const ProductService = {
  async list() {
    const response = await http.get(`${url}products`);
    if (response.status === 200) {
      return response.data;
    }
    throw response.error;
  },
};
export default ProductService;
