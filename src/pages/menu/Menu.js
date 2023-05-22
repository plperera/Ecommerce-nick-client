import styled from "styled-components"
import MenuComponent from "../../components/menu/Menu"

export default function Menu () {

    return(
        <Container>
            
            <MenuComponent/>
            
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 12vh;
    background-color: #02131B;
    padding: 0 10vw;
    position: absolute;
    top: 0;
`
