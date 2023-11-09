import { toast } from "react-toastify";
import { useCustomForm } from "../../../../../hooks/useCustomForms";
import ManagementComponent from "../common/ManagementComponent"
import ItemList from "../common/ItensList";
import ProductForms from "./ProductForms";
import ImageCard from "../image/ImageCard";
import api from "../../../../../services/API";
import { useEffect } from "react";
import { useState } from "react";

export default function UniqueProduct ({productData, adminData, handleRefresh, handleLoading}) {

    const [ productManagementData, setProductManagementData] = useState(undefined)
    const [ imagesData, setImagesData ] = useState(undefined)
    const [ form, handleForm, setForm ] = useCustomForm({
        name: productData?.name,
        description: productData?.description,
        isActive: productData?.isActive,
        price: productData?.price,
        highPrice: productData?.highPrice,
        stock: productData?.stock,
        tecnicDetails: productData?.tecnicDetails
    });
    console.log("productData", productData)
    useEffect(() => {
        getAllImagesData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productData, handleRefresh])

    async function getAllImagesData(){
        try {
            const response = await api.GetAllImages({token: adminData?.token})
            setImagesData(response?.data)
            console.log(response?.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const ImageListData = imagesData
        ?.filter((e) => e?.productImage?.some(e => e.productId === productData?.productId))
        .map((e) => ({
            content: (
                <ImageCard
                    imageData={e} 
                    setSelect={false}
                    ImageBelong={true} 
                    handleImageLink={handleImageLink}
                    productId={productData?.productId} 
                    hasOtherSubCategory={e?.subCategories?.length > 0} 
                />
            ),
        }));

        const OtherImageListData = imagesData
        ?.filter((e) => !e?.productImage?.some(e => e.productId === productData?.productId))
        .map((e) => ({
            content: (
                <ImageCard
                    imageData={e} 
                    setSelect={false}
                    ImageBelong={false} 
                    handleImageLink={handleImageLink}
                    productId={productData?.productId} 
                    hasOtherSubCategory={e?.productImage?.length > 0} 
                />
            ),
        }));
        setProductManagementData({
            title: productData?.name,
            isMainComponent: false,
            components: [
                {
                    title: "Editar",
                    content: <ProductForms form={form} handleForm={handleForm} submitForm={submitForm} setForm={setForm}/>
                },
                {
                    title: "Lista de Imagens Atreladas",
                    content: <ItemList ListData={ImageListData} title={"Imagens"}/>,
                },
                {
                    title: "Atrelar outra Imagem ao Produto",
                    content: <ItemList ListData={OtherImageListData} title={"Imagens"}/>,
                },
            ]
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [form, productData, imagesData, handleRefresh])

    async function handleImageLink({productId, imageId}){
        try {

            if( !(productId > 0) || !(imageId > 0)){
                return
            }

            const response = await api.HandleImageProductLink({body: {productId, imageId}, token: adminData?.token})

            handleRefresh()
            console.log(response, response.status)

        } catch (error) {
            console.log(error)
        }
    }
    async function submitForm(){
        
        try {
            const body = {
                id: productData?.productId,
                name: form?.name,
                description: form?.description,
                price: Number(form?.price),
                highPrice: Number(form?.highPrice),
                stock: Number(form?.stock),
                tecnicDetails: form?.tecnicDetails,
                subCategories: productData?.subCategories?.map(e => {
                    return {
                        subCategoryId: e?.subCategoryId
                    }
                }),
                images: productData?.images?.map(e => {
                    return {
                        imageId: e?.id,
                        mainImage: false
                    }
                }),
            }
            console.log("body", body)
            const response = await api.UpdateProduct({body, token: adminData?.token})
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
        <ManagementComponent ManagementData={productManagementData}/>
    )
}