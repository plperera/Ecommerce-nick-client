import styled from "styled-components"
import Identification from "./Identification"
import Payment from "./Payment"
import OrderResume from "./OrderResume"

export default function Checkout ({setContent, content, userData}) {
    return(
        <Container>  
            <Identification/>
            <Payment/>
            <OrderResume/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
`