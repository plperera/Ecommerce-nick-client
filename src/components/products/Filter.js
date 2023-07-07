import styled from "styled-components"
import FilterOptionCard from "./FilterOptionCard"
import useNavigateAndMoveUp from "../../hooks/useNavigateAndMoveUp";

export default function Filter ({categories, selected, setSelected}) {

    const navigateAndMoveUp = useNavigateAndMoveUp();

    function RefreshValue(){
        
        setSelected(undefined)

        navigateAndMoveUp({ locate: "catalogo"})
        
    }

    return(
        <Container>
            {selected?(
                <>
                    <Title>{selected.toUpperCase()}</Title>
                    <ButtonStyle onClick={() => RefreshValue()}>Ver o catálogo completo</ButtonStyle>
                </>
            ):(
                <>
                    <Title>{"Todos os Produtos"}</Title>
                    <SubContainer>
                        <SubTitle>Selecione um filtro</SubTitle>

                        <OptionsContainer>

                            {
                                categories.map( (e, i) => <FilterOptionCard name={e.name} key={i}/>)
                            }  

                        </OptionsContainer>

                    </SubContainer>
                </>
            )
        }
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding-bottom: 3vh;
    //height: 30vh; //era 30vh
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
const ButtonStyle = styled.div`
    width: 16vw;
    height: 4vh;
    background-color: #79838b;
    border-left: 8px solid #009395;
    color: #FFFFFF;
    text-shadow: 4px 2px 6px #0000006C;
    box-shadow: 2px 2px 5px #0000001A;
    font-weight: 700;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: left;
    padding-left: 0.65vw;
    border-radius: 5px;
    font-size: 18px;
    margin-top: 1vh;
    cursor: pointer;
    user-select: none;
    transition: all ease .1s !important;
    &:hover{
        border-left: 10px solid #00BABD;
    }
    @media (max-width: 1366px) {
        font-size: 16px;  
        width: 19vw;  
    }
`
