import styled from "styled-components"

export default function ProductCard ({productData, setSelect}) {
    function handleClick(){
        setSelect(productData)
    }
    return(
        <Container onClick={handleClick}>{`${productData?.name}`}</Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 60px;
    background-color: #DFDFDF;
    border-radius: 10px;
    font-size: 15px;
`