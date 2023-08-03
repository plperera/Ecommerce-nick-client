import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import api from "../../../../../services/API"
import { useCustomForm } from "../../../../../hooks/useCustomForms"
import AdminContext from "../../../../../context/AdminContext"
import Title from "./TitlePutOrders"
import OrderSelector from "../../selector/OrderSelector"
import OrderForms from "./OrderForms"

export default function UpdateOrders () {

    const [ selectedOrder, setSelectedOrder ] = useState(undefined)
    const [ orders, setOrders ] = useState(undefined)
    const [ form, handleForm, setForm ] = useCustomForm();
    const { adminData } = useContext(AdminContext);

    useEffect(() => {
        getAllOrders()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedOrder])

    async function getAllOrders(){
        try {
            const response = await api.GetAllOrders(adminData.token)
            setOrders(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Container>
            <Title setSelectedOrder={setSelectedOrder} orderData={selectedOrder} form={form} setForm={setForm} adminData={adminData}/>

            <SubContainer>
                {!selectedOrder ? (

                    orders?(<OrderSelector setSelectedOrder={setSelectedOrder} orders={orders}/>):(<></>)

                ):(

                    <OrderForms orderData={selectedOrder} form={form} handleForm={handleForm} setForm={setForm} token={adminData.token}/>

                )} 
            </SubContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: #171717;
    width: 100%;
    font-size: 21px;
    font-weight: 500;
`
const SubContainer = styled.div`
    //border: 1px solid red;
    margin-top: 7vh;
    padding: 25px 1.4vw;
    @media (max-width: 850px) {
        padding-top: 0;
        padding-left: 0;
    }
`

