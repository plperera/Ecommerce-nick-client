import styled from "styled-components"
import NavigationItem from "./NavigationItem";

import NewCategory from "./content/category/NewCategory";
import NewImage from "./content/image/NewCategory";
import NewProduct from "./content/products/NewProduct/NewProduct";
import PutProduct from "./content/products/PutProduct/PutProduct";
import CreateBannerHome from "./content/homePage/bannerHome/create/CreateBannerHome";
import UpdateBannerHome from "./content/homePage/bannerHome/edit/UpdateBannerHome";
import CreateCategoryHome from "./content/homePage/categoryHome/create/CreateCategoryHome";
import UpdateCategoryHome from "./content/homePage/categoryHome/edit/UpdateCategoryHome";
import CreateShippingMethods from "./content/shippingMethods/create/CreateShippingMethods";
import PutShipping from "./content/shippingMethods/update/PutShipping";

export default function NavigationBar ({setContent}) {
    const options = [
        {
            name:"Produtos",
            options: [
                {
                    name:"Inserir Novo Produto",
                    content: <NewProduct/>
                },
                {
                    name:"Editar um Produto",
                    content: <PutProduct/>
                }
            ]
        },
        {
            name:"Métodos de Entrega",
            options: [
                {
                    name:"Novo Método",
                    content: <CreateShippingMethods/>
                },
                {
                    name:"Editar um Método",
                    content: <PutShipping/>
                }
            ]
        },
        {
            name:"Home",
            options: [
                {
                    name:"Banners - Novo",
                    content: <CreateBannerHome/>
                },
                {
                    name:"Banners - Editar",
                    content: <UpdateBannerHome/>
                },
                {
                    name:"Categorias - Nova",
                    content: <CreateCategoryHome/>
                },
                {
                    name:"Categorias - Editar",
                    content: <UpdateCategoryHome/>
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
        <Container>
            {
                options.map(e => <NavigationItem name={e.name} options={e.options} setContent={setContent}/>)
            }           
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 20%;
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
