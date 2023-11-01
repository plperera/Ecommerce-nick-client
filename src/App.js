import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
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
import AdminContext, { AdminProvider } from "./context/AdminContext"
import AdminAuth from "./pages/adminAuth/AdminAuth"
import Favorites from "./pages/favorites/Favorites"
import ThankYou from "./pages/thankyou/ThankYou"
import useToken from "./hooks/useToken"
import { useContext } from "react"
import WhatsAppButton from "./pages/whatsAppButton/WhatsAppButton"

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
                <AdminProvider>
                    <BrowserRouter>
                        <Menu/>
                        <WhatsAppButton/>
                        <Routes>
                            <Route path="/" element={<Home/>} />
                            <Route path="/catalogo/:categoryName" element={<AllProducts />} />
                            <Route path="/catalogo" element={<AllProducts />} />
                            <Route path="/produto/:productName" element={<UniqueProduct />} />
                            <Route path="/auth" element={<Auth />} />
                            <Route path="/carrinho" element={<Cart />} />

                            <Route path="/minha-conta" element={<ProtectedRouteGuard><UserAccount /></ProtectedRouteGuard>} />
                            <Route path="/favoritos" element={<ProtectedRouteGuard><Favorites /></ProtectedRouteGuard>} />
                            <Route path="/checkout" element={<ProtectedRouteGuard><Checkout /></ProtectedRouteGuard>} />
                            <Route path="/checkout/obrigado" element={<ProtectedRouteGuard><ThankYou /></ProtectedRouteGuard>} />
                            
                            <Route path="/admin/dashboard" element={<AdminProtectedRouteGuard><AdminDashboard/></AdminProtectedRouteGuard>}/>
                            <Route path="/admin/auth" element={<><AdminAuth/></>}/>  

                            <Route path="*" element={<NotFound />} />
                        </Routes>
                        <Footer/>
                    </BrowserRouter>
                </AdminProvider>
            </UserProvider>

        </>
    )
}

function ProtectedRouteGuard({ children }) {
    const token = useToken();
  
    if (!token) {
      return <Navigate to="/auth" />;
    }
  
    return <>{children}</>;
}
function AdminProtectedRouteGuard({ children }) {
    const { adminData } = useContext(AdminContext);

    if (!adminData?.token) {
      return <Navigate to="/admin/auth" />;
    }
  
    return <>{children}</>;
}