import axios from 'axios'

class MerchantDataService {
    getAll() {
      return axios.get("/merchant");
    }
  
    get(id) {
      return axios.get(`/merchant/${id}`);
    }
  
    create(data) {
      return axios.post("/merchant", data);
    }
  
    update(id, data) {
      return axios.put(`/merchant/${id}`, data);
    }
  
    delete(id) {
      return axios.delete(`/merchant/${id}`);
    }
  
    deleteAll() {
      return axios.delete(`/merchant`);
    }
  
    findByTitle(title) {
      return axios.get(`/merchant?title=${title}`);
    }
  }
  
  export default new MerchantDataService();