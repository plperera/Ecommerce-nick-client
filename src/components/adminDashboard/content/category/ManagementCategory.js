import ManagementComponent from "./common/ManagementComponent"
import ItemList from "./common/ItensList"
import CategoryCard from "./CategoryCard"
import { useState } from "react"
import Category from "./Category"
import api from "../../../../services/API"
import { useEffect } from "react"
import styled from "styled-components"
import LoadingContainer from "./common/LoadingContainer"

export default function ManagementCategory () {

    const [selectCategory, setSelectCategory] = useState(undefined)
    const [categoriesData, setCategoriesData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function getAllCategories(){
        handleLoading(true)
        try {
            const response = await api.GetAllCategories()
            setCategoriesData(response.data)
        } catch (error) {
            console.log(error)
        }
        setTimeout(() => {
            handleLoading(false)
        }, 5000)
        
    }

    function handleLoading(status){
        if (status !== undefined){
            setIsLoading(status)
            return
        }
        setIsLoading(!isLoading)
    }

    useEffect(() => {
        getAllCategories()
    }, [])

    const CategoryCardData = {
        name: "Maquina Nova",
        subCategories: [1, 2, 3]
    }

    const CategoryListData = [
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
        {
            content: <CategoryCard categoryData={CategoryCardData} setSelect={setSelectCategory}/>
        },
    ]

    const CategoryManagementData = {
        title:"Gerir Categorias",
        isMainComponent: true,
        components: [
            {
                title: selectCategory ? "Voltar" : "Lista de Categorias:",
                content: selectCategory ? <Category mainCategoryData={selectCategory} handleLoading={handleLoading}/> : <ItemList ListData={CategoryListData} title={"Categorias"}/>,
                handleReturn: handleReturnCategoryList
            },
        ]
    }

    function handleReturnCategoryList(){
        if(!selectCategory){
            return
        }
        setSelectCategory(undefined)
    }
    
    return(
        <Container>
            <LoadingContainer isLoading={isLoading}/>
            <ManagementComponent ManagementData={CategoryManagementData}/>
        </Container>
    )
}
const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`