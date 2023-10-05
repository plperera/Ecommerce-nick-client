import styled from "styled-components"

export default function SubCategoryCard ({subCategoryData, setSelect}) {
    function handleClick(){
        setSelect(subCategoryData)
    }
    return(
        <Container onClick={handleClick}>{`${subCategoryData?.name} (${subCategoryData?.products?.length})`}</Container>
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