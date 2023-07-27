import styled from "styled-components"
import MenuComponent from "../../components/menu/Menu"
import SubMenuComponent from "../../components/menu/SubMenu/SubMenu"
import { useLocation } from "react-router-dom";
import CheckoutMenu from "../../components/menu/CheckoutMenu/CheckoutMenu";
import { useState } from "react";

export default function Menu () {

    const location = useLocation();
    const isAdminRoute = location.pathname.includes("/admin");
    const isCheckoutRoute = location.pathname.includes("/checkout");

    const [ expandMenu, setExpandMenu ] = useState(false)

    return(
        isAdminRoute?(
        <AdminMenuContainer></AdminMenuContainer>
        ):(
            isCheckoutRoute?(
                <CheckoutMenu/>
            ):(
                <UserMenuContainer>
                    <MenuComponent setExpandMenu={setExpandMenu}/>
                    <SubMenuComponent expandMenu={expandMenu} setExpandMenu={setExpandMenu}/>
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
    @media (max-width: 850px) {
        height: auto;
    }
`
const AdminMenuContainer = styled.div`
`
