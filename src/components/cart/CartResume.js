import styled from "styled-components"
import { PriceSign } from "./PriceSign"
import Button from "../../common/form/Button"
import { LoadingContainer } from "./LoadingContainer"
import useNavigateAndMoveUp from "../../hooks/useNavigateAndMoveUp";

export default function CartResume ({cartProducts, isLoading, userData}) {

    const navigateAndMoveUp = useNavigateAndMoveUp();

    return(
        isLoading ? (
            <LoadingContainer width={"25%"} height={"56.8461vh"} borderradius={"5px"} position={"sticky"} top={"14vh"}/>
        ):(
        <Container> 
            
            <Title>{"Resumo"}</Title>

            {/* <PriceDetails>
                <h2>{"Subtotal"}</h2>

                <LinePrice>
                    <PriceSign>{"R$ "}</PriceSign><span>{ (20000 / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                </LinePrice>
            </PriceDetails>

            <PriceDetails>
                <h2>{"Entrega"}</h2>

                <LinePrice>
                    <PriceSign>{"R$ "}</PriceSign><span>{ (20000 / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                </LinePrice>
            </PriceDetails> */}

            <PriceDetails>
                <h2>{"Total"}</h2>

                <LinePrice>
                    <PriceSign>{"R$ "}</PriceSign><span>{ (userData?.totalPrice / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                </LinePrice>
            </PriceDetails >

            <ButtonContainer>
                <Button 
                    type="submit" 
                    width="100%" 
                    height={"45px !important"} 
                    fontsize={"13px !important"} 
                    background={"#354349 !important"}
                    backgroundhover={"#3F5058 !important"}
                    color="primary" 
                    onClick={() => navigateAndMoveUp({locate:"catalogo"})}
                >
                    {"Adicionar mais produtos"}
                </Button>

                <Button 
                    type="submit" 
                    width="100%" 
                    height={"45px !important"} 
                    fontsize={"14px !important"}
                    background={"#009395ff !important"}
                    backgroundhover={"#00BFC2 !important"} 
                    color="primary" 
                    onClick={() => navigateAndMoveUp({locate:"checkout"})}
                >
                    {"Fechar Pedido"}
                </Button>
            </ButtonContainer>

            <OtherDetails>

            </OtherDetails>

            <SocialProofContainer>

                <SocialProofItem>
                    <h3>{"Excelente plataforma online que propõe uma combinação perfeita de mercadorias de primeira linha, valor acessível e despacho imediato.”"}</h3>
                    <h4>{"Nome do Cliente 3"}</h4>
                </SocialProofItem>

                <SocialProofItem>
                    <h3>{"“Site excepcional que disponibiliza produtos de alto calibre, precificação justa e agilidade nas remessas.”"}</h3>
                    <h4>{"Nome do Cliente 2"}</h4>
                </SocialProofItem>                

            </SocialProofContainer>
           
        </Container>
        )
    )
}

const Container = styled.div`
    width: 25%;
    position: sticky;
    top: 14vh;
    height: 600px;
    background-color: #FFFFFF;
    border-radius: 5px;
`
const Title = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;
    border-bottom: 4px solid #ebebebff;
    padding: 1.6vh 1vw;
`
const PriceDetails = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 1vw;
    font-size: 16px;
    border-bottom: 3px solid #ebebebff;
`
const LinePrice = styled.div`
    padding: 3px;
    font-size: 17px;
    font-weight: 500;
`
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 1.5vh;
    justify-content: space-between;
    padding: 3vh 1vw;
`
const SocialProofContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 1.3vh;
    padding: 0 1vw;
`
const SocialProofItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    flex-wrap: wrap;
    padding: 12px 1vw;
    background-color: #EEEEEE;
    row-gap: 0.7vh;
    border-radius: 5px;
    font-style: italic;
    h3 {
        width: 100%;
        font-size: 13px;
        color: #9B9B9B;
    }
    h4 {
        width: 100%;
        font-size: 12px;
        font-weight: 700;
        color: #171717;
    }
`
const OtherDetails = styled.div`

`
