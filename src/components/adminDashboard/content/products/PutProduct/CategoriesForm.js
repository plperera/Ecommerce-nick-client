import { useEffect, useState } from "react"
import styled from "styled-components"
import api from "../../../../../services/API"

export default function CategoriesForm ({ categories, setForm, form, filter, refresh }) {

    const [filteredCategories, setFilteredCategories] = useState(undefined);
    const [allCategories, setAllCategories] = useState(undefined);
    const [categoriesSelected, setCategoriesSelected] = useState([...categories]);

    function selectCategory({id, name}){
        if( categoriesSelected.some(e => e.categoryId === id) ){
            const newArray = categoriesSelected.filter(e => e.categoryId !== id)
            setCategoriesSelected([...newArray])
            return
        } 

        const newArray = [...categoriesSelected, {categoryId: id, name}]
        setCategoriesSelected([...newArray]) 
    }

    useEffect(() => {
        getCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        
        filterCategories()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh])

    async function getCategories(){
        try {

            const result = await api.GetAllCategories()
            setAllCategories(result.data)
            setFilteredCategories(result.data)
            console.log(result.data)
            console.log(categories)

        } catch (error) {
            console.log(error)
        }
    }

    function filterCategories(){

        if (!filter){
            return setFilteredCategories(allCategories)
        }
        
        const filterResponse = allCategories.filter(e => e.name.toLowerCase().includes(filter.toLowerCase()))
        setFilteredCategories(filterResponse)
        return
    }

    return(
        <Container>
            <Title>
                {"Selecione as Categorias para o Produto"}
            </Title>

            <CategoriesContainer>
                {filteredCategories ? (
                    filteredCategories.map( e => 

                        <CategoryCard key={e.id} onClick={() => selectCategory(e)} isSelected={categoriesSelected.some(selected => selected.categoryId === e.id)}>
                            {e.name}
                        </CategoryCard>

                    )
                ):(<h3>carregando...</h3>)}
            </CategoriesContainer>     

        </Container>
    )
}
const Container = styled.div`
    width: 100%;
`
const Title = styled.div`
    font-size: 20px;
    margin-bottom: 2vh;
`
const CategoriesContainer = styled.div`
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