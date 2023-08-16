import { useEffect, useState } from "react"
import styled from "styled-components"
import ProductCardForIdSelector from "./ProductCardForIdSelector";

export default function ProductIdSelector ({filter, refresh, products, setForm, form, limitSelect, initSelect}) {

    const [productSelected, setProductSelected] = useState(initSelect || [])
    const [filteredProducts, setFilteredProducts] = useState(undefined);
    

    useEffect(() => {
        console.log(productSelected)
    },[productSelected])

    function selectProduct({productId}){

        if (limitSelect) {

            const totalSelected = Object.values(productSelected).filter(Boolean).length;
            if(totalSelected >= limitSelect && !productSelected[`product${productId}`]) {
                setProductSelected({[`product${productId}`]: productId})
                return;
            }

        }
        if( !productSelected[`product${productId}`] ){
            setProductSelected({...productSelected, [`product${productId}`]: productId})
        } else {
            setProductSelected({...productSelected, [`product${productId}`]: undefined})
        }
    }

    function filterProducts(){

        if (!filter){
            return setFilteredProducts(products)
        }
        const filterResponse = products.filter( e => e?.name?.toLowerCase().includes(filter.toLowerCase()))
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

    useEffect(() => {

        const bodyFormat = Object.entries(productSelected).reduce((acc, [key, value]) => {
            if(value !== undefined) {
              acc.push({productId: value});
            }
            return acc;
        }, []);

        setForm({...form, "products": bodyFormat})

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productSelected])

    
 
    return(
        <Container>
            {filteredProducts ? (
                filteredProducts.map( e => 

                    <ProductCardForIdSelector
                        productData={e}
                        selectedProduct={productSelected}
                        filteredProducts={filteredProducts}
                        selectProduct={selectProduct}
                    />
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