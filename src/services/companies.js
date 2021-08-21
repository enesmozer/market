import http from '../utils/http';

const url = process.env.REACT_APP_API_URL;
const CompanyService = {
  async list() {
    console.log(url);
    const response = await http.get(`${url}companies`);
    if (response.status === 200) {
      return response.data;
    }
    throw response.error;
  },
};
export default CompanyService;
