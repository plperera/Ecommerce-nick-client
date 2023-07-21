import styled from "styled-components"
import { useEffect, useState } from "react"
import ProductSelector from "../../selector/ProductSelector"
import api from "../../../../../services/API"
import ProductForms from "./ProductForms"
import { useCustomForm } from "../../../../../hooks/useCustomForms"
import Title from "./TitlePutProduct"

export default function PutProduct () {

    const [ selectedProduct, setSelectedProduct ] = useState(undefined)
    const [ products, setProducts ] = useState(undefined)
    const [ form, handleForm, setForm ] = useCustomForm();

    useEffect(() => {
        getAllProducts()
    }, [])

    async function getAllProducts(){
        try {
            const response = await api.GetAllProducts()
            //const fake = [...response.data, ...response.data, ...response.data, ...response.data, ...response.data, ...response.data, ...response.data, ...response.data, ...response.data, ...response.data]
            setProducts(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Container>
            <Title setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct}/>

            <SubContainer>
                {!selectedProduct ? (

                    <ProductSelector setSelectedProduct={setSelectedProduct} products={products}/>

                ):(

                    <ProductForms selectedProduct={selectedProduct} form={form} handleForm={handleForm} setForm={setForm}/>

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

