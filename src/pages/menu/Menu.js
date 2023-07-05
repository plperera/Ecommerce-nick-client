import styled from "styled-components"
import MenuComponent from "../../components/menu/Menu"
import SubMenuComponent from "../../components/menu/SubMenu/SubMenu"

export default function Menu () {

    return(
        <Container>
        
            <MenuComponent/>
            <SubMenuComponent/>
        
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 14vh;
    z-index: 9999;
    position: fixed;
    top: 0;
`
