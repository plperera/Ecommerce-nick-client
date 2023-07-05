import styled from "styled-components"
import TopicsMenu from "./TopicsMenu";
import ExpandSubMenuComponent from "./ExpandSubMenu";
import { useState } from "react";

export default function SubMenu () {

    const topics = [
        {title: "Equipamentos", subTitle: ["Máquinas Novas", "Máquinas Usadas", "Exaustão e Cabines de Pintura", "Coleiro PUR"]},
        {title: "Produtos", subTitle: ["Colas", "Ferramentas", "Graxas Especiais", "Líquidos", "Peças"]},
        {title: "Assistência Técnica", subTitle: ["Suporte Técnico", "Reforma de Coleiro"]},
    ]
    const [ expandMenu, setExpandMenu ] = useState(false)

    return(
        <Container>
            {
                topics.map( (e, i) => 
                    <TopicsMenu topic={e} expandMenu={expandMenu} setExpandMenu={setExpandMenu} key={i}/>
                )
            }
            { 
                expandMenu ? (<ExpandSubMenuComponent expandMenu={expandMenu} setExpandMenu={setExpandMenu} />):(<></>)
            }
            
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 25%;
    padding: 0 10vw;
    background-color: #19323D;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 2vw;
`