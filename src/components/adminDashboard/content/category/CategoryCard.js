import styled from "styled-components"

export default function CategoryCard ({categoryData, setSelect}) {
    function handleClick(){
        setSelect(categoryData)
    }
    return(
        <Container onClick={handleClick}>
            <UpperContainer countBackground={categoryData?.subCategories?.length > 0 ? '#434FB3':'#B9B9B9'}>
                <p>{categoryData?.categoryName}</p>
                <p>{categoryData?.subCategories?.length}</p>
            </UpperContainer>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    width: 250px;
    background-color: #E6E6E6;
    border-radius: 10px;
    padding: 1vh 0;
    cursor: pointer;
    user-select: none;
`
const UpperContainer = styled.div`
    padding: 0vh 1vw;
    font-size: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    > :last-child {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 25px;
        max-width: 32px;
        position: absolute;
        right: 1vw;
        top: 9px;
        padding: 5px 8px;
        border-radius: 5px;
        background-color: ${props => props.countBackground};
        color: white;
        font-size: 12px;
    }
`
