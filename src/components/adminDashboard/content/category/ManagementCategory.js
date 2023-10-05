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
import CategoryForms from "./CategoryForms"
import { useCustomForm } from "../../../../hooks/useCustomForms"
import { toast } from "react-toastify"

export default function ManagementCategory () {

    const [selectCategory, setSelectCategory] = useState(undefined)
    const [categoriesData, setCategoriesData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [refresh, setRefresh] = useState(true)
    const { adminData } = useContext(AdminContext); 
    const [ form, handleForm ] = useCustomForm();

    const CategoryListData = categoriesData?.map(e => {
        return {
            content: <CategoryCard categoryData={e} setSelect={setSelectCategory}/>
        }
    })

    const [CategoryManagementData, setCategoryManagementData] = useState({});

    useEffect(() => {
        getAllCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh])

    useEffect(() => {
        console.log(categoriesData)
    }, [categoriesData])

    useEffect(() => {
        setCategoryManagementData({
            title:"Gerir Categorias",
            isMainComponent: true,
            components: [
                {
                    title: "Nova Categoria:",
                    content: <CategoryForms textButton={"Criar"} form={form} handleForm={handleForm} submitForm={handleSubmitNewCategory}/>,
                },
                {
                    title: selectCategory ? "Voltar" : "Lista de Categorias:",
                    content: selectCategory 
                        ? <Category mainCategoryData={selectCategory} handleLoading={handleLoading} adminData={adminData}/> 
                        : <ItemList ListData={CategoryListData} title={"Categorias"}/>,
                    handleReturn: handleReturnCategoryList
                },
            ]
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoriesData, selectCategory, refresh, form])

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
        if(status !== undefined){
            setIsLoading(status)
            return
        }
        setIsLoading(!isLoading)
        return
    }

    function handleRefresh(){
        setRefresh(!refresh)
    }

    function handleReturnCategoryList(){
        if(!selectCategory){
            return
        }
        setSelectCategory(undefined)
    }

    async function handleSubmitNewCategory() {
        if(!form?.name){
            toast.dark("Valor inválido")
            return
        }
        handleLoading(true)
        try {
            const body = {
                name: form?.name
            }
            const response = await api.CreateCategory({body, token: adminData?.token})

            if(response?.status === 201){
                toast.dark("Categoria Criada com sucesso")
            }
            handleRefresh()
            handleLoading(false)
            return

        } catch (error) {
            if (error?.response?.status === 409) {
                toast.error("Categoria ja cadastrada")
                handleRefresh()
                handleLoading(false)
                return
            }
            if (error?.response?.status === 400) {
                toast.error("Nome de categoria inválido")
                handleRefresh()
                handleLoading(false)
                return
            }
            console.log(error)
            toast.dark("Ocorreu um erro, tente novamente mais tarde ou contate o desenvolvedor")
            handleRefresh()
            handleLoading(false)
            return
        }
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
    width: 30px;
    height: 30px;
    position: absolute;
    background-color: rebeccapurple;
    cursor: pointer;
    bottom: 0;
    left: 0;
`