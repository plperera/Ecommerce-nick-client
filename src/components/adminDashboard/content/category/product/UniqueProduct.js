import { toast } from "react-toastify";
import { useCustomForm } from "../../../../../hooks/useCustomForms";
import ManagementComponent from "../common/ManagementComponent"
import ItemList from "../common/ItensList";
import ProductForms from "./ProductForms";
import ImageCard from "../image/ImageCard";
import api from "../../../../../services/API";

export default function UniqueProduct ({productData, adminData, handleRefresh, handleLoading}) {

    const [ form, handleForm ] = useCustomForm({
        name: productData?.name,
        isActive: productData?.isActive,
        description: productData?.description,
        price: productData?.price,
        highPrice: productData?.highPrice,
        stock: productData?.stock,
        tecnicDetails: productData?.tecnicDetails
    });

    const ImageCardData = {
        imageUrl: "https://storage.googleapis.com/imageuploads-7b8bc.appspot.com/1689369296686.png",
        name:"imagem tal",
        id: 1
    }

    const ImageListData = [
        {
            content: <ImageCard imageData={ImageCardData} setSelect={false} handleImageLink={handleImageLink} ImageBelong={true} productId={1}/>
        },
    ]

    const OtherImageListData = [
        {
            content: <ImageCard imageData={ImageCardData} setSelect={false} handleImageLink={handleImageLink} ImageBelong={false} productId={1}/>
        },
    ]

    const ProductManagementData = {
        title: productData?.name,
        isMainComponent: false,
        components: [
            {
                title: "Editar",
                content: <ProductForms form={form} handleForm={handleForm} submitForm={submitForm}/>
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
    }

    function handleImageLink({unlink, productId, imageId}){
        if(unlink){
            toast.dark("Voce Clicou para deslinkar!!!")
        } else {
            toast.dark("Voce Clicou para linkar!!!")
        }
    }
    async function submitForm(){
        if (
            !form?.name ||
            !form?.isActive ||
            !form?.description ||
            !form?.price ||
            !form?.highPrice ||
            !form?.stock ||
            !form?.tecnicDetails       
        ) {
            toast?.warn("Campo(s) inválido(s)")
        }
        try {
            const body = {
                id: productData?.productId,
                name: form?.name,
                description: form?.description,
                price: form?.price,
                highPrice: form?.highPrice,
                stock: form?.stock,
                tecnicDetails: productData?.tecnicDetails,
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
        <ManagementComponent ManagementData={ProductManagementData}/>
    )
}