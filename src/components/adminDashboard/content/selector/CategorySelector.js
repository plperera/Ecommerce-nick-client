import { useEffect, useState } from "react"
import styled from "styled-components"

export default function CategorySelector ({filter, refresh, subCategories, setForm, form, limitSelect, initSelect}) {
    const [subCategoriesSelected, setSubCategoriesSelected] = useState(initSelect || [])
    const [filteredSubCategories, setFilteredSubCategories] = useState([])

    function selectSubCategory({subCategoryId}){

        if (limitSelect) {

            const totalSelected = Object.values(subCategoriesSelected).filter(Boolean).length;
            console.log(!subCategoriesSelected[`subCategory${subCategoryId}`])
            if(totalSelected >= limitSelect && !subCategoriesSelected[`subCategory${subCategoryId}`]) {
                setSubCategoriesSelected({ [`subCategory${subCategoryId}`]: subCategoryId })
                return;
            }

        }
        if( !subCategoriesSelected[`subCategory${subCategoryId}`] ){
            setSubCategoriesSelected({...subCategoriesSelected, [`subCategory${subCategoryId}`]: subCategoryId})
        } else {
            setSubCategoriesSelected({...subCategoriesSelected, [`subCategory${subCategoryId}`]: undefined})
        }
    }

    function filterSubCategories(){

        if (!filter){
            return setFilteredSubCategories(subCategories)
        }
        
        const filterResponse = subCategories.filter(e => e.subCategoryName.toLowerCase().includes(filter.toLowerCase()))
        setFilteredSubCategories(filterResponse)
        return
    }

    useEffect(() => {
        
        filterSubCategories()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh])

    useEffect(() => {
        
        setFilteredSubCategories(subCategories)

    }, [subCategories])

    useEffect(() => {
        console.log(subCategoriesSelected)
        const bodyFormat = Object.entries(subCategoriesSelected).reduce((acc, [key, value]) => {
            if(value !== undefined) {
              acc.push({subCategoryId: value});
            }
            return acc;
          }, []);
        
        setForm({...form, "subCategories": bodyFormat})

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [subCategoriesSelected])

    return(
        <Container>
            {filteredSubCategories ? (
                filteredSubCategories.map( e => 

                    <SubCategoryCard key={e.subCategoryId} onClick={() => selectSubCategory(e)} isSelected={!!subCategoriesSelected[`subCategory${e.subCategoryId}`]}>
                        {e.subCategoryName}
                    </SubCategoryCard>

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
const SubCategoryCard = styled.div`
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
    @media (max-width: 850px) {
        width: 140px
    }
`
