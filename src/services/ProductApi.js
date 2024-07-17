// Persist URL
const PRODUCT_URL = "/api/Products";

class ProductApi {
  speedData() {
    return axios.$.get(`${PRODUCT_URL}/GetAll`);
  }
  deleteAll() {
    return axios.$.delete(`${PRODUCT_URL}/DeleteAll`);
  }
  create(productDto) {
    return axios.$.post(`${PRODUCT_URL}/Add`, productDto);
  }
  getById(id) {
    return axios.$.get(`${PRODUCT_URL}/GetById/${id}`);
  }
  update(productDto) {
    return axios.$.put(`${PRODUCT_URL}/Update`, productDto);
  }
  delete(id) {
    return axios.$.delete(`${PRODUCT_URL}/Delete/${id}`);
  } 

}
export default new ProductApi();//services istediğim yerde çagırabilirim export sayesinde oldu...