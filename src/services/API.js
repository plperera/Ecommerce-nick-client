import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BACK_END_URL;

function GetAllCategories() {
    return axios.get(`${BASE_URL}/category`)
}
function GetAllImages({token}) {
    return axios.get(`${BASE_URL}/image/admin`, {headers: { Authorization: `Bearer ${token}`}})
}
function CreateCategory({body, token}) {
    return axios.post(`${BASE_URL}/category/admin`, body, {headers: { Authorization: `Bearer ${token}`}})
}
function CreateImage({formData, token}) {
    return axios.post(`${BASE_URL}/image/admin`, formData, {headers: { Authorization: `Bearer ${token}`}});
}



const api = {
    GetAllCategories,
    GetAllImages,
    CreateCategory,
    CreateImage
};

export default api;
