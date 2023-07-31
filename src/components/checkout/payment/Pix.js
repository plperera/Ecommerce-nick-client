import styled from "styled-components"
import { MdPix } from 'react-icons/md';
import PixForm from "./PixForms";

export default function Pix ({ paymentSelected, SelectPayment, userData, checkoutDetails }) {
    return(
        <>
            {paymentSelected !== undefined && paymentSelected !== "Pix" ? (<></>):(
                <Container onClick={() => SelectPayment("Pix")}>  
                    <StyledIcon/>
                    <h3>{"Pix (EM DESENVOLVIMENTO)"}</h3>
                    {paymentSelected === "Pix"?(
                    <>  
                        <h4>{"Voltar"}</h4>
                    </>
                    ):(<></>)}
                </Container>
            )}
            {paymentSelected === "Pix"?(
                <PixForm userData={userData} checkoutDetails={checkoutDetails}/>
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
const StyledIcon = styled(MdPix)`
    font-size: 30px;
    color: #009395ff; 
`