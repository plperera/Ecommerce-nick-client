import { useParams } from "react-router-dom";
import styled from "styled-components"
import UniqueProductComponent from "../../components/uniqueProduct/UniqueProduct"
import ProductDescriptionComponent from "../../components/uniqueProduct/ProductDescription";
import MoreProductsComponent from "../../components/uniqueProduct/MoreProducts";
import { useState } from "react";
import api from "../../services/API";
import { useEffect } from "react";

export default function UniqueProduct () {

    const { productName } = useParams();
    const [product, setProduct] = useState(undefined)
    const [moreProduct, setMoreProduct] = useState(undefined)

    async function GetData(){
        const responseByName = await api.GetUniqueProductByName(productName)
        setProduct(responseByName.data)
        const responseByCategoryId = await api.GetAllProductsByCategory(responseByName.data?.categories[0]?.categoryId)
        setMoreProduct(responseByCategoryId.data.filter(e => e.productId !== responseByName.data.productId))
    }

    useEffect(() => {
        GetData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[productName])

    useEffect(() => {
        console.log(product)
        console.log(moreProduct)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[product, moreProduct])

    return(
        <Container>
            <UniqueProductComponent product={product}/>
            <ProductDescriptionComponent product={product}/>
            <MoreProductsComponent productsData={moreProduct}/>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 14vh;
    width: 100%;
    min-height: 73vh;
    background-color: #0A1F2A;
    padding-top: 3vh;
`