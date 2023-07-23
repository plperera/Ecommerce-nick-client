import styled from "styled-components"

import Payment from "./payment/Payment"
import OrderResume from "./orderResume/OrderResume"
import Identification from "./identification/Identification"
import { useState } from "react"

export default function Checkout ({userData, allAddress, refreshAddress, setRefreshAddress}) {

    const [ checkoutDetails, setCheckoutDetails ] = useState({})

    return(
        <Container>  

            <Identification 
                userData={userData} 
                allAddress={allAddress} 
                refreshAddress={refreshAddress} 
                setRefreshAddress={setRefreshAddress} 
                setCheckoutDetails={setCheckoutDetails} 
                checkoutDetails={checkoutDetails}
            />

            <Payment 
                userData={userData}
                checkoutDetails={checkoutDetails}
            />

            <OrderResume
                userData={userData}
                checkoutDetails={checkoutDetails}
            />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
`