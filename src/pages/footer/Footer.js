import styled from "styled-components"
import logo from "../../assets/images/logo-footer.svg"
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';

export default function Footer () {

    return(
        <Container>
            <TopContainer>
                <ImageContainer>
                    <img src={logo} alt="Nick te Ajuda"/>
                </ImageContainer>
                <InfoContainer> 
                    <SocialContainer>
                        <InstagramIcon/>
                        <WhatsappIcon/>
                    </SocialContainer>
                    <p>contato@contato.com.br</p>
                    <p>Atendimento de segunda à sexta das 8 às 17:00hrs</p>
                </InfoContainer>
            </TopContainer>
            <BottomContainer>
                <p>Todos os direitos reservados © 2023</p>
                <p>Feito por Pedro Pereira</p>
            </BottomContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    color: #ffffff;
`
const TopContainer = styled.div`
    padding: 0 10vw;
    height: 20vh;
    background-color: #02131B;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const BottomContainer = styled.div`
    padding: 0 10vw;
    height: 5vh;
    background-color: #010B0F;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-weight: 700;
    }
`
const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    img {
        height: 16vh;
    }
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    p {
        font-size: 18px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: right;
        text-align: center;
    }
`
const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 2vw;
`
const InstagramIcon = styled(BsInstagram)`
    font-size: 30px;
`
const WhatsappIcon = styled(BsWhatsapp)`
    font-size: 30px;
`