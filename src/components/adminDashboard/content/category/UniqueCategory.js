import { toast } from "react-toastify";
import { useCustomForm } from "../../../../hooks/useCustomForms";
import CategoryForms from "./CategoryForms"
import ManagementComponent from "./common/ManagementComponent"
import ItemList from "./common/ItensList";
import SubCategoryCard from "./subCategory/SubCategoryCard";
import { useState } from "react";
import UniqueSubCategory from "./subCategory/UniqueSubCategory";
import api from "../../../../services/API";

export default function UniqueCategory({mainCategoryData, handleLoading, adminData, handleLinkSubCategory, handleRefresh}) {

    const [ form, handleForm ] = useCustomForm({categoryName: mainCategoryData?.categoryName});
    const [selectSubCategory, setSelectSubCategory] = useState(undefined)
    const [selectOtherSubCategory, setSelectOtherSubCategory] = useState(undefined)

    const SubCategoryListData = mainCategoryData?.subCategories?.map(e => {
        return {
            content: <SubCategoryCard 
                subCategoryData={e} 
                setSelect={setSelectSubCategory} 
                subCategoryBelong={true} 
                handleLinkSubCategory={handleLinkSubCategory}
                mainCategoryId={mainCategoryData?.id}
            />
        }
    })
    const OtherSubCategoryListData = mainCategoryData?.subCategories?.map(e => {
        return {
            content: <SubCategoryCard 
                subCategoryData={e} 
                setSelect={setSelectOtherSubCategory} 
                subCategoryBelong={false} 
                hasOtherMainCategory={Math.random() >= 0.5} 
                handleLinkSubCategory={handleLinkSubCategory}
                mainCategoryId={mainCategoryData?.id}
            />
        }
    })
    const CategoryManagementData = {
        title: mainCategoryData?.categoryName,
        isMainComponent: false,
        components: [
            {
                title: "Editar Categoria Principal",
                content: <CategoryForms form={form} handleForm={handleForm} submitForm={submitForm} deleteButton={true}/>
            },
            {
                title: "Lista de SubCategorias",
                showReturnButton: !!selectSubCategory,
                handleReturn: handleReturnSubCategoryList,
                content: <ItemList 
                    ListData={SubCategoryListData} 
                    title={"SubCategorias"}
                    selectItem={selectSubCategory}
                    contentWhenSelected={
                        <UniqueSubCategory 
                            SubCategoryData={selectSubCategory} 
                            handleLoading={handleLoading}
                            adminData={adminData}
                        /> 
                    }
                />,
            },
            {
                title: "Atrelar outras Subcategoria",
                showReturnButton: !!selectOtherSubCategory,
                handleReturn: handleReturnOtherSubCategoryList,
                content: <ItemList 
                    ListData={OtherSubCategoryListData} 
                    title={"SubCategorias"}
                    selectItem={selectOtherSubCategory}
                    contentWhenSelected={
                        <UniqueSubCategory 
                            SubCategoryData={selectOtherSubCategory} 
                            handleLoading={handleLoading}
                            adminData={adminData}
                        /> 
                    }
                />,
            }
        ]
    }

    function handleReturnSubCategoryList(){
        if(!selectSubCategory){
            return
        }
        setSelectSubCategory(undefined)
    }
    function handleReturnOtherSubCategoryList(){
        if(!selectOtherSubCategory){
            return
        }
        setSelectOtherSubCategory(undefined)
    }
    async function submitForm(operation){
        if(!form?.categoryName) {
            toast.dark("Valor inválido!")
            return
        }
        handleLoading(true)
        try {
            const body = {
                categoryId: mainCategoryData?.categoryId,
                categoryName: form?.categoryName
            }

            let response

            if (operation === "delete"){
                delete body.categoryName
                response = await api.DisableCategory({body, token: adminData?.token})
            } else {
                response = await api.UpdateCategory({body, token: adminData?.token})
            }

            if(response.status === 200){
                toast.dark("Atualização feita com sucesso")
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
            toast.dark("Ocorreu um erro, tente novamente mais tarde ou contate o desenvolvedor")
            console.log(error)
            handleRefresh()
            handleLoading(false) 
            return
        }
    }

    return(
        <ManagementComponent ManagementData={CategoryManagementData}/>
    )
}