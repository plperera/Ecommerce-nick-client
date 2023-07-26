import styled from "styled-components"
import { useEffect, useState } from "react"
import useNavigateAndMoveUp from "../../hooks/useNavigateAndMoveUp"
import CategoryCard from "./CategoryCard"
import api from "../../services/API"

export default function CategoriesHome () {

    // const Category01 = "https://firebasestorage.googleapis.com/v0/b/imageuploads-7b8bc.appspot.com/o/1689353981757.png?alt=media&token=94990cb7-6043-41ef-b64b-9af87099ac06"
    // const Category02 = "https://firebasestorage.googleapis.com/v0/b/imageuploads-7b8bc.appspot.com/o/1689354512144.png?alt=media&token=e0c465de-79a5-4e2d-ab1f-6f719f645aa6"
    // const ExampleArray = [
    //     {categoryName:"Seccionadoras", description:"Seccionadoras projetadas e produzidas para oferecer ótima relação custo-benefício ao fabricante.", image: Category01}, 
    //     {categoryName:"Seccionadoras2", description:"Seccionadoras projetadas e produzidas para oferecer ótima relação custo-benefício ao fabricante.", image: Category02}, 
    //     {categoryName:"Seccionadoras3", description:"Seccionadoras projetadas e produzidas para oferecer ótima relação custo-benefício ao fabricante.", image: Category01}, 
    //     {categoryName:"Seccionadoras4", description:"Seccionadoras projetadas e produzidas para oferecer ótima relação custo-benefício ao fabricante.", image: Category02}, 
    //     {categoryName:"Seccionadoras5", description:"Seccionadoras projetadas e produzidas para oferecer ótima relação custo-benefício ao fabricante.", image: Category01},   
    //     {categoryName:"Seccionadoras6", description:"Seccionadoras projetadas e produzidas para oferecer ótima relação custo-benefício ao fabricante.", image: Category02},   
    // ]

    const [ slide, setSlide ] = useState(0)
    const [ applyAnimation, setApplyAnimation ] = useState(false)
    const [ categoryCardData, setCategoryCardData ] = useState(undefined)

    useEffect(() => {
        getAllBanners()
    },[])

    useEffect(() => {

        setApplyAnimation(true)

        setTimeout(() => {
            setApplyAnimation(false)
        }, 200); 
      
    }, [slide]);

    async function getAllBanners() {
        try {
            const response = await api.GetAllCategoriesCard()
            setCategoryCardData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    function ChangeSlide(changeAmount){
        let newSlide = slide + changeAmount;

        if (newSlide > categoryCardData.length - 1) {
            newSlide = 0;
        }
    
        if (newSlide < 0) {
            newSlide = categoryCardData.length - 1;
        }
        setSlide(newSlide);
    }
    
    const navigateAndMoveUp = useNavigateAndMoveUp();

    return(
        <Container>
            <Title>Categorias</Title>
            <LeftArrowContainer onClick={() =>  applyAnimation ? (""):(ChangeSlide(-1))}>{"<"}</LeftArrowContainer>
            <CategoryContainer>
                {categoryCardData ? (
                    Array(categoryCardData.length > 4 ?(4):(categoryCardData.length)).fill(0).map((_, i) => {
                        const index = (slide + i) % categoryCardData.length;
                        return <CategoryCard category={categoryCardData[index]} key={index} applyAnimation={applyAnimation} navigateAndMoveUp={navigateAndMoveUp}/>
                    })
                ):(<></>)}
            </CategoryContainer>
            <RightArrowContainer onClick={() =>  applyAnimation ? (""):(ChangeSlide(1))}>{">"}</RightArrowContainer>
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
    width: 100px;
    height: 100px;
    top: 115vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 70px;
    font-weight: 600;
    user-select: none;
    cursor: pointer;
    color: #009395ff;
    &:hover {
        color: #00BFC2;
    }
`
const LeftArrowContainer = styled(ArrowContainer)`
    left: 2vw;
    display: ${props => props.display};
`
const RightArrowContainer = styled(ArrowContainer)`
    right: 2vw;
    display: ${props => props.display};
`