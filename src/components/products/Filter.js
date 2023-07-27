import styled, { keyframes } from "styled-components"
import FilterOptionCard from "./FilterOptionCard"
import { useState } from "react";
import { IoMdCloseCircle } from 'react-icons/io';

export default function Filter ({categories, selected, selectOption}) {

    const [ expandFilter, setExpandFilter ] = useState(false)

    return(
        <Container>
                
            <Title>
                {selected?(selected):("Todos os Produtos")}
                {selected?(<ClearFilterContainer onClick={() => selectOption(selected)}>{"X"}</ClearFilterContainer>):(<></>)}
            </Title>
            

            <SubContainer>

                <UpperContainer>
                    <SubTitle>Selecione um filtro</SubTitle>
                    <ExpandButton onClick={ () => setExpandFilter(!expandFilter)}>{ expandFilter ? ("Minimizar"):("Ver Todas")}</ExpandButton>
                </UpperContainer>

                {/* Opções de categoria para DESKTOP */}
                <OptionsContainer>

                    {categories?(

                        categories.map( (e, i) => 
                            i < (expandFilter ? (99):(7)) && <FilterOptionCard name={e?.name} key={i} selected={selected} selectOption={selectOption}/>
                        )

                    ):(<SpinnerContainer><Spinner/></SpinnerContainer>)}

                </OptionsContainer>
                
                {/* Opções de categoria para MOBILE */}
                <MobileOptionsContainer>

                    {categories?(

                        categories.map( (e, i) => 
                            i < (expandFilter ? (99):(3)) && <FilterOptionCard name={e?.name} key={i} selected={selected} selectOption={selectOption}/>
                        )

                    ):(<SpinnerContainer><Spinner/></SpinnerContainer>)}

                </MobileOptionsContainer>

            </SubContainer>
                

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
    display: flex; 
    align-items: center;
    justify-content: left;
    color: #ffffff;
    @media (max-width: 850px) {
        font-size: 25px;
        padding-top: 2vh;
    }
`
const SubContainer = styled.div`
    width: 100%;
    border-radius: 5px;
    background-color: #00000042;
    margin-top: 2vh;
    padding: 2vh 1vw;
`
const UpperContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 2vh;
    @media (max-width: 850px) {
        padding: 0 3vw;
        padding-bottom: 2vh;
    }
`
const SubTitle = styled.div`
    font-weight: 700;
    font-size: 19px;
    color: #ffffff;
    display: flex; 
    align-items: center;
    justify-content: left;

    @media (max-width: 850px) {
        font-size: 14px;
    }
`
const ExpandButton = styled.div`
    padding: 0 1.7vw;
    height: 4vh;
    background-color: #009395;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 19px;
    color: #FFFFFF;
    user-select: none;
    cursor: pointer;

    @media (max-width: 850px) {
        font-size: 12px;
        padding: 0 3vw;
    }
`
const OptionsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: left;
    column-gap: 1.2vw;
    row-gap: 1vh;
    flex-wrap: wrap;
    @media (max-width: 850px) {
        display: none;
    }
`
const MobileOptionsContainer = styled(OptionsContainer)`
    padding: 0 3vw;
    display: none;
    @media (max-width: 850px) {
        display: flex;
    }
`
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border-radius: 50px;

  border-bottom: 2px dotted #00929544;
  border-right: 2px dotted #00929544;
  border-top: 4px ridge #009395;
  border-left: 2px dotted #00929544; 
  width: 50px;
  height: 50px;
  animation: ${spinAnimation} 2s linear infinite;
  //background-color: red;
`;
const SpinnerContainer = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    width: 100%;
`
const ClearFilterContainer = styled(IoMdCloseCircle)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 24px;
    color: #FFFFFFE7;
    border: 2px solid #FFFFFF25;
    border-radius: 50px;
    margin-left: 0.5vw;
    cursor: pointer; 
`
