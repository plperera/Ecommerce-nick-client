import ManagementComponent from "./common/ManagementComponent"
import ItemList from "./common/ItensList"
import CategoryCard from "./CategoryCard"
import { useState } from "react"
import UniqueCategory from "./UniqueCategory"
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

    const { adminData } = useContext(AdminContext); 
    const [ form, handleForm ] = useCustomForm();
    const [selectCategory, setSelectCategory] = useState(undefined)

    const [categoriesData, setCategoriesData] = useState([])

    const [isLoading, setIsLoading] = useState(true)
    const [refresh, setRefresh] = useState(true)

    const [CategoryManagementData, setCategoryManagementData] = useState({});

    //faz a busca de todas as categorias
    useEffect(() => {
        getAllCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh])

    //apenas para teste
    useEffect(() => {
        console.log(categoriesData)
    }, [categoriesData])

    //manipula o componente de gerenciamento
    useEffect(() => {
        
        const CategoryListData = categoriesData?.map(e => {
            return {
                content: <CategoryCard 
                    categoryData={e} 
                    setSelect={setSelectCategory}
                />
            }
        })

        setCategoryManagementData({
            title:"Gerir Categorias",
            isMainComponent: true,
            components: [
                {
                    title: "Nova Categoria:",
                    content: <CategoryForms textButton={"Criar"} form={form} handleForm={handleForm} submitForm={handleSubmitNewCategory}/>,
                },
                {
                    title: "Lista de Categorias",
                    showReturnButton: !!selectCategory,
                    handleReturn: handleReturnCategoryList,
                    content: <ItemList 
                        ListData={CategoryListData} 
                        title={"Categorias"} 
                        selectItem={selectCategory}
                        contentWhenSelected={
                            <UniqueCategory 
                                mainCategoryData={selectCategory} 
                                handleLoading={handleLoading} 
                                adminData={adminData} 
                                handleLinkSubCategory={handleLinkSubCategory}
                                handleRefresh={handleRefresh}
                                refresh={refresh}
                            />
                        }
                    />,
                },
            ]
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoriesData, selectCategory, refresh, form])

    //apenas para teste
    // function formatCategoriesForTest(arr){
    //     const newArray = arr.map(e => {
    //         return {
    //             ...e,
    //             subCategories: [
    //                 {
    //                     id: 1,
    //                     name: "DWEK 252",
    //                     products: [
    //                         {
    //                             id: 1,
    //                             name: "Maquina 1"
    //                         },
    //                         {
    //                             id: 1,
    //                             name: "Maquina 2"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     id: 1,
    //                     name: "DWEK 252",
    //                     products: [
    //                         {
    //                             id: 1,
    //                             name: "Maquina 1"
    //                         },
    //                         {
    //                             id: 1,
    //                             name: "Maquina 2"
    //                         }
    //                     ]
    //                 },
    //             ]
    //         }
    //     })
    //     return newArray
    // }

    //busca todas as categorias
    async function getAllCategories(){
        handleLoading(true)
        try {
            const response = await api.GetAllCategoriesWithAllData(adminData?.token)
            setCategoriesData(response.data)
        } catch (error) {
            console.log(error)
        }
        setTimeout(() => {
            handleLoading(false)
        }, 2000)
    }

    //Manipula o LoadSpinner
    function handleLoading(status){
        if(status !== undefined){
            setIsLoading(status)
            return
        }
        setIsLoading(!isLoading)
        return
    }

    //Atualiza o componente
    function handleRefresh(){
        setRefresh(!refresh)
    }

    //Retorna para seleção de categorias
    function handleReturnCategoryList(){
        if(!selectCategory){
            return
        }
        setSelectCategory(undefined)
    }

    //Cria uma nova Categoria
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

    //Manipula a linkagem
    async function handleLinkSubCategory({mainCategoryId, subCategoryId}){
        
        if(!mainCategoryId && !subCategoryId){
            toast.dark("Ocorreu um erro nos valores")
            console.log("Valores LinkSubCategory: ", {mainCategoryId, subCategoryId})
            return
        }
        try {
            const body = {
                categoryId: mainCategoryId,
                subCategoryId
            }

            const response = await api.HandleCategoryLink({body, token: adminData?.token})
            
            if(response?.status === 200){
                toast.dark("Atualização feita com Sucesso")
            }

            handleRefresh()
            handleLoading(false)
            return
        } catch (error) {
            console.log(error)
            toast.dark("Ocorreu um erro, tente novamente mais tarde ou contate o desenvolvedor")
            handleRefresh()
            handleLoading(false)
            return
        }
    }
    
    return(
        <Container>
            {/* <LoadingContainer isLoading={isLoading}/> */}
            {categoriesData && <ManagementComponent ManagementData={CategoryManagementData}/>}
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