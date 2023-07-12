import styled from "styled-components"
import NavigationItem from "./NavigationItem";
import NewProduct from "./content/products/NewProduct";
import NewCategory from "./content/category/NewCategory";
import NewImage from "./content/image/NewCategory";

export default function NavigationBar ({expandNavigationBar, setContent}) {
    const options = [
        {
            name:"Produtos",
            options: [
                {
                    name:"Inserir Novo Produto",
                    content: <NewProduct/>
                }
            ]
        },
        {
            name:"Categorias",
            options: [
                {
                    name:"Inserir Nova Categoria",
                    content: <NewCategory/>
                }
            ]
        },
        {
            name:"Imagens",
            options: [
                {
                    name:"Inserir Nova Imagem",
                    content: <NewImage/>
                }
            ]
        },
        {
            name:"Outros",
            options: [
                {
                    name:"Voltar ao dashboard inicial",
                    content: false
                }
            ]
        },
    ]

    return(
        <Container style={{ width: expandNavigationBar ? "7%" : "20%" }}>
            {
                options.map(e => <NavigationItem name={e.name} options={e.options} setContent={setContent}/>)
            }           
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    //border-right: 2px solid #D1D1D1;
    display: grid;
    grid-template-columns: 1fr;
    align-items: start;
    align-content: start;
    row-gap: 2vh;
    padding: 25px 1.4vw;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 7px;
        background-color: #1D1D1D2F;
        border-radius: 50px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #00575A;
        border-radius: 50px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #01989D;
        cursor: pointer;
    }
    
`
