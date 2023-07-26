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
        GetAllProducts()
        GetAllCategories()
    },[])

    useEffect(() => {
        if(!products || !categoryName || !categories){
            return 
        }
        selectOption(categoryName)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[products, categories, categoryName])

    async function GetAllProducts(){
        try {
            const response = await api.GetAllProducts()
            setProducts(response.data)
            setFilterContent(response.data)
        } catch (error) {
            console.log(error)
        }     
    }

    async function GetAllCategories(){
        try {
            const response = await api.GetAllCategories()
            setCategories(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    function selectOption(categoryNameData){
        if(categoryNameData === selected){

            setFilterContent(products)
            setSelected(undefined)

        } else {

            const filterResult = products.filter(item => {
                return item.categories.some(categoria => {
                    return categoria.name.toLowerCase() === categoryNameData.toLowerCase();
                });
            });
            setFilterContent(filterResult)
            setSelected(categoryNameData)
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
