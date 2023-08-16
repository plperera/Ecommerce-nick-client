import { useState } from "react"
import styled from "styled-components"

export default function VerticalMenu () {

    const [selected, setSelected] = useState(undefined)

    function handleSelect(element){
        if (element === selected) {
            setSelected(undefined)
            return
        }
        setSelected(element)
    }

    const topics = [
        {title: "Equipamentos", subTitle: ["Máquinas Usadas", "Exaustão e Cabines de Pintura", "Coleiro PUR"]},
        {title: "Máquinas", subTitle: ["Máquinas Novas", "Máquinas Usadas"]},
        {title: "Produtos", subTitle: ["Colas", "Ferramentas", "Graxas Especiais", "Líquidos", "Peças"]},
        {title: "Assistência Técnica", subTitle: ["Suporte Técnico", "Reforma de Coleiro"]},
        
    ]

    return(
        <Container>
            <SubContainer>
                <Title>{"Categorias"}</Title>
                {topics.map((e, i) => 
                    <>
                        <div onClick={() => handleSelect(e.title)} key={i}>
                            {e.title}
                        </div>

                        {selected === e.title ? (

                            e.subTitle.map((e, i) => 

                                <h3 key={i}>
                                    {e}
                                </h3>
                            )

                        ):(<></>)}
                    </>
                )}
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