import styled from "styled-components"

import Payment from "./Payment"
import OrderResume from "./OrderResume"
import Identification from "./identification/Identification"

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