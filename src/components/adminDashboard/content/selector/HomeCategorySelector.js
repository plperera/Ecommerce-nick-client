import styled from "styled-components"
import HomeCategoryCard from "./HomeCategoryCard"

export default function CategorySelector ({setCategoriesCardSelect, categoriesCard}) {
    return(
        <Container>
            {categoriesCard ? (
                categoriesCard.map((e,i) =><HomeCategoryCard setCategoriesCardSelect={setCategoriesCardSelect} categoryData={e}/> )
            ):(<></>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    min-height: 10vh;
    row-gap: 3vh;
    background-color: #39525E3A;
    padding: 30px;
    border-radius: 5px;
    margin-top: calc(2vh + 7vh);
    cursor: pointer;
    @media (max-width: 850px) {
        justify-content: space-between;
    }
`