import styled from "styled-components"
import BannerHome from "../../components/home/BannerHome"
import CategoriesHome from "../../components/home/CategoriesHome"
import HighlightsHome from "../../components/home/HighlightsHome"
import api from "../../services/API"
import { useState } from "react"
import { useEffect } from "react"

export default function Home () {

    const [products, setProducts] = useState(undefined)

    async function GetAllProducts(){
        const response = await api.GetAllProducts()
        setProducts(response.data)
    }

    useEffect(() => {
        GetAllProducts()
        
    },[])

    return(
        <Container>
            <BannerHome/>
            <CategoriesHome/>
            <HighlightsHome products={products}/>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 14vh;
    width: 100%;
    min-height: 73vh;
    background-color: #E6E6E6;
    padding: 0;
`
