import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import ResumeProductCard from "./ResumeProductCard"

export default function OrderResume ({ userData, checkoutDetails }) {

    const [products, setProducts] = useState(undefined)

    useEffect(() => {

        const fake = [ 
            {
                productId: 1,
                name: "Esquadrejadeira 2900mm com Eixo Inclinavel 45° Sem Motor - FortG by Maksiwa- 106[1464]",
                price: 808867,
                quantity: 1,
                mainImage: "https://storage.googleapis.com/imageuploads-7b8bc.appspot.com/1689369151489.png",
            },
            {
                productId: 2,
                name: "Esquadrejadeira 2900mm com Eixo Inclinavel 45° Sem Motor - FortG by Maksiwa- 106[1464]",
                price: 808867,
                quantity: 1,
                mainImage: "https://storage.googleapis.com/imageuploads-7b8bc.appspot.com/1689369151489.png",
            },
            {
                productId: 3,
                name: "Esquadrejadeira 2900mm com Eixo Inclinavel 45° Sem Motor - FortG by Maksiwa- 106[1464]",
                price: 808867,
                quantity: 1,
                mainImage: "https://storage.googleapis.com/imageuploads-7b8bc.appspot.com/1689369151489.png",
            },
            {
                productId: 4,
                name: "Esquadrejadeira 2900mm com Eixo Inclinavel 45° Sem Motor - FortG by Maksiwa- 106[1464]",
                price: 808867,
                quantity: 1,
                mainImage: "https://storage.googleapis.com/imageuploads-7b8bc.appspot.com/1689369151489.png",
            },
        ]

        setProducts(fake)        

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

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

`