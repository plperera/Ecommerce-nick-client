import styled from "styled-components"
import { AiOutlineSearch } from 'react-icons/ai';
import { useEffect, useState } from "react";
import api from "../../services/API";

export default function SearchBar ({navigateAndMoveUp}) {
    
    const [ products, setProducts ] = useState([])
    const [ filteredProducts, setFilteredProducts ] = useState([])
    const [ showProducts, setShowProducts ] = useState(false)
    const [ search, setSearch ] = useState('')

    async function getAllProducts() {
        try {

            const result = await api.GetAllProducts()
            setProducts(result.data)
            setFilteredProducts(result.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllProducts()
    },[])

    useEffect(() => {
        console.log(filteredProducts)
    },[filteredProducts])

    function handleResult({ target: { value }}){
        const result = products.filter(e => e.name.toLowerCase().includes(value.toLowerCase()))
        setFilteredProducts(result)
        setSearch(value)
    }

    return(
        <Container>
            <SearchInput onChange={handleResult} value={search} onFocus={() => setShowProducts(true)} onBlur={() => setTimeout(()=>{setShowProducts(false)},[150])}/>
            <SearchIcon onClick={() => console.log(search)}/>
            <ResultContainer display={showProducts ? ("flex"):("none")}>
                {filteredProducts.map( (e, i) => 
                    i <= 2 ? (
                        <FilteredProduct key={i} onClick={() => 
                            {
                                setShowProducts(false)
                                navigateAndMoveUp({locate: `produto/${e.name}`})
                            }
                        }>
                            <ImageContainer>
                                <img src={e.images[0]?.imageUrl} alt=""/>
                            </ImageContainer>
                            <NameContainer>
                                <h2>{e.name}</h2>
                            </NameContainer>
                        </FilteredProduct>

                    ):(<></>)
                )}
            </ResultContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 22vw;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;  
    @media (max-width: 1366px) {
        width: 24vw;
    }
`
const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    background-color: transparent;
    margin: 0;
    padding: 0;
    padding-right: 3.5vw;
    padding-left: 1vw;
    border: 0;
    vertical-align: baseline;
    outline: none;

    background-color: #28373F;
    border: none;
    border-radius: 15px;

    margin-left: -1.1vw; 
    font-size: 18px;
    color: #FFFFFF;
    &:focus {
        background-color: #28373F;
        border: none;
        border-radius: 15px 15px 0 0;
    }
    @media (max-width: 1366px) {
        font-size: 15px;
    }
`
const SearchIcon = styled(AiOutlineSearch)`
    font-size: 25px;
    color: #FFFFFF; 
    margin-left: -2.4vw;  
    cursor: pointer; 

    @media (max-width: 1366px) {
        font-size: 20px;
    }
`
const ResultContainer = styled.div`
    width: 22vw;
    min-height: 50px;
    padding: 1.2vh 1vw;
    position: absolute;
    z-index: 1;
    background-color: #28373F;
    border-radius: 0 0 15px 15px;
    top: 7.7vh;
    display: ${props => props.display};
    flex-direction: column;
    row-gap: 0.8vh;
`
const FilteredProduct = styled.div`
    width: 100%;
    height: 60px;
    background-color: #1F2B31;
    border-radius: 5px;
    padding: 0.8vh 0.5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`
const ImageContainer = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        border-radius: 5px;
        max-width: 100%;
        max-height: 100%;
    }
`
const NameContainer = styled.div`
    width: 75%;
    height: 100%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    color: #FFFFFF;
    font-size: 13px;

`