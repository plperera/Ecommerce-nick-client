import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import AdminContext from "../../../../../../context/AdminContext"
import api from "../../../../../../services/API"
import ItemList from "../../../category/common/ItensList"
import SubCategoryCard from "../../../category/subCategory/SubCategoryCard"


export default function CardSubCategories ({form, setForm}) {
    const [ showProductSubCategories, setShowProductSubCategories ] = useState(true)
    const [ allSubCategoriesData, setSubCategoriesData ] = useState(undefined)
    const [ allCardsData, setAllCardsData ] = useState(undefined)
    const { adminData } = useContext(AdminContext); 

    async function getAllSubCategoriesData() {
        try {
            const response = await api.GetAllSubCategoriesData(adminData?.token)
            setSubCategoriesData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    async function handleLinkSubCategory({subCategoryId}) {
        const lastForm = {...form}
        setForm({...lastForm, cardSubCategoryId: [subCategoryId]})
    }

    useEffect(() => {
        getAllSubCategoriesData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        console.log(form)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [form])

    useEffect(() => {
        const ImageListData = allSubCategoriesData
            ?.map((e) => ({
                content: (
                    <SubCategoryCard
                        subCategoryData={e} 
                        handleLinkSubCategory={handleLinkSubCategory}
                        selectionData={form?.cardSubCategoryId}
                    />
                ),
            }))
        ;
        setAllCardsData(ImageListData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [form, allSubCategoriesData])
    return(
        <Container>    
            <HandleShowContainer>
                <p>Selecionar SubCategorias</p>
                <p onClick={() => setShowProductSubCategories(!showProductSubCategories)}>{showProductSubCategories ? 'mostrar menos':'expandir'}</p>
            </HandleShowContainer>

            <SubCategoriesListContainer showProductSubCategories={showProductSubCategories}>
                {
                    allCardsData
                        ? <ItemList 
                            ListData={allCardsData} 
                            title={"SubCategorias"}
                        />
                        : <></>
                } 
            </SubCategoriesListContainer>
        </Container>
    )
}
const Container = styled.div`
    width: 80%;
    min-height: 60px;
`
const HandleShowContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > :last-child {
        background-color: #9E9E9E83;
        color: #464646;
        padding: 6px 12px;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        user-select: none;
    }
`
const SubCategoriesListContainer = styled.div`
    width: 100%;
    display: ${props => props.showProductSubCategories ? `flex`:'none'};
    flex-direction: column;
    row-gap: 2vh;
`