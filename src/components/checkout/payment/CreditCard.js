import styled from "styled-components"
import { AiFillCreditCard } from 'react-icons/ai';
import CreditCardForm from "./CreditCardForm";

export default function CreditCard ({ paymentSelected, SelectPayment }) {
    return(
        <>
            {paymentSelected !== undefined && paymentSelected !== "Cartão de Crédito" ? (<></>):(
                <Container onClick={() => SelectPayment("Cartão de Crédito")}>  
                    <StyledIcon/>
                    <h3>{"Cartão de Crédito"}</h3>
                    {paymentSelected === "Cartão de Crédito"?(
                    <>  
                        <h4>{"Voltar"}</h4>
                    </>
                    ):(<></>)}
                </Container>
            )}
            {paymentSelected === "Cartão de Crédito"?(
                <CreditCardForm/>
            ):(<></>)}
        </>
    )
}
const Container = styled.div`
    width: 100%;
    height: 20px;
    background-color: #ECECEC;
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 2.3vh 1.2vw;
    border-radius: 5px;
    column-gap: 0.7vw;
    font-weight: 600;
    color: #02131bff;
    cursor: pointer;
    user-select: none;
    h4 {
        position: absolute;
        right: 39%;
        padding: .5vh 1vw;
        background-color: #02131B12;
        border-radius: 5px;
        &:hover { 
            background-color: #02131B20;
        }
    }
`
const StyledIcon = styled(AiFillCreditCard)`
    font-size: 30px;
    color: #009395ff; 
`