import styled from "styled-components"
import CartListComponent from "../../components/cart/CartList"
import CartResumeComponent from "../../components/cart/CartResume"
import { useEffect } from "react"
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import api from "../../services/API";
import { useState } from "react";

export default function Cart () {

    const { userData, setUserData } = useContext(UserContext);
    const [ cartProducts, setCartProducts ] = useState(undefined)
    const [ isLoading, setIsLoading ] = useState(true)
    const [ isLoadingQuantity, setIsLoadingQuantity ] = useState(false)

    async function getAllCartProduts(){
        if (userData?.cart?.length === 0 || !userData?.cart){
            setCartProducts([])
            setIsLoading(false)
            return
        }
        const productIds = userData.cart
            .filter(e => typeof e?.productId === 'number')
            .map(e => ( e.productId ));
    
        const result = await api.GetAllProductsByProductId(JSON.stringify(productIds))
    
        let totalPrice = 0;
        const updatedCartProducts = userData.cart.map(cartItem => {
            const productData = result.data.find(product => product.productId === cartItem.productId);
            if(productData) {
                totalPrice += productData.price * cartItem.quantity;
                return { ...productData, quantity: cartItem.quantity };
            }
            return cartItem;
        });
    
        setUserData({...userData, totalPrice: totalPrice});
    
        const finalCartProducts = updatedCartProducts.filter(product => product.quantity);
        
        setCartProducts(finalCartProducts)
        setIsLoading(false)
    }

    function handleProductQuantity(product, change) {
        //setIsLoading(true)
        const productId = product.productId;
        let productExistsInCart = false;
    
        let updatedCart = [...(userData?.cart || [])];
    
        for (let cartItem of updatedCart) {
            if (cartItem.productId === productId) {

                cartItem.quantity += change;

                if (cartItem.quantity <= 0) {
                    updatedCart = updatedCart.filter(item => item.productId !== productId);
                }
    
                productExistsInCart = true;
                break;
            }
        }
    
        if (!productExistsInCart && change > 0) {
            // Adiciona o produto ao carrinho somente se 'change' for maior que 0
            updatedCart.push({ productId: productId, quantity: 1 });
        }
    
        setUserData({ ...userData, cart: updatedCart });
    }

    useEffect(() => {
        if (isLoading){
            return
        }

        setIsLoadingQuantity(true)

        setTimeout(() => {
            getAllCartProduts() 
            setIsLoadingQuantity(false)
        },[0]) 

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData?.cart])

    useEffect(() => {
        setTimeout(() => {
            getAllCartProduts() 
        },[1000]) 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {

        console.log("cartProducts", cartProducts)

    },[cartProducts])

    return(
        <Container>    
            {!isLoading && cartProducts?.length === 0 ? (
                <EmptyCartComponent>{"Carrinho Vazio"}</EmptyCartComponent>
            ):(
            <>
                <CartListComponent cartProducts={cartProducts} isLoading={isLoading} handleProductQuantity={handleProductQuantity} isLoadingQuantity={isLoadingQuantity}/>
                <CartResumeComponent cartProducts={cartProducts} isLoading={isLoading} userData={userData} isLoadingQuantity={isLoadingQuantity}/>    
            </>
            )}     
        </Container>
    )
}

const Container = styled.div`
    margin-top: 11vh;
    width: 100%;
    background-color: #0A1F2A;
    padding: 3vw 10vw 2vw 10vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; 
    @media (max-width: 850px) {
        padding-top: 10vh;
        row-gap: 3vh;
        padding-bottom: 5vh;
    }
`
const EmptyCartComponent = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    padding-top: 2vh;
    font-size: 40px;
    width: 100%;
    height: 56.8461vh;
    color: #FFFFFF;
`