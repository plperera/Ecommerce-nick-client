import styled from "styled-components"

export default function HomeCategoryCard ({ categoryData, setCategoriesCardSelect }) {
    console.log(categoryData)
    return(
        <Container onClick={() => setCategoriesCardSelect(categoryData)}>
            <ImageContainer>
                <img src={categoryData.imageUrl} alt=""/>
            </ImageContainer>

            <Title>
                {categoryData.title}
            </Title>

            <SubTitle>{categoryData.subTitle}</SubTitle>        
        </Container>
    )
}
const Container = styled.div`
    width: 280px;
    padding: 2vh 0 1.8vh 0;
    display: flex;
    align-items: center;
    flex-direction: column; 
    row-gap: 1vh;
    background-color: #FFFFFF; 
    color: #173442;
    border-radius: 5px;
    box-shadow: 0px 4px 8px #00000068;
    height: 350px;
    cursor: pointer;
    font-size: 15px;
`
const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;
    padding: 7px 0;
    background-color: #FFFFFF; 
    img {
        max-width: 100%;
        max-height: 100%;
    }
`
const Title = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    text-align: center;
    width: 100%;
    padding: 8px 1.4vw;
    font-weight: 700;
    max-height: 40px;
    height: auto;
`
const SubTitle = styled(Title)`
    font-weight: 500;
    max-height: 100px;
`