import { useParams } from "react-router-dom";
import styled from "styled-components"
import UniqueProductComponent from "../../components/uniqueProduct/UniqueProduct"
import OtherProductsComponent from "../../components/uniqueProduct/OtherProducts";

export default function UniqueProduct () {

    const { productName } = useParams();

    const imageArray = [
        {imageURL:"https://firebasestorage.googleapis.com/v0/b/imageuploads-7b8bc.appspot.com/o/maquina-teste.png?alt=media&token=ff8dd575-503d-4ca2-a4d9-9a3b3a08fa96"},
        {imageURL:"https://firebasestorage.googleapis.com/v0/b/imageuploads-7b8bc.appspot.com/o/maquina-teste-2.png?alt=media&token=349fc16f-9509-4a65-8019-bed809d93c7b"},
    ]

    const product = {
        name: productName,
        mainCategory:"Prensa Hidraulica",
        price: 2000000,
        highPrice: 3000000,
        imageArray: imageArray
    }

    return(
        <Container>
            <UniqueProductComponent product={product}/>
            <OtherProductsComponent/>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 14vh;
    width: 100%;
    min-height: 73vh;
    background-color: #0A1F2A;
    padding: 3vw 10vw;
`