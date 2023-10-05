import ManagementComponent from "./common/ManagementComponent"
import ItemList from "./common/ItensList"
import CategoryCard from "./CategoryCard"
import { useState } from "react"
import Category from "./Category"
import api from "../../../../services/API"
import { useEffect } from "react"
import styled from "styled-components"
import LoadingContainer from "./common/LoadingContainer"
import AdminContext from "../../../../context/AdminContext"
import { useContext } from "react"

export default function ManagementCategory () {

    const [selectCategory, setSelectCategory] = useState(undefined)
    const [categoriesData, setCategoriesData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { adminData } = useContext(AdminContext); 

    function formatCategoriesForTest(arr){
        const newArray = arr.map(e => {
            return {
                ...e,
                subCategories: [
                    {
                        id: 1,
                        name: "DWEK 252",
                        products: [
                            {
                                id: 1,
                                name: "Maquina 1"
                            },
                            {
                                id: 1,
                                name: "Maquina 2"
                            }
                        ]
                    },
                    {
                        id: 1,
                        name: "DWEK 252",
                        products: [
                            {
                                id: 1,
                                name: "Maquina 1"
                            },
                            {
                                id: 1,
                                name: "Maquina 2"
                            }
                        ]
                    },
                ]
            }
        })
        return newArray
    }

    async function getAllCategories(){
        handleLoading(true)
        try {
            const response = await api.GetAllCategories()
            setCategoriesData(formatCategoriesForTest(response.data))
        } catch (error) {
            console.log(error)
        }
        setTimeout(() => {
            handleLoading(false)
        }, 2000)
    }

    function handleLoading(status){
        if (status !== undefined){
            setIsLoading(status)
            return
        }
        setIsLoading(!isLoading)
        return
    }

    function handleRefresh(){
        const newArray = categoriesData.reverse()
        setCategoriesData(newArray)
    }

    useEffect(() => {
        getAllCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        console.log(categoriesData)
    }, [categoriesData])

    const CategoryListData = categoriesData?.map(e => {
        return {
            content: <CategoryCard categoryData={e} setSelect={setSelectCategory}/>
        }
    })
    
    const CategoryManagementData = {
        title:"Gerir Categorias",
        isMainComponent: true,
        components: [
            {
                title: selectCategory ? "Voltar" : "Lista de Categorias:",
                content: selectCategory 
                    ? <Category mainCategoryData={selectCategory} handleLoading={handleLoading} adminData={adminData}/> 
                    : <ItemList ListData={CategoryListData} title={"Categorias"}/>,
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
            { categoriesData 
                ? <ManagementComponent ManagementData={CategoryManagementData}/> 
                : <></>
            }
            <TestButton onClick={handleRefresh}/>
        </Container>
    )
}
const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`
const TestButton = styled.div`
    width: 100px;
    height: 100px;
    position: absolute;
    background-color: rebeccapurple;
`