import http from '../utils/http';

const url = process.env.BASE_URL;
const CompanyService = {
  async list() {
    const response = await http.get(`${url}companies`);
    if (response.status === 200) {
      return response.data;
    }
    throw response.error;
  },
};
export default CompanyService;
