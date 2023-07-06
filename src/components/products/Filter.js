import styled from "styled-components"
import FilterOptionCard from "./FilterOptionCard"

export default function Filter ({categories, selected}) {

    return(
        <Container>
            <Title>{selected?(selected):("Todos os Produtos")}</Title>
            <SubContainer>
                <SubTitle>Selecione um filtro</SubTitle>

                <OptionsContainer>

                    {
                        categories.map( (e, i) => <FilterOptionCard name={e.name} key={i}/>)
                    }  

                </OptionsContainer>

            </SubContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 30vh;
    //border: 1px solid red;
`
const Title = styled.div`
    font-size: 38px;
    height: 5vh;
    display: flex; 
    align-items: center;
    justify-content: left;
    color: #ffffff;
`
const SubContainer = styled.div`
    width: 100%;
    height: 15vh;
    border-radius: 5px;
    background-color: #00000042;
    margin-top: 2vh;
    padding: 1.5vh 1vw;
`
const SubTitle = styled.div`
    font-size: 18px;
    color: #ffffff;
    height: 3vh;
    display: flex; 
    align-items: center;
    justify-content: left;
`
const OptionsContainer = styled.div`
    width: 100%;
    min-height: 9vh;
    display: flex;
    align-items: center;
    justify-content: left;
    column-gap: 2vw;
    flex-wrap: wrap;
`

