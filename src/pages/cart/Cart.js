import styled from "styled-components"
import CartListComponent from "../../components/cart/CartList"
import CartResumeComponent from "../../components/cart/CartResume"

export default function Cart ({setContent, content, userData}) {
    return(
        <Container>    
            <CartListComponent/>
            <CartResumeComponent/>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 11vh;
    width: 100%;
    background-color: #0A1F2A;
    padding: 3vw 10vw 2vw 10vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; 
`