import { toast } from "react-toastify";
import { useCustomForm } from "../../../../hooks/useCustomForms";
import CategoryForms from "./CategoryForms"
import ManagementComponent from "./common/ManagementComponent"
import ItemList from "./common/ItensList";
import SubCategoryCard from "./subCategory/SubCategoryCard";
import { useState } from "react";
import ManagementSubCategory from "./subCategory/ManagementSubCategory";

export default function Category({mainCategoryData}) {

    const [ form, handleForm ] = useCustomForm({name: mainCategoryData?.name});
    const [selectSubCategory, setSubSelectCategory] = useState(undefined)

    const SubCategoryCardData = {
        name: "XMCOIS 141",
        products: [1, 2, 3]
    }

    const SubCategoryListData = [
        {
            content: <SubCategoryCard subCategoryData={SubCategoryCardData} setSelect={setSubSelectCategory}/>
        },
        {
            content: <SubCategoryCard subCategoryData={SubCategoryCardData} setSelect={setSubSelectCategory}/>
        },
        {
            content: <SubCategoryCard subCategoryData={SubCategoryCardData} setSelect={setSubSelectCategory}/>
        },
        {
            content: <SubCategoryCard subCategoryData={SubCategoryCardData} setSelect={setSubSelectCategory}/>
        },
        {
            content: <SubCategoryCard subCategoryData={SubCategoryCardData} setSelect={setSubSelectCategory}/>
        },
    ]

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
                content: selectSubCategory ? <ManagementSubCategory SubCategoryData={selectSubCategory}/> : <ItemList ListData={SubCategoryListData} title={"SubCategorias"}/>,
                handleReturn: handleReturnSubCategoryList
            }
        ]
    }

    function handleReturnSubCategoryList(){
        if(!selectSubCategory){
            return
        }
        setSubSelectCategory(undefined)
    }

    // content: selectCategory ? <SubCategories mainCategoryData={selectCategory} /> : <ItemList ListData={CategoryListData} title={"Categorias"}/>,

    function submitForm(){
        if(!form?.name) {
            toast.dark("Valor inválido!")
            return
        }
    }

    return(
        <ManagementComponent ManagementData={CategoryManagementData}/>
    )
}