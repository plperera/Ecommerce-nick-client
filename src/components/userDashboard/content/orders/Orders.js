import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import api from "../../../../services/API"
import OrderCard from "./OrderCard"

export default function Orders ({userData}) {

    const [ ordersData, setOrdersData] = useState(undefined)

    useEffect(() => {
        getAllOrdersData()
    }, [])

    useEffect(() => {
        console.log(ordersData)
    }, [ordersData])

    async function getAllOrdersData(){
        try {
            const response = await api.GetAllUserOrders(userData.token)
            setOrdersData(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    return(
        <Container>
            <Title>{"Meus Pedidos"}</Title>
            {ordersData ? (
                <OrdersContainer>
                    {ordersData.map(e => <OrderCard orderData={e}/>)}
                </OrdersContainer>
            ):(<></>)}
        </Container>
    )
}

const Container = styled.div`
    //height: 100%;
    //border-right: 2px solid #D1D1D1;
    display: flex;
    flex-direction: column;
    justify-content: start;
    row-gap: 2vh;
    padding: 25px 1.4vw;
    
`
const Title = styled.h1`
    color: #02131B;
    font-size: 21px;
    font-weight: 500;
    width: 100%;
    margin-bottom: 4vh;
    
`
const OrdersContainer = styled.div`
    width: 100%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    row-gap: 1.8vh;
`