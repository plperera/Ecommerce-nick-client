import { useEffect, useState } from "react"
import styled from "styled-components"

export default function CategorySelector ({filter, refresh}) {

    const [categoriesSelected, setCategoriesSelected] = useState([])
    const [categories, setCategories] = useState([])
    const fakeCategories = [];
    for (var i = 1; i <= 20; i++) {
        fakeCategories.push({id: i, name: "Categoria " + i});
    }

    function selectCategory({name, id}){
        if( !categoriesSelected[`category${id}`] ){
            setCategoriesSelected({...categoriesSelected, [`category${id}`]: name})
        } else {
            setCategoriesSelected({...categoriesSelected, [`category${id}`]: undefined})
        }
    }

    useEffect(() => {
        console.log(filter, "cate")

        if (!filter){
            return setCategories(fakeCategories)
        }
        
        const filteredCategories = fakeCategories.filter(e => e.name.toLowerCase().includes(filter.toLowerCase()))
        setCategories(filteredCategories)

    }, [refresh])

    useEffect(() => {
        
        setCategories(fakeCategories)

    }, [])

    return(
        <Container>
            {categories ? (
                categories.map( e => 

                    <CategoryCard key={e.id} onClick={() => selectCategory(e)} isSelected={!!categoriesSelected[`category${e.id}`]}>
                        {e.name}
                    </CategoryCard>

                )
            ):(<h3>carregando...</h3>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
    color: #171717;
    width: 100%;
    min-height: 10vh;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    background-color: #39525E3A;
    border-radius: 5px;
    gap: 15px;
    h3 {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
    }
`
const CategoryCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 70px;
    border: 3px solid;
    border-color: ${props => props.isSelected ? ("#0B83BE"):("#E2E2E2")};
    border-radius: ${props => props.isSelected ? ("15px"):("5px")};
    background-color: ${props => props.isSelected ? ("#041D29"):("#FFFFFF")};
    color: ${props => props.isSelected ? ("#FFFFFF"):("#171717")};
    cursor: pointer;
    user-select: none;
`
