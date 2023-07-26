import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import api from "../../../../../services/API"
import { useCustomForm } from "../../../../../hooks/useCustomForms"
import AdminContext from "../../../../../context/AdminContext"
import Title from "./TitlePutShipping"
import ShippingSelector from "../../selector/ShippingSelector"
import ShippingForms from "./ShippingForms"

export default function PutShipping () {

    const [ selectedShipping, setSelectedShipping ] = useState(undefined)
    const [ shippings, setShippings ] = useState(undefined)
    const [ form, handleForm, setForm ] = useCustomForm();
    const { adminData } = useContext(AdminContext);

    useEffect(() => {
        getAllShippingMethods()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedShipping])

    async function getAllShippingMethods(){
        try {
            const response = await api.GetAllShippingMethodsData(adminData.token)
            setShippings(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Container>
            <Title setSelectedShipping={setSelectedShipping} shippingData={selectedShipping} form={form} setForm={setForm} adminData={adminData}/>
        
            <SubContainer>
                {!selectedShipping ? (

                    shippings?(<ShippingSelector setSelectedShipping={setSelectedShipping} shippings={shippings}/>):(<></>)

                ):(
                   
                    <ShippingForms shippingData={selectedShipping} form={form} handleForm={handleForm} setForm={setForm}/>

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
`

