import styled from "styled-components"
import CheckoutComponent from "../../components/checkout/Checkout"

export default function Checkout ({setContent, content, userData}) {
    return(
        <Container>    
            <CheckoutComponent/>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 8vh;
    width: 100%;
    min-height: 84vh;
    background-color: #0A1F2A;  
    padding: 25px 10vw;
`