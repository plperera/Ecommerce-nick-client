import styled from "styled-components"
import { useEffect } from "react"
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import api from "../../services/API";
import { useState } from "react";
import { Title } from "./Title";
import ContentProductCard from "../../components/products/ContentProductCard";
import useNavigateAndMoveUp from "../../hooks/useNavigateAndMoveUp";

export default function Favorites () {

    const { userData, setUserData } = useContext(UserContext);
    const [ isLoading, setIsLoading ] = useState(true)
    const [ allProducts, setAllProducts ] = useState(undefined)
    const navigateAndMoveUp = useNavigateAndMoveUp();

    useEffect(() => {
        if(!userData?.token){
            navigateAndMoveUp({locate:""})
            return
        }
        GetAllFavorites()
    },[])

    async function GetAllFavorites(){
        try {
            const response = await api.GetAllFavorites(userData.token)
            setUserData({...userData, 
                favorites: response.data.map(e => {
                    return {productId: e.productId}
                })
            })
            setAllProducts(response.data)
        } catch (error) {
            console.log(error)
        }   
    }

    return(
        <Container>    
            {!isLoading || allProducts?.length === 0 ? (
                <EmptyFavoritesComponent>{"Favoritos Vazio"}</EmptyFavoritesComponent>
            ):(
            <>
                <Title>{"Favoritos"}</Title>

                <ProductsContainer>
                    {allProducts ? (allProducts.map(e => <ContentProductCard productData={e}/>)):(<></>)}
                </ProductsContainer>
            </>
            )}     
        </Container>
    )
}

const Container = styled.div`
    margin-top: 11vh;
    min-height: 66vh;
    width: 100%;
    background-color: #0A1F2A;
    padding: 3vw 10vw 2vw 10vw;
    display: flex;
    flex-direction: column;
`
const EmptyFavoritesComponent = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    padding-top: 2vh;
    font-size: 40px;
    width: 100%;
    height: 56.8461vh;
    color: #FFFFFF;
`
const ProductsContainer = styled.div`
    width: 100%;
    border-radius: 5px;
    display: flex; 
    align-items: start;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 2vh;
    column-gap: 1.95vw;
`