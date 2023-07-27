import styled from "styled-components"

export default function OrderCard ({ orderData, setSelectedOrder }) {

    const obj = {
        approved: { text: "Pagamento Aprovado", color:"#0F9B22"},
        waiting: { text: "Processando", color:"#1B3D64"},
        credit_card: { text: "Cartão de Crédito", color:"#FFFFFF00"},
        Payd: {text: "Pagamento Recebido", color:"#FFFFFF00"},
        Sorting: {text: "Em Separação", color:"#FFFFFF00"},
        ReceivedByCarrier: {text: "Recebido pela transportadora", color:"#FFFFFF00"},
        InTransit: {text: "Em Transito", color:"#FFFFFF00"},    
        Delivered: {text: "Entregue", color:"#FFFFFF00"}               
    }

    return(
        <Container onClick={() => setSelectedOrder(orderData)}>
            <div>{orderData.orderId}</div>
            <div>{obj[orderData.status].text}</div>
            <div>{new Intl.DateTimeFormat('pt-BR').format(new Date(orderData.createdAt))}</div>
            <div>{obj[orderData.paymentType].text}</div>            
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    background-color: #EBEBEB;
    cursor: pointer;
    div {
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &:hover {
        background-color: #E1E8EB;
    }
`
