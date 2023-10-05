import { toast } from "react-toastify";
import { useCustomForm } from "../../../../../hooks/useCustomForms";
import ManagementComponent from "../common/ManagementComponent"
import SubCategoryForms from "./SubCategoryForms"
import { useState } from "react";
import ItemList from "../common/ItensList";
import ProductCard from "../product/ProductCard";
import ManagementProduct from "../product/ManagementProduct";

export default function ManagementSubCategory ({SubCategoryData, handleLoading}) {

    const [ form, handleForm ] = useCustomForm({name: SubCategoryData?.name});
    const [selectProduct, setSelectProduct] = useState(undefined)

    const ProductCardData = {
        name: "Maquina GWOW - 418 | dkdwo DWKdowk ow",
    }

    const ProductListData = [
        {
            content: <ProductCard productData={ProductCardData} setSelect={setSelectProduct}/>
        },
    ]

    const CategoryManagementData = {
        title:"Gerir SubCategorias",
        isMainComponent: false,
        components: [
            {
                title: "Editar",
                content: <SubCategoryForms form={form} handleForm={handleForm} submitForm={submitForm}/>
            },
            {
                title: selectProduct ? "Voltar" : "Lista de Produtos Atrelados",
                content: selectProduct ? <ManagementProduct handleLoading={handleLoading}/> : <ItemList ListData={ProductListData} title={"Produtos"}/>,
                handleReturn: handleReturnSubCategoryList
                // title: selectSubCategory ? "Voltar" : "Lista de SubCategorias",
                // content: selectSubCategory ? <ManagementSubCategory SubCategoryData={selectSubCategory}/> : <ItemList ListData={SubCategoryListData} title={"SubCategorias"}/>,
                // handleReturn: handleReturnSubCategoryList
            },
        ]
    }

    function submitForm(){
        //handleLoading()
        if(!form?.name) {
            toast.dark("Valor inválido!")
            return
        }
    }

    function handleReturnSubCategoryList(){
        if(!setSelectProduct){
            return
        }
        setSelectProduct(undefined)
    }
    
    return(
        <ManagementComponent ManagementData={CategoryManagementData}/>
    )
}