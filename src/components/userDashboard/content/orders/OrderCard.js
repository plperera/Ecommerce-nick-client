import { useState } from "react"
import styled from "styled-components"
import OrderTimeline from "./OrderTimeline"
import ProductDetails from "./ProductDetails"

export default function OrderCard ({orderData}) {

    const [ expandOrder, setExpandOrder] = useState(false)

    const obj = {
        waiting: {status: "waiting", label: "Processando", color:"#929292"},
        Payd: {status: "Payd", label: "Pagamento Recebido", color:"#0F9B22"},
        Sorting: {status: "Sorting", label: "Em Separação", color:"#1C6683"},
        ReceivedByCarrier: {status: "ReceivedByCarrier", label: "Recebido pela transportadora", color:"#259DCC"},
        InTransit: {status: "InTransit", label: "Em Transito", color:"#1CBFFF"},
        Delivered: {status: "Delivered", label: "Entregue", color:"#3452FF"},
        approved: { text: "Pagamento Aprovado", color:"#0F9B22"},
        credit_card: { text: "Cartão de Crédito", color:"#FFFFFF00"},
    }

    return(
        <Container>

            <ColumnContainer width={"20%"}>
                <Title>{"NÚMERO DO PEDIDO"}</Title>
                <SubTitle>{`# ${orderData.orderId + 10657}`}</SubTitle>
            </ColumnContainer>

            <ColumnContainer width={"22%"}>
                <Title>{"STATUS"}</Title>
                <SubTitle color={obj[orderData.status].color} fontweight={"600"}>{obj[orderData.status].label}</SubTitle>
            </ColumnContainer>

            <ColumnContainer width={"18%"}>
                <Title>{"DATA"}</Title>
                <SubTitle>{new Intl.DateTimeFormat('pt-BR').format(new Date(orderData.createdAt))}</SubTitle>
            </ColumnContainer>

            <ColumnContainer>
                <Title>{"PAGAMENTO"}</Title>
                <SubTitle>{obj[orderData.paymentType].text}</SubTitle>
            </ColumnContainer>

            <ColumnContainer>
                <StyledButton onClick={() => setExpandOrder(!expandOrder)}>{expandOrder?("Minimizar"):("Ver mais Detalhes")}</StyledButton>
            </ColumnContainer>

            {expandOrder ? (
                <>
                    <OtherDetailsContainer>
                        <OrderTimeline orderData={orderData}/>
                        <ProductDetails orderData={orderData}/>
                    </OtherDetailsContainer>
                </>
            ):(<></>)}

        </Container>
    )
}

const Container = styled.div`
   display: flex;
   flex-wrap: wrap;
   width: 100%;
   min-height: 115px;
   border-radius: 0px;
   padding: 8px 20px;
   box-shadow: 0 0 5px #0000001F;
`
const ColumnContainer = styled.div`
    display: flex;
    width: ${props => props.width || "20%"};
    height: calc(115px - 8px -8px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.div`
    height: 49.5px;
    width: 100%;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 14px;
    @media (max-width: 850px) {
        font-size: 8px;
        text-align: left;
    } 
`
const SubTitle = styled(Title)`
    font-weight: ${props => props.fontweight || "400"};
    color: ${props => props.color || "inherit"};
`
const StyledButton = styled.div`
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    font-weight: 600;
    color: #009395ff;
    user-select: none;
    @media (max-width: 850px) {
        font-size: 8px;
        text-align: left;
        justify-content: center;
        text-align: center;
    } 
`
const OtherDetailsContainer = styled.div`
    width: 100%;
    border-top: 2px solid #e6e6e6ff;
`
