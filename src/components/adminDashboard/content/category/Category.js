import { toast } from "react-toastify";
import { useCustomForm } from "../../../../hooks/useCustomForms";
import CategoryForms from "./CategoryForms"
import ManagementComponent from "./common/ManagementComponent"
import ItemList from "./common/ItensList";
import SubCategoryCard from "./subCategory/SubCategoryCard";
import { useState } from "react";
import ManagementSubCategory from "./subCategory/ManagementSubCategory";
import api from "../../../../services/API";

export default function Category({mainCategoryData, handleLoading, adminData}) {

    const [ form, handleForm ] = useCustomForm({name: mainCategoryData?.name});
    const [selectSubCategory, setSelectSubCategory] = useState(undefined)

    const SubCategoryListData = mainCategoryData?.subCategories?.map(e => {
        return {
            content: <SubCategoryCard subCategoryData={e} setSelect={setSelectSubCategory}/>
        }
    })

    const CategoryManagementData = {
        title: mainCategoryData?.name,
        isMainComponent: false,
        components: [
            {
                title: "Editar Categoria Principal",
                content: <CategoryForms form={form} handleForm={handleForm} submitForm={submitForm}/>
            },
            {
                title: selectSubCategory ? "Voltar" : "Lista de SubCategorias",
                content: selectSubCategory ? <ManagementSubCategory SubCategoryData={selectSubCategory} handleLoading={handleLoading}/> : <ItemList ListData={SubCategoryListData} title={"SubCategorias"}/>,
                handleReturn: handleReturnSubCategoryList
            }
        ]
    }

    function handleReturnSubCategoryList(){
        if(!selectSubCategory){
            return
        }
        setSelectSubCategory(undefined)
    }

    async function submitForm(){
        if(!form?.name) {
            toast.dark("Valor inválido!")
            return
        }
        handleLoading(true)
        try {
            const body = {
                categoryId: mainCategoryData?.id,
                name: form?.name
            }
            const response = await api.UpdateCategory({body, token: adminData?.token})

            if(response.status === 200){
                toast.dark("Atualização feita com sucesso")
            }
        } catch (error) {
            console.log(error)
        }
        handleLoading(false)
    }

    return(
        <ManagementComponent ManagementData={CategoryManagementData}/>
    )
}