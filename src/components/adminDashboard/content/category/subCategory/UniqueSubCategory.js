import { toast } from "react-toastify";
import { useCustomForm } from "../../../../../hooks/useCustomForms";
import ManagementComponent from "../common/ManagementComponent"
import SubCategoryForms from "./SubCategoryForms"
import { useEffect, useState } from "react";
import ItemList from "../common/ItensList";
import ProductCard from "../product/ProductCard";
import UniqueProduct from "../product/UniqueProduct";
import api from "../../../../../services/API";

export default function UniqueSubCategory ({SubCategoryData, handleLoading, handleRefresh, refresh, adminData }) {
    const [ form, handleForm ] = useCustomForm({subCategoryName: SubCategoryData?.subCategoryName});
    const [selectProduct, setSelectProduct] = useState(undefined)
    const [selectOtherProduct, setSelectOtherProduct] = useState(undefined)
    const [categoryManagementData, setCategoryManagementData] = useState(undefined)
    const [productsData, setProductsData] = useState(undefined)
    //const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        getAllProductsData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [SubCategoryData, refresh])

    useEffect(() => {
        const ProductListData = productsData
            ?.filter((e) => e?.subCategories?.some(e => e.subCategoryId === SubCategoryData?.subCategoryId))
            .map((e) => ({
                content: (
                    <ProductCard
                        productData={e} 
                        setSelect={setSelectProduct}
                        productBelong={true} 
                        handleLinkProduct={handleLinkProductSubCategory}
                        subcategoryId={SubCategoryData?.subCategoryId}   
                    />
                ),
            }));

        const OtherProductListData = productsData
        ?.filter((e) => !e?.subCategories?.some(e => e.subCategoryId === SubCategoryData?.subCategoryId))
        .map((e) => ({
            content: (
                <ProductCard
                    productData={e} 
                    setSelect={setSelectOtherProduct}
                    productBelong={false} 
                    handleLinkProduct={handleLinkProductSubCategory}
                    subcategoryId={SubCategoryData?.subCategoryId} 
                    hasOtherSubCategory={e?.subCategories?.length > 0} 
                />
            ),
        }));

        setCategoryManagementData({
            title:SubCategoryData?.subCategoryName,
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
                                adminData={adminData}
                                handleRefresh={handleRefresh}
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
                                adminData={adminData}
                                handleRefresh={handleRefresh}
                            /> 
                        }
                    />,
                },
            ]
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [SubCategoryData, productsData, selectOtherProduct, selectProduct, form, refresh])

    async function getAllProductsData(){
        try {
            const response = await api.GetAllProductsWithAllData(adminData?.token)
            setProductsData(response?.data)
            console.log(response?.data)
        } catch (error) {
            console.log(error)
        }
    }
    async function submitForm(operation){
        if(!form?.subCategoryName) {
            toast.dark("Valor inválido!")
            return
        }

        handleLoading(true)

        try {
            const body = {
                subCategoryId: SubCategoryData?.subCategoryId,
                subCategoryName: form?.subCategoryName
            }

            if (operation === "delete"){
                delete body?.subCategoryName

                const response = await api.DisableSubCategory({body, token: adminData?.token})
                if(response.status === 200){
                    toast.dark("Subcategoria Desativada com Sucesso")
                }

            } else {
                const response = await api.UpdateSubCategory({body, token: adminData?.token})
                if(response.status === 200){
                    toast.dark("Atualização feita com sucesso")
                }
            }   
            handleRefresh()         
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
    // function handleRefresh(){
    //     setRefresh(!refresh)
    // }
    async function handleLinkProductSubCategory(productId){
        try {
            const body = {
                productId,
                subCategoryId: SubCategoryData?.subCategoryId
            }
            const response = await api.HandleProductLink({body, token: adminData?.token})
            console.log(response)
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
        <ManagementComponent ManagementData={categoryManagementData}/>
    )
}