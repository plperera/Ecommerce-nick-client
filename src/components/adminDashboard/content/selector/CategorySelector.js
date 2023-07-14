import { useEffect, useState } from "react"
import styled from "styled-components"

export default function CategorySelector ({filter, refresh, categories, setForm, form}) {

    const [categoriesSelected, setCategoriesSelected] = useState([])
    const [filteredCategories, setFilteredCategories] = useState([])

    function selectCategory({id}){
        if( !categoriesSelected[`category${id}`] ){
            setCategoriesSelected({...categoriesSelected, [`category${id}`]: id})
        } else {
            setCategoriesSelected({...categoriesSelected, [`category${id}`]: undefined})
        }
    }

    function filterCategories(){

        if (!filter){
            return setFilteredCategories(categories)
        }
        
        const filterResponse = categories.filter(e => e.name.toLowerCase().includes(filter.toLowerCase()))
        setFilteredCategories(filterResponse)
        return
    }

    useEffect(() => {
        
        filterCategories()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh])

    useEffect(() => {
        
        setFilteredCategories(categories)

    }, [categories])

    useEffect(() => {

        const bodyFormat = Object.entries(categoriesSelected).reduce((acc, [key, value]) => {
            if(value !== undefined) {
              acc.push({imageId: value});
            }
            return acc;
          }, []);
        
        setForm({...form, "categories": bodyFormat})

    }, [categoriesSelected])

    return(
        <Container>
            {filteredCategories ? (
                filteredCategories.map( e => 

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
