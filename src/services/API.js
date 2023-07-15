import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BACK_END_URL;

function GetAllCategories() {
    return axios.get(`${BASE_URL}/category`)
}
function GetAllImages({token}) {
    return axios.get(`${BASE_URL}/image/admin`, {headers: { Authorization: `Bearer ${token}`}})
}
function GetAllProducts() {
    return axios.get(`${BASE_URL}/product`)
}
function GetAllProductsByCategory(categoryId) {
    return axios.get(`${BASE_URL}/product/category/${categoryId}`)
}
function GetUniqueProductByName(name) {
    return axios.get(`${BASE_URL}/product/unique/name/${name}`)
}
function CreateCategory({body, token}) {
    return axios.post(`${BASE_URL}/category/admin`, body, {headers: { Authorization: `Bearer ${token}`}})
}
function CreateImage({formData, token}) {
    return axios.post(`${BASE_URL}/image/admin`, formData, {headers: { Authorization: `Bearer ${token}`}});
}
function CreateProduct({body, token}) {
    return axios.post(`${BASE_URL}/product/admin`, body, {headers: { Authorization: `Bearer ${token}`}});
}



const api = {
    GetAllCategories,
    GetAllImages,
    GetAllProductsByCategory,
    GetUniqueProductByName,
    CreateCategory,
    CreateImage,
    CreateProduct,
    GetAllProducts
};

export default api;
