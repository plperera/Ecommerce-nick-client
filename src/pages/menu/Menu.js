import styled from "styled-components"
import MenuComponent from "../../components/menu/Menu"
import SubMenuComponent from "../../components/menu/SubMenu/SubMenu"
import { useLocation } from "react-router-dom";
import CheckoutMenu from "../../components/menu/CheckoutMenu/CheckoutMenu";

export default function Menu () {

    const location = useLocation();
    const isAdminRoute = location.pathname.includes("/admin");
    const isCheckoutRoute = location.pathname.includes("/checkout");

    return(
        isAdminRoute?(
        <AdminMenuContainer></AdminMenuContainer>
        ):(
            isCheckoutRoute?(
                <CheckoutMenu/>
            ):(
                <UserMenuContainer>
                    <MenuComponent/>
                    <SubMenuComponent/>
                </UserMenuContainer>
            )
            
        )
        
    )
}

const UserMenuContainer = styled.div`
    width: 100%;
    height: 14vh;
    z-index: 9;
    position: fixed;
    top: 0;
`
const AdminMenuContainer = styled.div`
`
