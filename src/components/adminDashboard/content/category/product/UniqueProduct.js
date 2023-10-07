import { toast } from "react-toastify";
import { useCustomForm } from "../../../../../hooks/useCustomForms";
import ManagementComponent from "../common/ManagementComponent"
import { useState } from "react";
import ItemList from "../common/ItensList";
import ProductForms from "./ProductForms";
import ImageCard from "../image/ImageCard";

export default function UniqueProduct ({productData}) {

    const [ form, handleForm ] = useCustomForm({name: productData?.productName});

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
        title:"Gerir Produto",
        isMainComponent: false,
        components: [
            {
                title: "Editar",
                content: <ProductForms/>
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
    
    return(
        <ManagementComponent ManagementData={ProductManagementData}/>
    )
}