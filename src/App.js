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
import { UserProvider } from './context/UserContext';
import UserAccount from "./pages/userAccount/UserAccount"
import Cart from "./pages/cart/Cart"
import Checkout from "./pages/checkout/Checkout"
import { AdminProvider } from "./context/AdminContext"
import AdminAuth from "./pages/adminAuth/AdminAuth"
import Favorites from "./pages/favorites/Favorites"
import ThankYou from "./pages/thankyou/ThankYou"

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
            <UserProvider>
                <BrowserRouter>
                    <Menu/>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/catalogo/:categoryName" element={<AllProducts />} />
                        <Route path="/catalogo" element={<AllProducts />} />
                        <Route path="/produto/:productName" element={<UniqueProduct />} />
                        <Route path="/auth" element={<Auth />} />
                        <Route path="/minha-conta" element={<UserAccount />} />
                        <Route path="/favoritos" element={<Favorites />} />
                           
                        <Route path="/admin/dashboard" element={<AdminProvider><AdminDashboard/></AdminProvider>}/>
                        <Route path="/admin/auth" element={<AdminProvider><AdminAuth/></AdminProvider>}/>

                        <Route path="/carrinho" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/checkout/obrigado" element={<ThankYou />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </UserProvider>

        </>
    )
}

