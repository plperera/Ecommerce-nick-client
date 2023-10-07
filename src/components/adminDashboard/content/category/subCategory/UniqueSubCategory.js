import { toast } from "react-toastify";
import { useCustomForm } from "../../../../../hooks/useCustomForms";
import ManagementComponent from "../common/ManagementComponent"
import SubCategoryForms from "./SubCategoryForms"
import { useState } from "react";
import ItemList from "../common/ItensList";
import ProductCard from "../product/ProductCard";
import UniqueProduct from "../product/UniqueProduct";
import api from "../../../../../services/API";

export default function UniqueSubCategory ({SubCategoryData, handleLoading, adminData}) {

    const [ form, handleForm ] = useCustomForm({name: SubCategoryData?.name});
    const [selectProduct, setSelectProduct] = useState(undefined)
    const [selectOtherProduct, setSelectOtherProduct] = useState(undefined)

    const ProductCardData = {
        name: "ESQUADREJADEIRA 2900MM COM EIXO INCLINAVEL 45° SEM MOTOR - FORTG BY MAKSIWA- 106[1464]",
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
                setSelect={setSelectOtherProduct}
                productBelong={false} 
                hasOtherSubCategory={Math.random() >= 0.5} 
                handleLinkProduct={() => {}}
                subcategoryId={SubCategoryData?.id}
            />
        },
    ]

    const CategoryManagementData = {
        title:SubCategoryData?.name,
        isMainComponent: false,
        components: [
            {
                title: "Editar",
                content: <SubCategoryForms form={form} handleForm={handleForm} submitForm={submitForm} deleteButton={true}/>
            },
            {
                title: "Lista de Produtos Atrelados",
                showReturnButton: !!selectProduct,
                handleReturn: handleReturnProductList,
                content: <ItemList 
                    ListData={ProductListData} 
                    title={"Produtos"}
                    selectItem={selectProduct}
                    contentWhenSelected={
                        <UniqueProduct 
                            productData={selectProduct}
                            handleLoading={handleLoading}
                        /> 
                    }
                />, 
            },
            {
                title: "Atrelar outros Produtos",
                showReturnButton: !!selectOtherProduct,
                handleReturn: handleReturnOtherProductList,
                content: <ItemList 
                    ListData={OtherProductListData} 
                    title={"Produtos"}
                    selectItem={selectOtherProduct}
                    contentWhenSelected={
                        <UniqueProduct 
                            handleLoading={handleLoading}
                            productData={selectProduct}
                        /> 
                    }
                />,
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

    function handleReturnProductList(){
        if(!setSelectProduct){
            return
        }
        setSelectProduct(undefined)
    }

    function handleReturnOtherProductList(){
        if(!setSelectOtherProduct){
            return
        }
        setSelectOtherProduct(undefined)
    }
    
    return(
        <ManagementComponent ManagementData={CategoryManagementData}/>
    )
}