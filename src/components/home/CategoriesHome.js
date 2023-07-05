import styled from "styled-components"
import Category01 from "../../assets/images/Category01.png"
import Category02 from "../../assets/images/Category02.png"
import { useState } from "react"

export default function CategoriesHome () {

    const ExampleArray = [
        {categoryName:"Seccionadoras", description:"Seccionadoras projetadas e produzidas para oferecer ótima relação custo-benefício ao fabricante.", image: Category01}, 
        {categoryName:"Filetadeira", description:"Para cortes limpos, sem rebarbas e sem desperdício. Cortador de tiras para laminados, de uso fácil e preciso. Para cortes limpos, sem rebarbas e sem desperdício.", image: Category02},
    ]

    const [slide, setSlide] = useState(0)

    function ChangeSlide(){
        (slide === (ExampleArray.length - 1)) ? (setSlide(0)):(setSlide(slide + 1))
    }


    return(
        <Container>

            <LeftContainer>
                <Title>Categorias</Title>
                <CategoryName>{ExampleArray[slide].categoryName}</CategoryName>
                <Description>{ExampleArray[slide].description}</Description>
                <ButtonStyle>Ver Detalhes</ButtonStyle>
            </LeftContainer>

            <RightContainer>
                <LeftSlideArrow onClick={() => ChangeSlide()}>&#10094;</LeftSlideArrow>
                <img src={ExampleArray[slide].image} alt=""/>
                <RightSlideArrow onClick={() => ChangeSlide()}>&#10095;</RightSlideArrow>
            </RightContainer>

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
    width: 100%;
    height: 65vh;
    padding: 0 10vw;
    padding-top: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1366px) {
        padding: 0 4vw;  
        padding-top: 5vh;  
    }
    
`
const LeftContainer = styled.div`
    height: 100%;
    width: 50%;
`
const RightContainer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        max-width: 100%;
        max-height: 100%;
    }  
`
const Title = styled.h1`
    border-left: 8px solid #009395;
    font-size: 42px;
    font-weight: 600;
    padding-left: 1vw;
    @media (max-width: 1366px) {
        font-size: 36px;    
    }
`
const CategoryName = styled.h1`
    font-size: 48px;
    font-weight: 700;
    margin-top: 15vh;
    @media (max-width: 1366px) {
        font-size: 38px;    
    }
`
const Description = styled.p`
    font-size: 26px;
    font-weight: 600;
    margin-top: 7vh;
    width: 95%;
    height: 18vh;
    @media (max-width: 1366px) {
        font-size: 21px; 
        width: 90%;
    }
`
const ButtonStyle = styled.div`
    width: 256px;
    height: 50px;
    background-color: #009395;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    border-radius: 50px;
    font-size: 21px;
    font-weight: 600;
    margin-top: 1vh;
    @media (max-width: 1366px) {
        font-size: 20px;    
    }
`
const SlideArrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #FFFFFF;
    border-radius: 50px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
`;
const LeftSlideArrow = styled(SlideArrow)`
    width: 50px;
    height: 50px;
    background-color: #FFFFFF;
    border-radius: 50px;
    position: absolute;
    margin-left: -40vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
`
const RightSlideArrow = styled(SlideArrow)`
    width: 50px;
    height: 50px;
    background-color: #FFFFFF;
    border-radius: 50px;
    position: absolute;   
    margin-right: -40vw; 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
`
const Slide = styled.div`
    width: 100%;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    position: absolute;
    margin-top: 67vh;
`
const SlideIcon = styled.div`
    width: 70px;
    height: 18px;
    background-color: ${props => props.backgroundColor || "#00929528"};
    border-radius: 5px;

`