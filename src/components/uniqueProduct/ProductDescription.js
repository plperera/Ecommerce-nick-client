import { useState } from "react"
import styled from "styled-components"

export default function ProductDescription({product}) {
    console.log(product)
    const [show, setShow] = useState(true)
    return(
        <Container>
            <Title>
                <h1>{"Descrição"}</h1>
            </Title>

            <DescriptionContainer>
                <pre>{product?.description}</pre>
            </DescriptionContainer>

            {product?.tecnicDetails ? (

                <TecnicDetailsContainer>

                    <h1 onClick={ () => setShow(!show)}>{"Dados Técnicos"}</h1>
                    <ShowIconContainer onClick={ () => setShow(!show)}>{show ? ("-"):("+")}</ShowIconContainer>

                    {show ? (
                    
                        product?.tecnicDetails?.map((e, i) => 
                            <TopicContainer key={i}>
                                <span>{`- ${e.topic}`}</span>
                                <span>{e.topicDetail}</span>
                            </TopicContainer>
                        )
                    
                    ):(<></>)}
                </TecnicDetailsContainer>

            ):(<></>)}

            
            
        </Container>
    )
}

const Container = styled.div`
    min-height: 30vh;
    width: 100%;
    background-color: #FFFFFF;
    color: #171717;
    padding: 4vh 10vw;
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
        h1 {
            font-size: 30px;
            padding-left: 1.6vw;
        }
    }
`
const DescriptionContainer = styled.div`
    padding-bottom: 3%;
    display: flex;
    align-items: center;
    pre {
        max-width: 100%;
        text-align: left;
        line-height: 3.2vh;
        user-select: none;
        font-size: 17px;  
        white-space: pre-wrap;
        word-wrap: break-word;
        overflow-x: auto;

        padding: 15px;
        border-radius: 8px;
        background-color: #F5F5F54F;
        border: 1px solid #E0E0E027;
    }
    @media (max-width: 850px) {
        pre {
            line-height: 3.8vh;
            font-size: 15px;
        }
    }
`
const TecnicDetailsContainer = styled.div`
    width: 100%;
    background-color: #FAFAFA;
    display: flex;
    justify-content: space-between;
    padding: 2vh 2vw;
    flex-wrap: wrap;
    row-gap: 1vh;
    box-shadow: 0px 0px 4px #00000021; 
    border-radius: 4px;
    h1 {
        font-size: 30px;
        font-weight: 600;
        width: 50%;
        user-select: none;
        cursor: pointer;
    }
    @media (max-width: 850px) {
        h1 {
            font-size: 18px;
        }
    }
`
const ShowIconContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: right;
    font-size: 35px;
    font-weight: 600;
    width: 50%;
    user-select: none;
    cursor: pointer;
    @media (max-width: 850px) {
        font-size: 21px;
    }
`
const TopicContainer = styled.div`
    padding: 0vh 0;
    font-size: 18px;
    width: 100%; 
    padding: 2vh 0;
    display: flex;
    column-gap: 12px;
    & > :first-child {
        font-weight: 600;
    }
    
    @media (max-width: 850px) {
        font-size: 15px;
    }
`