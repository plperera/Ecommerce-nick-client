import { useParams } from "react-router-dom";
import styled from "styled-components"
import UniqueProductComponent from "../../components/uniqueProduct/UniqueProduct"
import ProductDescriptionComponent from "../../components/uniqueProduct/ProductDescription";
import MoreProductsComponent from "../../components/uniqueProduct/MoreProducts";

export default function UniqueProduct () {

    const { productName } = useParams();

    const imageArray = [
        {imageURL:"https://firebasestorage.googleapis.com/v0/b/imageuploads-7b8bc.appspot.com/o/maquina-teste.png?alt=media&token=ff8dd575-503d-4ca2-a4d9-9a3b3a08fa96"},
        {imageURL:"https://firebasestorage.googleapis.com/v0/b/imageuploads-7b8bc.appspot.com/o/maquina-teste-2.png?alt=media&token=349fc16f-9509-4a65-8019-bed809d93c7b"},
    ]
    const tecnicDetails = [
        {topic: "Dimensão máxima peça trabalhável X-Y-Z", topicDetail: ">3000 x 900 x 50 mm"},
        {topic: "Dimensão mínima peça trabalhável X-Y", topicDetail: "150 x 70 x 10 mm"},
        {topic: "Velocidade máxima eixos X-Y", topicDetail: "40 m/min"},
        {topic: "Cabeçote furação 12 mandris vert. e 6 horiz., Serra em X", topicDetail: ""}
    ]
    const product = {
        name: productName,
        mainCategory:"Prensa Hidraulica",
        price: 2000000,
        highPrice: 3000000,
        imageArray: imageArray,
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        tecnicDetails: tecnicDetails
    }
    const imageUrl = "https://firebasestorage.googleapis.com/v0/b/imageuploads-7b8bc.appspot.com/o/maquina-teste.png?alt=media&token=ff8dd575-503d-4ca2-a4d9-9a3b3a08fa96"
    const moreProducts = [
        { name: "Serra Circular Esquadrejadeira 2.900mm 3 CV Monofásico com Eixo Inclinável - MAKSIWA-ESQ.2900.I-M", description:"Descricao 2", price:"2000000", highPrice:"3300000", image:[{mainImage: true, imageUrl: imageUrl}]},
        { name: "Serra Circular Esquadrejadeira 2.900mm 3 CV Monofásico com Eixo Inclinável - MAKSIWA-ESQ.2900.I-M", description:"Descricao 2", price:"2000000", highPrice:"3300000", image:[{mainImage: true, imageUrl: imageUrl}]},
        { name: "Serra Circular Esquadrejadeira 2.900mm 3 CV Monofásico com Eixo Inclinável - MAKSIWA-ESQ.2900.I-M", description:"Descricao 2", price:"2000000", highPrice:"3300000", image:[{mainImage: true, imageUrl: imageUrl}]},
        { name: "Serra Circular Esquadrejadeira 2.900mm 3 CV Monofásico com Eixo Inclinável - MAKSIWA-ESQ.2900.I-M", description:"Descricao 2", price:"2000000", highPrice:"3300000", image:[{mainImage: true, imageUrl: imageUrl}]},
        { name: "Serra Circular Esquadrejadeira 2.900mm 3 CV Monofásico com Eixo Inclinável - MAKSIWA-ESQ.2900.I-M", description:"Descricao 2", price:"2000000", highPrice:"3300000", image:[{mainImage: true, imageUrl: imageUrl}]},
        { name: "Serra Circular Esquadrejadeira 2.900mm 3 CV Monofásico com Eixo Inclinável - MAKSIWA-ESQ.2900.I-M", description:"Descricao 2", price:"2000000", highPrice:"3300000", image:[{mainImage: true, imageUrl: imageUrl}]},
        { name: "Serra Circular Esquadrejadeira 2.900mm 3 CV Monofásico com Eixo Inclinável - MAKSIWA-ESQ.2900.I-M", description:"Descricao 2", price:"2000000", highPrice:"3300000", image:[{mainImage: true, imageUrl: imageUrl}]},
        { name: "Serra Circular Esquadrejadeira 2.900mm 3 CV Monofásico com Eixo Inclinável - MAKSIWA-ESQ.2900.I-M", description:"Descricao 2", price:"2000000", highPrice:"3300000", image:[{mainImage: true, imageUrl: imageUrl}]},
        { name: "Serra Circular Esquadrejadeira 2.900mm 3 CV Monofásico com Eixo Inclinável - MAKSIWA-ESQ.2900.I-M", description:"Descricao 2", price:"2000000", highPrice:"3300000", image:[{mainImage: true, imageUrl: imageUrl}]},
        { name: "Serra Circular Esquadrejadeira 2.900mm 3 CV Monofásico com Eixo Inclinável - MAKSIWA-ESQ.2900.I-M", description:"Descricao 2", price:"2000000", highPrice:"3300000", image:[{mainImage: true, imageUrl: imageUrl}]},
        { name: "Serra Circular Esquadrejadeira 2.900mm 3 CV Monofásico com Eixo Inclinável - MAKSIWA-ESQ.2900.I-M", description:"Descricao 2", price:"2000000", highPrice:"3300000", image:[{mainImage: true, imageUrl: imageUrl}]},
        { name: "Serra Circular Esquadrejadeira 2.900mm 3 CV Monofásico com Eixo Inclinável - MAKSIWA-ESQ.2900.I-M", description:"Descricao 2", price:"2000000", highPrice:"3300000", image:[{mainImage: true, imageUrl: imageUrl}]},
    ]

    return(
        <Container>
            <UniqueProductComponent product={product}/>
            <ProductDescriptionComponent product={product}/>
            <MoreProductsComponent productsData={moreProducts}/>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 14vh;
    width: 100%;
    min-height: 73vh;
    background-color: #0A1F2A;
    padding-top: 3vh;
`