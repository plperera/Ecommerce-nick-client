import styled from "styled-components"
import BannerHome from "../../components/home/BannerHome"
import CategoriesHome from "../../components/home/CategoriesHome"
import HighlightsHome from "../../components/home/HighlightsHome"
import api from "../../services/API"
import { useContext, useState } from "react"
import { useEffect } from "react"
import UserContext from "../../context/UserContext"

export default function Home () {

    const [products, setProducts] = useState(undefined)
    const { userData, setUserData } = useContext(UserContext);

    async function GetAllProducts(){
        const response = await api.GetAllProducts()
        setProducts(response.data)
        if (userData.token) {
            GetAllFavorites()
        }
    }

    async function GetAllFavorites(){
        const response = await api.GetAllFavorites(userData.token)
        setUserData({...userData, 
            favorites: response.data.map(e => {
                return {productId: e.productId}
            })
        })
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
