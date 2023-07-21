import { useEffect, useState } from "react"
import styled from "styled-components"
import ProductCard from "./ProductCard"

export default function ProductSelector ({setSelectedProduct, filter, products, refresh}) {

    const [filteredProducts, setFilteredProducts] = useState([])

    function filterProducts(){

        if (!filter){
            return setFilteredProducts(products)
        }
        
        const filterResponse = products.filter(e => e.name.toLowerCase().includes(filter.toLowerCase()))
        setFilteredProducts(filterResponse)
        return
    }

    useEffect(() => {
        
        filterProducts()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh])

    useEffect(() => {
        
        setFilteredProducts(products)

    }, [products])

    return(
        <Container>
            {filteredProducts ? (
                filteredProducts.map( e => 

                    <ProductCard key={e.id} productData={e} setSelectedProduct={setSelectedProduct}/>
                
                )
            ):(<h3>carregando...</h3>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
    color: #171717;
    width: 100%;
    min-height: 10vh;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    background-color: #39525E3A;
    border-radius: 5px;
    gap: 15px;
    h3 {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
    }
`
