import { useState } from "react"
import styled from "styled-components"
import api from "../../../services/API"
import { useEffect } from "react"

export default function VerticalMenu ({navigateAndMoveUp}) {

    const [selected, setSelected] = useState(undefined)
    const [categoriesData, setCategoriesData] = useState(false)

    function handleSelect(element){
        if (element === selected) {
            setSelected(undefined)
            return
        }
        setSelected(element)
    }

    async function GetAllCategories(){
        try {
            const result = await api.GetAllCategories()
            setCategoriesData(result?.data)
        } catch (error) {
            console.log(error)
        }
    }

    function handleNavigate(element){
        navigateAndMoveUp({locate: `catalogo/${encodeURIComponent(element?.subCategoryName)}`})
    }

    useEffect(() => {
        GetAllCategories()
    }, [])

    return(
        <Container>
            <SubContainer>
                <Title>{"Categorias"}</Title>
                {categoriesData ? categoriesData.map((e, i) =>
                    {
                        return e?.subCategories?.length > 0 
                        ? <>
                            <div onClick={() => handleSelect(e.categoryName)} key={i}>
                                {e.categoryName}
                            </div>

                            {selected === e.categoryName ? (

                                e.subCategories.map((e, i) => 

                                    <h3 key={i} onClick={() => handleNavigate(e)}>
                                        {e?.subCategoryName}
                                    </h3>
                                )

                            ):(<></>)}
                        </>
                        : <></>
                    } 
                ): <></>}
            </SubContainer>            
        </Container>
    )
}

const Container = styled.div`
    width: 20%;
    height: 100%;
    background-color: #e6e6e6ff;
    padding: 3vh 2vw;
    
    @media (max-width: 850px) {
        height: 53vh;
        display: none;
    }
`
const SubContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #19323d;
    border-radius: 15px;
    padding: 3vh 1vw;
    row-gap: 1.6vh;
    user-select: none;
    > div {
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
    > h3 {
        display: flex;
        align-items: center;
        width: calc(100% - 1vw);
        height: auto;
        font-size: 12px;
        padding: .6vh 1vw;
        background-color: #50575C;
        color: #FFFFFF;
        border-left: 6px solid #009395;
        margin-left: 1vw;
        cursor: pointer;
    }
    @media (max-width: 1366px) {  
        font-size: 10px;     
    }
`
const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    padding-bottom: 1vh;
    @media (max-width: 1366px) {  
        font-size: 16px;     
    }
`