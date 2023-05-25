import styled from "styled-components"
import Banner01 from "../../assets/images/banner01.jpg"
import Banner02 from "../../assets/images/banner02.png"
import { useState } from "react"

export default function BannerHome () {

    const ExampleArray = [
        {title: "Aumente a vida útil de suas máquinas", image: Banner01}, 
        {title: "Excelência com quem realmente conhece", image: Banner02}
    ]
    const [slide, setSlide] = useState(0)

    function ChangeSlide(){
        (slide === (ExampleArray.length - 1)) ? (setSlide(0)):(setSlide(slide + 1))
    }

    return(
        <Container>
            <ImageContainer backgroundImage={ExampleArray[slide].image}>

                <Title>{ExampleArray[slide].title}</Title>

            </ImageContainer>

            <Slide>
                {ExampleArray.map( (e,i) => 
                    <SlideIcon 
                        onClick={() => ChangeSlide()} 
                        backgroundColor={slide === i?("#009395"):("")}
                        key={i}
                    />
                )}
            </Slide>
            
        </Container>
    )
}

const Container = styled.div`
    margin-top: 12vh;
    width: 100%;
    height: 73vh;
`
const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: left;
    justify-content: center;
    padding: 0 10vw;    
    flex-direction: column;
`
const Title = styled.div`
    color: white;
    font-size: 64px;
    width: 32vw;
    font-weight: 700;
    text-shadow: 3px 3px 5px #000000A9;
`
const Slide = styled.div`
    height: 24px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    margin-top: -8vh;
    position: absolute;
`
const SlideIcon = styled.div`
    width: 80px;
    height: 18px;
    background-color: ${props => props.backgroundColor || "#00929528"};
    border-radius: 5px;
`