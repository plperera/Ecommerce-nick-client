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
function GetAllProductsByProductId(productArray) {
    return axios.get(`${BASE_URL}/product/findmany/${productArray}`)
}
function GetAllProductsByCategory(categoryId) {
    return axios.get(`${BASE_URL}/product/category/${categoryId}`)
}
function GetUniqueProductByName(name) {
    return axios.get(`${BASE_URL}/product/unique/name/${name}`)
}
function GetAllAddress(token) {
    return axios.get(`${BASE_URL}/address`, {headers: { Authorization: `Bearer ${token}`}})
}
function CreateAddress({body, token}) {
    return axios.post(`${BASE_URL}/address`, body, {headers: { Authorization: `Bearer ${token}`}})
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
function CreateAccount(body) {
    return axios.post(`${BASE_URL}/auth/sign-up`, body);
}
function CreateSession(body) {
    return axios.post(`${BASE_URL}/auth/sign-in`, body);
}
function CreateAdminSession(body) {
    return axios.post(`${BASE_URL}/admin/auth/sign-in`, body);
}
function GetCepDetails(cep){
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
}


const api = {
    GetAllCategories,
    GetAllImages,
    GetAllProductsByCategory,
    GetAllProductsByProductId,
    GetUniqueProductByName,
    GetCepDetails,
    CreateCategory,
    CreateAddress,
    CreateImage,
    CreateProduct,
    CreateAccount,
    CreateSession,
    CreateAdminSession,
    GetAllProducts,
    GetAllAddress
};

export default api;
