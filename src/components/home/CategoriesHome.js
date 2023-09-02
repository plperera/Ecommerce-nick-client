import styled from "styled-components"
import { useEffect, useState } from "react"
import useNavigateAndMoveUp from "../../hooks/useNavigateAndMoveUp"
import CategoryCard from "./CategoryCard"
import api from "../../services/API"

export default function CategoriesHome () {
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

            <MobileCategoryContainer>
                {categoryCardData ? (
                    Array(categoryCardData.length > 2 ?(2):(categoryCardData.length)).fill(0).map((_, i) => {
                        const index = (slide + i) % categoryCardData.length;
                        return <CategoryCard category={categoryCardData[index]} key={index} applyAnimation={applyAnimation} navigateAndMoveUp={navigateAndMoveUp}/>
                    })
                ):(<></>)}
            </MobileCategoryContainer>

            <RightArrowContainer onClick={() =>  applyAnimation ? (""):(ChangeSlide(1))}>{">"}</RightArrowContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    min-height: 56vh;
    padding: 4vh 10vw;
    display: flex;
    flex-direction: column;
    row-gap: 3vh;
    @media (max-width: 1366px) {
        padding: 0 4vw;  
        padding-top: 5vh;  
    }
    @media (max-width: 850px) {
        padding-top: 3vh;
        min-height: 50vh;
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
    @media (max-width: 850px) {
        font-size: 28px;
    }
`
const CategoryContainer = styled.div`    
    width: 100%;
    height: 425px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 2.6vw;
    user-select: none;
    @media (max-width: 850px) {
        display: none;
    }   
`
const MobileCategoryContainer = styled(CategoryContainer)`

    display: none;

    @media (max-width: 850px) {
        display: flex;
        font-size: 28px;
        height: 300px;
        justify-content: space-evenly;
        margin-top: 2vh;    
    }
` 

const ArrowContainer = styled.div`
    position: absolute;
    width: 40px;
    height: 100px;
    top: 98vh;
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
    @media (max-width: 1366px) {
        top: 104vh;
    }
    @media (max-width: 850px) {
        top: 88vh;
        font-size: 60px;
    }
`
const LeftArrowContainer = styled(ArrowContainer)`
    left: 2vw;
    display: ${props => props.display};
    @media (max-width: 1366px) {
        left: 0.6vw;
    }
    @media (max-width: 850px) {
        left: 0vw;
        justify-content: left;
    }
`
const RightArrowContainer = styled(ArrowContainer)`
    right: 2vw;
    display: ${props => props.display};
    @media (max-width: 1366px) {
        right: 0.6vw;
    }
    @media (max-width: 850px) {
        right: 0vw;
        justify-content: right;
    }
`