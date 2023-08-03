import styled from "styled-components"
import OrderCard from "./OrderCard"

export default function OrderSelector ({setSelectedOrder, orders, refresh}) {
    return(
        <Container>
            <TableTitle>
                <div>{"Número do Pedido"}</div>
                <div>{"Status"}</div>
                <div>{"Data"}</div>
                <div>{"Forma de Pagamento"}</div>
            </TableTitle>
            {orders ? (
                orders.map( e => 
                    
                    <OrderCard key={e.id} orderData={e} setSelectedOrder={setSelectedOrder}/>
                
                )
            ):(<h3>carregando...</h3>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
    color: #171717;
    width: 100%;
    min-height: 10vh;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    background-color: #39525E3A;
    border-radius: 5px;
    h3 {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
    }
    @media (max-width: 850px) {
        font-size: 10px;      
    }
`
const TableTitle = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    background-color: #39525E;
    color: #FFFFFF;
    div {
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: center;        
    }
`
