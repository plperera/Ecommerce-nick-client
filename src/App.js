import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Home from "./pages/home/Home"
import Menu from "./pages/menu/Menu"
import Footer from "./pages/footer/Footer"
import AllProducts from "./pages/products/AllProducts"
import NotFound from "./pages/notFound/NotFound"


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
                    <Route path="/catalogo" element={<AllProducts />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer/>
            </BrowserRouter>

        </>
    )
}

