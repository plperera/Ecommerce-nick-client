import styled from "styled-components"
import { useEffect, useState } from "react"
import api from "../../../../../../services/API"
import { useCustomForm } from "../../../../../../hooks/useCustomForms"
import AdminContext from "../../../../../../context/AdminContext"
import { useContext } from "react"
import Title from "./TitleProductCard"

import ProductBannerCardSelector from "../../../selector/ProductBannerCardSelector"
import EditProductCard from "./EditProductCard"

export default function UpdateProductCard () {

    const [ productBannerCardSelect, setProductBannerCardSelect ] = useState(undefined)
    const [ productBannerCard, setProductBannerCard ] = useState(undefined)
    const [ form, handleForm, setForm ] = useCustomForm();
    const { adminData } = useContext(AdminContext);
    console.log("adminData", adminData)

    async function getAllProductBannerCards(){
        try {
            const result = await api.GetProductsBannerHome()
            setProductBannerCard(result.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllProductBannerCards()
    }, [productBannerCardSelect])

    return(
        <Container>

            <Title text={`Editar uma Categoria para Pagina Inicial`} form={form} setForm={setForm} adminData={adminData} productBannerCardData={productBannerCardSelect} setProductBannerCardSelect={setProductBannerCardSelect}/>

            {productBannerCardSelect ? (
                <EditProductCard productBannerCardData={productBannerCardSelect} form={form} handleForm={handleForm} setForm={setForm} adminData={adminData}/>
            ):(
                productBannerCard?.length === 0 ?(
                    <></>                    
                ):(
                    <ProductBannerCardSelector setProductBannerCardSelect={setProductBannerCardSelect} productBannerCard={productBannerCard}/>
                )                
            )} 
        
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
    padding: 25px 1.4vw;
    h1 {
        font-size: 25px;
        margin-bottom: 2vh;
        font-weight: 600;
    }
    @media (max-width: 850px) {
        padding-top: 0;
        padding-left: 0;
    }
`