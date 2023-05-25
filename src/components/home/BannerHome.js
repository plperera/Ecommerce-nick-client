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
                <Slide>
                    {ExampleArray.map( (e,i) => 
                        <SlideIcon 
                            onClick={() => ChangeSlide()} 
                            backgroundColor={slide === i?("#1991C4"):("")}
                            key={i}
                        />
                    )}
                </Slide>


            </ImageContainer>
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
    width: 100%;
    height: 24px;
    display: flex;
    align-items: end;
    justify-content: space-evenly;
    position: absolute;
    padding-left: 30vw;
    padding-right: 40vw;
    margin-top: 67vh;
`
const SlideIcon = styled.div`
    width: 80px;
    height: 18px;
    background-color: ${props => props.backgroundColor || "#1991C434"};
`