import styled from "styled-components"
import { useState } from "react"
import useNavigateAndMoveUp from "../../hooks/useNavigateAndMoveUp"
import CategoryCard from "./CategoryCard"

export default function CategoriesHome () {

    const Category01 = "https://firebasestorage.googleapis.com/v0/b/imageuploads-7b8bc.appspot.com/o/1689353981757.png?alt=media&token=94990cb7-6043-41ef-b64b-9af87099ac06"
    const ExampleArray = [
        {categoryName:"Seccionadoras", description:"Seccionadoras projetadas e produzidas para oferecer ótima relação custo-benefício ao fabricante.", image: Category01}, 
        {categoryName:"Seccionadoras", description:"Seccionadoras projetadas e produzidas para oferecer ótima relação custo-benefício ao fabricante.", image: Category01}, 
        {categoryName:"Seccionadoras", description:"Seccionadoras projetadas e produzidas para oferecer ótima relação custo-benefício ao fabricante.", image: Category01}, 
        {categoryName:"Seccionadoras", description:"Seccionadoras projetadas e produzidas para oferecer ótima relação custo-benefício ao fabricante.", image: Category01}, 
        {categoryName:"Seccionadoras", description:"Seccionadoras projetadas e produzidas para oferecer ótima relação custo-benefício ao fabricante.", image: Category01},   
    ]

    const [slide, setSlide] = useState(0)

    function ChangeSlide(){
        (slide === (ExampleArray.length - 1)) ? (setSlide(0)):(setSlide(slide + 1))
    }

    const navigateAndMoveUp = useNavigateAndMoveUp();

    return(
        <Container>
            <Title>Categorias</Title>
            <LeftArrowContainer>{"<"}</LeftArrowContainer>
            <CategoryContainer>
                {ExampleArray.map((e, i) => i <= 3 && i >= 0 ? <CategoryCard image={Category01} indice={i} key={i}/>:(<></>))}
            </CategoryContainer>
            <RightArrowContainer>{">"}</RightArrowContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    min-height: 56vh;
    padding: 0 10vw;
    padding-top: 5vh;
    display: flex;
    flex-direction: column;
    row-gap: 3vh;
    @media (max-width: 1366px) {
        padding: 0 4vw;  
        padding-top: 5vh;  
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
const CategoryContainer = styled.div`    
    width: 100%;
    height: 425px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
`
const ArrowContainer = styled.div`
    position: absolute;
    width: 120px;
    height: 120px;
    border: 1px solid red; 
    top: 114vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 70px;
`
const LeftArrowContainer = styled(ArrowContainer)`
    left: 2vw;
`
const RightArrowContainer = styled(ArrowContainer)`
    right: 2vw;
`