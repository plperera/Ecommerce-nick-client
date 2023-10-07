import { toast } from "react-toastify";
import { useCustomForm } from "../../../../../hooks/useCustomForms";
import ManagementComponent from "../common/ManagementComponent"
import SubCategoryForms from "./SubCategoryForms"
import { useState } from "react";
import ItemList from "../common/ItensList";
import ProductCard from "../product/ProductCard";
import ManagementProduct from "../product/ManagementProduct";
import api from "../../../../../services/API";
import AdminContext from "../../../../../context/AdminContext";
import { useContext } from "react";

export default function ManagementSubCategory ({SubCategoryData, handleLoading}) {

    const [ form, handleForm ] = useCustomForm({name: SubCategoryData?.name});
    const [selectProduct, setSelectProduct] = useState(undefined)
    const { adminData } = useContext(AdminContext); 

    const ProductCardData = {
        name: "Maquina GWOW - 418 | dkdwo DWKdowk ow",
        imageUrl: "https://storage.googleapis.com/imageuploads-7b8bc.appspot.com/1689369296686.png"
    }

    const ProductListData = [
        {
            content: <ProductCard 
                productData={ProductCardData} 
                setSelect={setSelectProduct}
                productBelong={true} 
                handleLinkProduct={() => {}}
                subcategoryId={SubCategoryData?.id}
            />
        },
    ]

    const OtherProductListData = [
        {
            content: <ProductCard 
                productData={ProductCardData} 
                setSelect={setSelectProduct}
                productBelong={false} 
                hasOtherSubCategory={Math.random() >= 0.5} 
                handleLinkProduct={() => {}}
                subcategoryId={SubCategoryData?.id}
            />
        },
    ]

    const CategoryManagementData = {
        title:"Gerir SubCategorias",
        isMainComponent: false,
        components: [
            {
                title: "Editar",
                content: <SubCategoryForms form={form} handleForm={handleForm} submitForm={submitForm} deleteButton={true}/>
            },
            {
                title: selectProduct ? "Voltar" : "Lista de Produtos Atrelados",
                content: selectProduct 
                    ? <ManagementProduct handleLoading={handleLoading}/> 
                    : <ItemList ListData={ProductListData} title={"Produtos"}/>,
                handleReturn: handleReturnSubCategoryList
                // title: selectSubCategory ? "Voltar" : "Lista de SubCategorias",
                // content: selectSubCategory ? <ManagementSubCategory SubCategoryData={selectSubCategory}/> : <ItemList ListData={SubCategoryListData} title={"SubCategorias"}/>,
                // handleReturn: handleReturnSubCategoryList
            },
            {
                title: selectProduct ? "Voltar" : "Atrelar outros Produtos",
                content: selectProduct 
                    ? <ManagementProduct handleLoading={handleLoading}/> 
                    : <ItemList ListData={OtherProductListData} title={"Produtos"}/>,
                handleReturn: handleReturnSubCategoryList
                // title: selectSubCategory ? "Voltar" : "Lista de SubCategorias",
                // content: selectSubCategory ? <ManagementSubCategory SubCategoryData={selectSubCategory}/> : <ItemList ListData={SubCategoryListData} title={"SubCategorias"}/>,
                // handleReturn: handleReturnSubCategoryList
            },
        ]
    }

    async function submitForm(operation){
        //handleLoading()
        if(!form?.name) {
            toast.dark("Valor inválido!")
            return
        }

        handleLoading(true)

        if (operation === "delete"){
            try {
                const body = {
                    subCategoryId: SubCategoryData?.id,
                }
                const response = await api.DisableSubCategory({body, token: adminData?.token})

                if(response.status === 200){
                    toast.dark("Subcategoria Desativada com Sucesso")
                }
                handleLoading(false) 
                return

            } catch (error) {
                toast.dark("Ocorreu um erro, tente novamente mais tarde ou contate o desenvolvedor")
                console.log(error)
                handleLoading(false) 
                return
            }
        }
        try {
            const body = {
                categoryId: SubCategoryData?.id,
                name: form?.name
            }
            const response = await api.UpdateSubCategory({body, token: adminData?.token})

            if(response.status === 200){
                toast.dark("Atualização feita com sucesso")
            }
            handleLoading(false)
            return
            
        } catch (error) {
            toast.dark("Ocorreu um erro, tente novamente mais tarde ou contate o desenvolvedor")
            console.log(error)
            handleLoading(false) 
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