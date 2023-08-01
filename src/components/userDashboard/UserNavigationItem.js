import styled from "styled-components"

export default function UserNavigationItem ({option, setContent, content}) {

    return(
        <Container
            background={(content.name === option.name)?("#0A1F2A"):("#0A1F2A00")}
            color={(content.name === option.name)?("#FFFFFF"):("#02131B")}
        >
            <Title onClick={ () => setContent(option) }>
                <h1>{option.name}</h1>
            </Title>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.color};
    background-color: ${props => props.background};
    @media (max-width: 850px) {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        border-radius: 10px;
        width: auto;
        padding: 0 1vw;
    }
`
const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.3vw;
    height: 50px;
    width: 300px;
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
    @media (max-width: 850px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0 1.3vw;
    }
`

