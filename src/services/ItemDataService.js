import axios from 'axios'

class ItemDataService {
    getAll() {
      return axios.get("/item");
    }
  
    get(id) {
      return axios.get(`/item/${id}`);
    }
  
    create(data) {
      return axios.post("/item", data);
    }
  
    update(id, data) {
      return axios.put(`/item/${id}`, data);
    }
  
    delete(id) {
      return axios.delete(`/item/${id}`);
    }
  
    deleteAll() {
      return axios.delete(`/item`);
    }
  
    findByTitle(title) {
      return axios.get(`/item?title=${title}`);
    }
  }
  
  export default new ItemDataService();