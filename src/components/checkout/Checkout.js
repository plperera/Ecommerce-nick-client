import styled from "styled-components"

import Payment from "./payment/Payment"
import OrderResume from "./orderResume/OrderResume"
import Identification from "./identification/Identification"

export default function Checkout ({userData, allAddress, refreshAddress, setRefreshAddress}) {
    return(
        <Container>  
            <Identification userData={userData} allAddress={allAddress} refreshAddress={refreshAddress} setRefreshAddress={setRefreshAddress}/>
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