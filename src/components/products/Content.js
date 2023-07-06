import styled from "styled-components"
import ContentProductCard from "./ContentProductCard"

export default function Content ({products}) {

    return(
        <Container>
            {
                products?.length > 0 ?(
                    <ContentContainer>{ products.map((e, i) => <ContentProductCard key={i} productData={e}/>) }</ContentContainer>
                ):(
                    <ErroContainer>Nenhum produto encontrado...</ErroContainer>
                )
            }
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    min-height: 20vh;
`
const ErroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF69;
`
const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 2vh;
    column-gap: 2vw;
    @media (max-width: 1366px) {
        row-gap: 3.5vh;
    }
`
