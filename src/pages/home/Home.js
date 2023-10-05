import styled from "styled-components"

import CategoriesHome from "../../components/home/CategoriesHome"

import api from "../../services/API"
import { useContext, useState } from "react"
import { useEffect } from "react"
import UserContext from "../../context/UserContext"
import BannerHome from "../../components/home/BannerHome/BannerHome"
import HighlightsHome from "../../components/home/HighlightsHome"

export default function Home () {

    const [products, setProducts] = useState(undefined)
    const { userData, setUserData } = useContext(UserContext);

    async function GetAllProducts(){
        try {
            const response = await api.GetAllProducts()
            setProducts(response.data)
            if (userData.token) {
                GetAllFavorites()
            }
        } catch (error) {
            console.log(error)
        }
        
    }

    async function GetAllFavorites(){
        try {
            const response = await api.GetAllFavorites(userData?.token)
            setUserData({...userData, 
                favorites: response.data.map(e => {
                    return {productId: e.productId}
                })
            })
        } catch (error) {
            console.log(error)
        } 
    }

    useEffect(() => {
        GetAllProducts() 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <Container>
            <BannerHome/>
            <CategoriesHome/>
            {/* <HighlightsHome products={products}/> */}
            <HighlightsHome products={products} />
        </Container>
    )
}

const Container = styled.div`
    margin-top: 10.5vh;
    width: 100%;
    min-height: 73vh;
    background-color: #E6E6E6;
    padding: 0;
`
