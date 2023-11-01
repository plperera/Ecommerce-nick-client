import styled, { keyframes } from "styled-components"
import { BsWhatsapp } from 'react-icons/bs';

export default function WhatsAppButton () {
    const msg = ""
    const whatsAppNumber = "+5511985546210"
    return(
        <Container>
            <a href={`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(msg)}`} target="_blank" rel="noopener noreferrer"> 
                <BsWhatsapp/>
            </a>   
        </Container>
    )
}
const buttonAnimation = keyframes`
    0% { 
        transform: translateY(0px); 
    }
    2% { 
        transform: rotate(5deg); 
    }
    4% { 
        transform: rotate(-5deg); 
    }
    6% { 
        transform: translateY(0px); 
    }
`
const Container = styled.div`
    position: fixed;
    display: flex;
    right: 2vw;
    bottom: 2vh;
    z-index: 99;
    cursor: pointer;
    animation: ${buttonAnimation} 6s linear infinite;
    svg {
        padding: 8px;
        font-size: 50px;
        color: #FFFFFF;
        background-color: #46c256;
        border-radius: 5px;
    }
`
;