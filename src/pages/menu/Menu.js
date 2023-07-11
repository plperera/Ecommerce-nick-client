import styled from "styled-components"
import MenuComponent from "../../components/menu/Menu"
import SubMenuComponent from "../../components/menu/SubMenu/SubMenu"
import { useLocation } from "react-router-dom";

export default function Menu () {

    const location = useLocation();
    const isAdminRoute = location.pathname.includes("/admin");

    return(
        isAdminRoute?(
        <AdminMenuContainer></AdminMenuContainer>
        ):(
            <UserMenuContainer>
                <MenuComponent/>
                <SubMenuComponent/>
            </UserMenuContainer>
        )
        
    )
}

const UserMenuContainer = styled.div`
    width: 100%;
    height: 14vh;
    z-index: 9999;
    position: fixed;
    top: 0;
`
const AdminMenuContainer = styled.div`
`
