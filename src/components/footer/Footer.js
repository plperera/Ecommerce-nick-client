import styled from "styled-components"
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import logo from "../../assets/images/logoSVG/LogoWhite (2).svg"

export default function Footer ({setContent, content, userData}) {
    const msg = ""
    const whatsAppNumber = "+5511985546210"
    return(
        <Container>
            <TopContainer>
                <ImageContainer>
                    <img src={logo} alt="Nick te Ajuda"/>
                </ImageContainer>
                <InfoContainer> 
                    <SocialContainer>
                        <a href="https://www.instagram.com/nickteajuda/" target="_blank" rel="noopener noreferrer"> 
                            <InstagramIcon/>
                        </a>

                        <a href={`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(msg)}`} target="_blank" rel="noopener noreferrer"> 
                            <WhatsappIcon/>
                        </a>                  
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
    height: 18vh;
    background-color: #02131B;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1366px) {
        padding: 0 4vw;    
    }
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
    @media (max-width: 1366px) {
        padding: 0 4vw;  
        height: 7vh;
        p {
            font-size: 14px;
        }
    }
`
const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    img {
        max-width: 12vw;
        max-height: 85%;
        cursor: pointer;
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

        @media (max-width: 1366px) {
            font-size: 14px;   
        }
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
    @media (max-width: 1366px) {
        font-size: 26px;   
    }
`
const WhatsappIcon = styled(BsWhatsapp)`
    font-size: 30px;
    @media (max-width: 1366px) {
        font-size: 26px;   
    }
`