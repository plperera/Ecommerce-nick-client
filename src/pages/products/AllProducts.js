import styled from "styled-components"
import Filter from "../../components/products/Filter"
import Content from "../../components/products/Content"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/API";

export default function AllProducts () {
    const { categoryName } = useParams();
    const [filterContent, setFilterContent] = useState(undefined)
    const [products, setProducts] = useState(undefined)
    const [categories, setCategories] = useState(undefined)
    const [selected , setSelected] = useState(undefined)

    useEffect(() => {

        if (categoryName){
            setSelected(categoryName.toLowerCase())
        }

    }, [categoryName])

    async function GetAllProducts(){
        const response = await api.GetAllProducts()
        setProducts(response.data)
    }
    async function GetAllCategories(){
        const response = await api.GetAllCategories()
        setCategories(response.data)
    }

    useEffect(() => {
        GetAllProducts()
        GetAllCategories()
    },[])

    function selectOption(categoryName){
        if(categoryName === selected){

            setFilterContent(products)
            setSelected(undefined)

        } else {

            const filterResult = products.filter(item => {
                return item.categories.some(categoria => {
                    return categoria.name === categoryName;
                });
            });
            setFilterContent(filterResult)
            setSelected(categoryName)
        }  
    }

    return(
        <Container>
            <Filter categories={categories} selectOption={selectOption} selected={selected}/>
            <Content products={filterContent}/>
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
