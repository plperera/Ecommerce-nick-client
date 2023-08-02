import styled from "styled-components"
import CreditCard from "./CreditCard"
import Pix from "./Pix"
import { useState } from "react"

export default function Payment ({userData, checkoutDetails}) {
    const [paymentSelected, setPaymentSelected] = useState(undefined)

    function SelectPayment(method) {
        if (method === paymentSelected){
            return setPaymentSelected(undefined)
        }
        return setPaymentSelected(method)
    }

    return(
        <Container>  
            <Title>{"Pagamento"}</Title>

            <SubContainer>

                <CreditCard paymentSelected={paymentSelected} setPaymentSelected={setPaymentSelected} SelectPayment={SelectPayment} userData={userData} checkoutDetails={checkoutDetails}/>
                <Pix paymentSelected={paymentSelected} setPaymentSelected={setPaymentSelected} SelectPayment={SelectPayment} userData={userData} checkoutDetails={checkoutDetails}/>
                {/* <Boleto paymentSelected={paymentSelected} setPaymentSelected={setPaymentSelected} SelectPayment={SelectPayment}/> */}

            </SubContainer>

        </Container>
    )
}

const Container = styled.div`
    width: 32%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 850px) {
        width: 100%;
        margin-top: 3vh;
    }    
`
const SubContainer = styled.div`
    min-height: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    padding: 2vh 0.7vw;
    row-gap: 1vh;
    @media (max-width: 850px) {
        padding: 2vh 3vw;
    }
`
const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #CCCCCCCB;
    color: #02131bff;
    padding: 1vh 0;
    font-weight: 600;
`