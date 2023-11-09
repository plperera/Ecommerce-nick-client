import styled from "styled-components"
import { useEffect, useState } from "react";
import { IoMdCloseCircle } from 'react-icons/io';
import api from "../../services/API";

export default function Filter ({categories, selected, selectOption}) {

    const [categoriesData, setCategoriesData] = useState(false)
    const [menuSelected, setMenuSelected] = useState(undefined)

    function handleMenuSelect(element){
        if (element === menuSelected) {
            setMenuSelected(undefined)
            return
        }
        setMenuSelected(element)
    }

    function handleClick(element){
        if (element === selected) {
            selectOption(undefined)
            return
        }
        selectOption(element)
    }

    async function GetAllCategories(){
        try {
            const result = await api.GetAllCategories()
            setCategoriesData(result?.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        GetAllCategories()
    }, [])

    return(
        <Container>
            {
                selected
                ? <Title>
                    {selected}
                    <ClearFilterContainer onClick={() => selectOption(selected)}>{"X"}</ClearFilterContainer>
                </Title>
                : <>
                    <Title>{"Todos os Produtos"}</Title>
                    <OptionsContainer>
                        {categoriesData ? categoriesData.map((e, i) => {
                            return e?.subCategories?.length > 0 
                            ? <>
                                <CategoryCard onClick={() => handleMenuSelect(e.categoryName)} key={i}>
                                    <h3>{e.categoryName}</h3>
                                    {menuSelected === e.categoryName ? (

                                        e.subCategories.map((e, i) => 

                                            <SubCategoryCard key={i} onClick={() => handleClick(e?.subCategoryName)}>
                                                {e?.subCategoryName}
                                            </SubCategoryCard>
                                        )

                                    ):(<></>)}
                                </CategoryCard>
                            </>
                            : <></>
                        }
                        ): <></>}
                    </OptionsContainer>
                </>
            }
            
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding-bottom: 3vh;
    display: flex;
    flex-direction: column;
    row-gap: 2vh;
    //height: 30vh; //era 30vh
    //border: 1px solid red;
`
const Title = styled.div`
    font-size: 28px;
    font-weight: 600;
    display: flex; 
    align-items: center;
    justify-content: left;
    color: #2C2C2C;
    @media (max-width: 1366px) {
        font-size: 21px;
    }
    @media (max-width: 850px) {
        font-size: 25px;
        padding-top: 2vh;
    }
`
const OptionsContainer = styled.div`
    width: 100%;
    display: flex;
    column-gap: 1vw;
`
const CategoryCard = styled.div`
    width: auto;
    user-select: none;
    > :first-child {
        display: flex;
        align-items: center;
        width: 100%;
        height: 35px;
        padding: 1.5vh 1vw;
        background-color: #79838b;
        color: #FFFFFF;
        font-weight: 700;
        border-left: 6px solid #009395;
        cursor: pointer;
    }
`
const SubCategoryCard = styled.h3`
    display: flex;
    align-items: center;
    width: calc(100% - 1vw);
    height: auto;
    font-size: 12px;
    padding: .6vh 1vw;
    background-color: #50575C;
    color: #FFFFFF;
    border-left: 6px solid #009395;
    /* margin-left: 1vw; */
    cursor: pointer;
    :hover {
        background-color: #50575CD8;
    }
`
const ClearFilterContainer = styled(IoMdCloseCircle)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 24px;
    color: #111111E7;
    border: 2px solid #05050525;
    border-radius: 50px;
    margin-left: 0.5vw;
    cursor: pointer; 
`
