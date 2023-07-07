import styled from "styled-components"
import Filter from "../../components/products/Filter"
import Content from "../../components/products/Content"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AllProducts () {

    const { categoryName } = useParams();

    const [selected , setSelected] = useState(undefined)

    useEffect(() => {

        if (categoryName){
            setSelected(categoryName.toLowerCase())
        }

    }, [categoryName])

    const imageUrl = "https://firebasestorage.googleapis.com/v0/b/imageuploads-7b8bc.appspot.com/o/maquina-teste.png?alt=media&token=ff8dd575-503d-4ca2-a4d9-9a3b3a08fa96"

    const products = [
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
    const categories = [
        {name:"Categoria 1"},
        {name:"Categoria 2"},
        {name:"Categoria 3"},
        {name:"Categoria 4"},
        {name:"Categoria 5"},
        {name:"Categoria 6"},
        {name:"Categoria 7"},
        {name:"Categoria 8"},
    ]

    return(
        <Container>
            <Filter categories={categories} selected={selected} setSelected={setSelected}/>
            <Content products={products}/>
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
