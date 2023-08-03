import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import ProductSelector from "../../selector/ProductSelector"
import api from "../../../../../services/API"
import ProductForms from "./ProductForms"
import { useCustomForm } from "../../../../../hooks/useCustomForms"
import Title from "./TitlePutProduct"
import AdminContext from "../../../../../context/AdminContext"

export default function PutProduct () {

    const [ selectedProduct, setSelectedProduct ] = useState(undefined)
    const [ products, setProducts ] = useState(undefined)
    const [ form, handleForm, setForm ] = useCustomForm();
    const { adminData } = useContext(AdminContext);

    useEffect(() => {
        getAllProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedProduct])

    async function getAllProducts(){
        try {
            const response = await api.GetAllProductsWithAllData(adminData.token)
           setProducts(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Container>
            <Title setSelectedProduct={setSelectedProduct} productData={selectedProduct} form={form} setForm={setForm} adminData={adminData}/>

            <SubContainer>
                {!selectedProduct ? (

                    products?(<ProductSelector setSelectedProduct={setSelectedProduct} products={products}/>):(<></>)

                ):(

                    <ProductForms productData={selectedProduct} form={form} handleForm={handleForm} setForm={setForm} token={adminData.token}/>

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
        padding: 0;
    }
`

