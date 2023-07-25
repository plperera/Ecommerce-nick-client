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
function GetAllProductsWithAllData(token) {
    return axios.get(`${BASE_URL}/product/admin`, {headers: { Authorization: `Bearer ${token}`}})
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
function AddNewFavorite({token, body}){
    return axios.post(`${BASE_URL}/favorite`, body, {headers: { Authorization: `Bearer ${token}`}});
}
function DeleteFavorite({token, body}){
    return axios.delete(`${BASE_URL}/favorite`, {data: body, headers: { Authorization: `Bearer ${token}`}});
}
function GetAllFavorites(token){
    return axios.get(`${BASE_URL}/favorite`, {headers: { Authorization: `Bearer ${token}`}});
}
function CreateNewOrder({token, body}){
    return axios.post(`${BASE_URL}/order`, body, {headers: { Authorization: `Bearer ${token}`}});
}
function GetAllShippingMethods(){
    return axios.get(`${BASE_URL}/shipping`);
}
function GetAllBanners(){
    return axios.get(`${BASE_URL}/homepage/banners`);
}



const api = {
    GetAllCategories,
    GetAllImages,
    GetAllProductsByCategory,
    GetAllProductsWithAllData,
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
    GetAllAddress,
    AddNewFavorite,
    GetAllFavorites,
    DeleteFavorite,
    CreateNewOrder,
    GetAllShippingMethods,
    GetAllBanners
};

export default api;
