import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import ResumeProductCard from "./ResumeProductCard"
import api from "../../../services/API"
import { toast } from "react-toastify"

export default function OrderResume ({ userData, checkoutDetails }) {

    const [products, setProducts] = useState(undefined)

    useEffect(() => {

        console.log("userdata", userData)
        getAllProducts()
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    async function getAllProducts(){
        if (userData?.cart?.length === 0 || !userData?.cart){
            toast.error("Ocorreu um erro inesperado")
            return
        }
        const productIds = userData.cart
            .filter(e => typeof e?.productId === 'number')
            .map(e => ( e.productId ));
    
        const result = await api.GetAllProductsByProductId(JSON.stringify(productIds))
    
        const updatedCartProducts = userData.cart.map(cartItem => {
            const productData = result.data.find(product => product.productId === cartItem.productId);
            if(productData) {
                return { ...productData, quantity: cartItem.quantity };
            }
            return undefined;
        });        
        setProducts(updatedCartProducts)
    }

    useEffect(() => {
        console.log(products)
    }, [products])

    function sumQuantity(array) {
        let totalQuantity = 0;
        array.forEach(item => {
            totalQuantity += item.quantity;
        });
        return totalQuantity;
    }

    return(
        <Container>  
            <Title>{"Resumo do pedido"}</Title>
            <SubContainer>
                {products ? (
                    <>
                        {products.map(e => <ResumeProductCard key={e.productId} productData={e}/>)}

                        <ResumeLine>
                            <h4>{`Subtotal (${sumQuantity(products)} itens):`}</h4>
                            <h5>{(userData.totalPrice / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</h5>
                        </ResumeLine>

                        <ResumeLine>
                            <h4>{`Frete:`}</h4>
                            <h5>{(checkoutDetails?.shippingPrice / 100 || 0).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</h5>
                        </ResumeLine>

                        <ResumeLine>
                            <h4>{`Total: `}</h4>
                            <h5>{((userData.totalPrice + (checkoutDetails.shippingPrice || 0)) / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</h5>
                        </ResumeLine>

                    </>
                ):(<></>)}

               
            </SubContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 32%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 850px) {
        width: 100%;
        margin-top: 3vh;
    }  
`
const SubContainer = styled.div`
    min-height: 700px;
    width: 100%;
    background-color: #ececec;
    padding: 1vh 0.7vw;
    display: flex;
    justify-content: start;
    flex-direction: column;
    row-gap: 1vh;
    @media (max-width: 850px) {
        min-height: 1px;
        padding-bottom: 1vh;
    } 
`
const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #CCCCCCCB;
    color: #02131bff;
    padding: 1vh 0;
    font-weight: 600;
`
const ResumeLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;    
    padding: 1vh 1vw;
    font-size: 18px;
    font-weight: 600;
    background-color: #FFFFFF;

    @media (max-width: 850px) {
        padding: 2vh 3vw;
        font-size: 16px;
    } 
`