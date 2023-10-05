import styled from "styled-components"

export default function CategoryCard ({categoryData, setSelect}) {
    function handleClick(){
        setSelect(categoryData)
    }
    return(
        <Container onClick={handleClick}>{`${categoryData?.name} (${categoryData?.subCategories?.length})`}</Container>
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