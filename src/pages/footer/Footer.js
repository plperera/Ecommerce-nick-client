import styled from "styled-components"


import { useLocation } from "react-router-dom";
import FooterComponent from "../../components/footer/Footer";
import FooterCheckoutComponent from "../../components/footer/FooterCheckout";

export default function Footer () {

    const location = useLocation();
    const isAdminRoute = location.pathname.includes("/admin");
    const isCheckoutRoute = location.pathname.includes("/checkout");


    return(
        isAdminRoute?(
            <AdminFooterContainer></AdminFooterContainer>
        ):(
            isCheckoutRoute?(
                <FooterCheckoutComponent/>
            ):(
                <FooterComponent/>
            )
            
        )
    )
}
const AdminFooterContainer = styled.div`
`