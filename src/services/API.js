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
function GetAllCategoriesWithAllData(token) {
    return axios.get(`${BASE_URL}/category/admin`, {headers: { Authorization: `Bearer ${token}`}})
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
    return axios.get(`${BASE_URL}/product/unique/name/${encodeURIComponent(name)}`)
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
function UpdateCategory({body, token}) {
    return axios.put(`${BASE_URL}/category/admin`, body, {headers: { Authorization: `Bearer ${token}`}})
}
function DisableCategory({body, token}){
    return axios.put(`${BASE_URL}/category/admin/disable`, body, {headers: { Authorization: `Bearer ${token}`}});
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
function GetAllCategoriesCard(){
    return axios.get(`${BASE_URL}/homepage/category`);
}
function CreateBanner({body, token}){
    return axios.post(`${BASE_URL}/homepage/banner/admin`, body, {headers: { Authorization: `Bearer ${token}`}});
}
function UpdateBanner({body, token}){
    return axios.put(`${BASE_URL}/homepage/banner/admin`, body, {headers: { Authorization: `Bearer ${token}`}});
}
function DeleteBanner({body, token}){
    return axios.delete(`${BASE_URL}/homepage/banner/admin`, {data: body, headers: { Authorization: `Bearer ${token}`}});
}
function CreateHomeCategory({body, token}){
    return axios.post(`${BASE_URL}/homepage/category/admin`, body, {headers: { Authorization: `Bearer ${token}`}});
}
function UpdateHomeCategory({body, token}){
    return axios.put(`${BASE_URL}/homepage/category/admin`, body, {headers: { Authorization: `Bearer ${token}`}});
}
function DeleteHomeCategory({body, token}){
    return axios.delete(`${BASE_URL}/homepage/category/admin`, {data: body, headers: { Authorization: `Bearer ${token}`}});
}
function UpdateProduct({body, token}){
    return axios.put(`${BASE_URL}/product/admin`, body, {headers: { Authorization: `Bearer ${token}`}});
}
function DisableProduct({body, token}){
    return axios.put(`${BASE_URL}/product/admin/disable`, body, {headers: { Authorization: `Bearer ${token}`}});
}
function EnableProduct({body, token}){
    return axios.put(`${BASE_URL}/product/admin/enable`, body, {headers: { Authorization: `Bearer ${token}`}});
}
function CreateShipping({body, token}){
    return axios.post(`${BASE_URL}/shipping/admin`, body, {headers: { Authorization: `Bearer ${token}`}});
}
function UpdateShipping({body, token}){
    return axios.put(`${BASE_URL}/shipping/admin`, body, {headers: { Authorization: `Bearer ${token}`}});
}
function GetAllShippingMethodsData(token){
    return axios.get(`${BASE_URL}/shipping/admin`, {headers: { Authorization: `Bearer ${token}`}});
}
function DisableShipping({body, token}){
    return axios.put(`${BASE_URL}/shipping/admin/disable`, body, {headers: { Authorization: `Bearer ${token}`}});
}
function EnableShipping({body, token}){
    return axios.put(`${BASE_URL}/shipping/admin/enable`, body, {headers: { Authorization: `Bearer ${token}`}});
}
function GetUserEnrollment(token) {
    return axios.get(`${BASE_URL}/enrollment`, {headers: { Authorization: `Bearer ${token}`}})
}
function CreateUserEnrollment({body, token}) {
    return axios.post(`${BASE_URL}/enrollment`, body, {headers: { Authorization: `Bearer ${token}`}})
}
function UpdateUserEnrollment({body, token}) {
    return axios.put(`${BASE_URL}/enrollment`, body, {headers: { Authorization: `Bearer ${token}`}})
}
function GetAllUserOrders(token) {
    return axios.get(`${BASE_URL}/order`, {headers: { Authorization: `Bearer ${token}`}})
}
function GetAllOrders(token) {
    return axios.get(`${BASE_URL}/order/admin`, {headers: { Authorization: `Bearer ${token}`}})
}
function UpdateOrder({body, token}) {
    return axios.put(`${BASE_URL}/order/admin`, body, {headers: { Authorization: `Bearer ${token}`}})
}
function CreateNewOrderByPix({token, body}){
    return axios.post(`${BASE_URL}/order/pix`, body, {headers: { Authorization: `Bearer ${token}`}});
}
function GetProductsBannerHome() {
    return axios.get(`${BASE_URL}/homepage/productbanner`)
}
function CreateProductsBannerHome({body, token}) {
    return axios.post(`${BASE_URL}/homepage/productbanner/admin`, body, {headers: { Authorization: `Bearer ${token}`}})
}
function UpdateProductsBannerHome({body, token}) {
    return axios.put(`${BASE_URL}/homepage/productbanner/admin`, body, {headers: { Authorization: `Bearer ${token}`}})
}
function DeleteProductsBannerHome({body, token}) {
    console.log(body, token)
    return axios.delete(`${BASE_URL}/homepage/productbanner/admin`, {data: body, headers: { Authorization: `Bearer ${token}`}}); 
}
function CreateSubCategory({body, token}) {
    return axios.post(`${BASE_URL}/subcategory/admin`, body, {headers: { Authorization: `Bearer ${token}`}})
}
function UpdateSubCategory({body, token}) {
    return axios.put(`${BASE_URL}/subcategory/admin`, body, {headers: { Authorization: `Bearer ${token}`}})
}
function DisableSubCategory({body, token}){
    return axios.put(`${BASE_URL}/subcategory/admin/disable`, body, {headers: { Authorization: `Bearer ${token}`}});
}
function HandleCategoryLink({body, token}) {
    return axios.put(`${BASE_URL}/category/admin/subcategorylink`, body, {headers: { Authorization: `Bearer ${token}`}})
}
function GetAllSubCategoriesData(token) {
    return axios.get(`${BASE_URL}/subcategory/admin`, {headers: { Authorization: `Bearer ${token}`}})
}
function HandleProductLink({body, token}) {
    return axios.put(`${BASE_URL}/subcategory/admin/productlink`, body, {headers: { Authorization: `Bearer ${token}`}})
}

const api = {
    GetAllSubCategoriesData,
    HandleCategoryLink,
    CreateSubCategory,
    UpdateSubCategory,
    DisableSubCategory,
    GetAllCategories,
    GetAllImages,
    GetAllProductsByCategory,
    GetAllProductsWithAllData,
    GetAllProductsByProductId,
    GetUniqueProductByName,
    GetCepDetails,
    CreateCategory,
    UpdateCategory,
    DisableCategory,
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
    GetAllBanners,
    CreateBanner,
    UpdateBanner,
    DeleteBanner,
    CreateHomeCategory,
    GetAllCategoriesCard,
    UpdateHomeCategory,
    DeleteHomeCategory,
    UpdateProduct,
    DisableProduct,
    EnableProduct,
    CreateShipping,
    UpdateShipping,
    GetAllShippingMethodsData,
    DisableShipping,
    EnableShipping,
    GetUserEnrollment,
    CreateUserEnrollment,
    UpdateUserEnrollment,
    GetAllUserOrders,
    GetAllOrders,
    UpdateOrder,
    CreateNewOrderByPix,
    GetProductsBannerHome,
    CreateProductsBannerHome,
    UpdateProductsBannerHome,
    DeleteProductsBannerHome,
    GetAllCategoriesWithAllData,
    HandleProductLink
};

export default api;
