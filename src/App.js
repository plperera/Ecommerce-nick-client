import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Home from "./pages/home/Home"
import Menu from "./pages/menu/Menu"
import Footer from "./pages/footer/Footer"
import AllProducts from "./pages/products/AllProducts"
import NotFound from "./pages/notFound/NotFound"
import UniqueProduct from "./pages/uniqueProduct/UniqueProduct"
import Auth from "./pages/auth/Auth"
import AdminDashboard from "./pages/adminDashboard/AdminDashboard"


export default function App (){
 
    return(
        <>
            <ToastContainer 
            position="top-right"
            autoClose={3500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/catalogo/:categoryName" element={<AllProducts />} />
                    <Route path="/catalogo" element={<AllProducts />} />
                    <Route path="/produto/:productName" element={<UniqueProduct />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer/>
            </BrowserRouter>

        </>
    )
}

