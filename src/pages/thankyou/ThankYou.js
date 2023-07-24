import styled from "styled-components"
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Button from "../../common/form/Button";
import useNavigateAndMoveUp from "../../hooks/useNavigateAndMoveUp";

export default function ThankYou () {

    const navigateAndMoveUp = useNavigateAndMoveUp();
    
    return(
        <Container>    
            <CardContainer>
                <StyledIcon/>
                <Title>{"Seu Pedido foi Confirmado"}</Title>
                <SubTitle>{"Estamos processando seu pedido, você pode ver mais detalhes acessando seu Painel de Usuario"}</SubTitle>

                <Button 
                    type="submit" 
                    width="80%" 
                    height={"55px !important"} 
                    background={"#289092 !important"}
                    backgroundhover={"#30ABAD !important"} 
                    onClick={() => navigateAndMoveUp({locate: ""})}
                >
                    {"Voltar para tela Inicial"}
                </Button>

                <Button 
                    type="submit" 
                    width="80%" 
                    background={"#929292 !important"}
                    backgroundhover={"#B6B6B6 !important"} 
                    onClick={() => navigateAndMoveUp({locate: "minha-conta"})}
                >
                    {"Acessar Painel de Usuario"}
                </Button>

            </CardContainer>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 8vh;
    width: 100%;
    min-height: 84vh;
    background-color: #0A1F2A;  
    padding: 50px 10vw;
    display: flex;
    justify-content: center;
`
const CardContainer = styled.div`
    width: 600px;
    height: 560px;
    border-radius: 5px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2vh;
    padding: 3vh 2vw;
    padding-top: 6vh;
    color: #0A1F2A;
`
const StyledIcon = styled(AiOutlineCheckCircle)`
    color: #00BFC2;
    font-size: 150px;
`
const Title = styled.div`
    font-size: 30px;
    font-weight: 600;
    text-align: center;
`
const SubTitle = styled.div`
    font-size: 20px;
    padding: 1vh 0;
    text-align: center;
`
