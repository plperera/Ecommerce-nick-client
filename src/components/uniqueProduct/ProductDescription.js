import { useState } from "react"
import styled from "styled-components"

export default function ProductDescription({product}) {

    const [show, setShow] = useState(false)
    return(
        <Container>
            <Title>
                <h1>{"Descrição"}</h1>
            </Title>

            <DescriptionContainer>
                <p>{product?.description}</p>
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
`
const DescriptionContainer = styled.div`
    padding-bottom: 2vh;
    display: flex;
    align-items: center;
    p {
        text-align: left;
        line-height: 3.2vh;
        user-select: none;
        font-size: 20px;
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
`
const TopicContainer = styled.div`
    padding: 0vh 0;
    font-size: 18px;
    width: 100%; 
    padding: 2vh 0;
`