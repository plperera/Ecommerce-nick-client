import styled from "styled-components"

export default function Title ({haveAllData, form, SubmitForms}) {
    return(
        <Container>
            <h1>{"Novo Produto"}</h1>
            <ButtonStyle 
                background={haveAllData?("#0C72A5"):("#0624332A")}
                color={haveAllData?("#FFFFFF"):("#1D1D1D")}
                cursor={haveAllData?("pointer"):("not-allowed")}
                onClick={() => {SubmitForms()}}
            >

                {haveAllData?("Criar Produto"):("Preecha todos os Campos")}

            </ButtonStyle>    
        </Container>
    )
}
const Container = styled.div`
    width: 71.6vw;
    padding: 0 1.4vw;
    height: 7vh;
    font-size: 25px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    position: fixed;
    z-index: 2;
    h1 {
        font-size: 25px;
        margin-bottom: 2vh;
        font-weight: 600;
        padding-top: 1.4vh;
    }
    @media (max-width: 850px) {
        width: 100%;
        height: auto;
        justify-content: center;
        padding-bottom: 1vh;
        border-radius: 15px;
        flex-direction: column;
        h1 {
            font-size: 17px !important;
            text-align: center;
            width: 50%;
        }
    }
`
const ButtonStyle = styled.div`
    width: auto;
    padding: 0 2vw;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    border-radius: 15px;
    background-color: ${props => props.background}; //;
    color: ${props => props.color};
    font-weight: 600;
    cursor: ${props => props.cursor};
    @media (max-width: 850px) {   
        font-size: 17px !important;
        padding: 0 4vw;
    }
`