import { toast } from "react-toastify";
import { useCustomForm } from "../../../../../hooks/useCustomForms";
import ManagementComponent from "../common/ManagementComponent"
import { useState } from "react";
import ItemList from "../common/ItensList";


export default function ManagementProduct ({SubCategoryData}) {

    const [ form, handleForm ] = useCustomForm({name: SubCategoryData?.name});
    const [selectProduct, setSelectProduct] = useState(undefined)

    const ProductCardData = {
        name: "Maquina GWOW - 418 | dkdwo DWKdowk ow",
    }

    const ProductListData = [
        {
            content: <></>
            //content: <ProductCard productData={ProductCardData} setSelect={setSelectProduct}/>
        },
    ]

    const ProductManagementData = {
        title:"Gerir Produto",
        isMainComponent: false,
        components: [
            {
                title: "Editar",
                content: <></>
                //content: <SubCategoryForms form={form} handleForm={handleForm} submitForm={submitForm}/>
            },
            {
                title: selectProduct ? "Voltar" : "Lista de Produtos Atrelados",
                content: selectProduct ? <>PRODUCT_MANAGEMENT</> : <ItemList ListData={ProductListData} title={"Produtos"}/>,
                handleReturn: handleReturnSubCategoryList
                // title: selectSubCategory ? "Voltar" : "Lista de SubCategorias",
                // content: selectSubCategory ? <ManagementSubCategory SubCategoryData={selectSubCategory}/> : <ItemList ListData={SubCategoryListData} title={"SubCategorias"}/>,
                // handleReturn: handleReturnSubCategoryList
            },
        ]
    }

    function submitForm(){
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
        <ManagementComponent ManagementData={ProductManagementData}/>
    )
}