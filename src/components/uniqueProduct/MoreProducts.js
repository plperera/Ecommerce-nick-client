import styled from "styled-components"
import ContentProductCard from "../products/ContentProductCard"

export default function MoreProducts({productsData}) {

    return(
        <>
        {
        (productsData && productsData?.length > 0) ? (
            <Container>

            <Title>
                <h1>{"Mais Produtos"}</h1>
            </Title>

            <ProductOptions>
                {
                    (productsData?.length > 0 && productsData) ? (
                        productsData.map((e, i) => <ContentProductCard key={i} productData={e}/>)
                    ):(<></>)
                }
            </ProductOptions>

            </Container>
        ):(<></>) 
            
        }
        </>
        
        
    )
}

const Container = styled.div`
    min-height: 30vh;
    width: 100%;
    background-color: #FFFFFF;
    color: #171717;
    padding: 4vh 10vw;
    box-shadow: inset 0 0 400px #00606309;
    @media (max-width: 850px) {
        padding: 4vh 10vw;
    }
`
const Title = styled.div`
    font-weight: 600;
    padding: 4vh 0;
    display: flex;
    align-items: center;
    h1 {
        display: flex;
        align-items: center;
        height: 4.5vh;
        border-left: 8px solid #01989D;
        font-size: 36px;
        padding-left: 0.4vw;
    }
    @media (max-width: 850px) {
        padding: 3vh 0;
        h1 {
            font-size: 30px;
            padding-left: 1.6vw;
        }
    }
`
const ProductOptions = styled.div`
    width: 100%;
    height: 51vh;
    padding: 0.8vh 2vw 0 2vw;
    display: flex;
    align-items: center;
    justify-content: left;
    //border: 1px solid red;
    overflow-x: scroll;
    flex-shrink: 0;
    flex-wrap: nowrap;
    flex-direction: row;
    gap: 3vw;
    user-select: none;
    border-radius: 10px;
    background-color: #F0F0F0;
    
    &::-webkit-scrollbar {
        width: 10px;
        height: 1vh;
        background-color: #0023242F;
        border-radius: 50px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #00575A;
        border-radius: 50px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #01989D;
        height: 5vh;
        cursor: pointer;
    }

    @media (max-width: 850px) {
        height: 100%;
        padding: 2vh 2vw 2vh 2vw;
    }
`