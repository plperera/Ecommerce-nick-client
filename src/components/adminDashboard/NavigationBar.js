import styled from "styled-components"
import NavigationItem from "./NavigationItem";

import NewImage from "./content/image/NewCategory";
import NewProduct from "./content/products/NewProduct/NewProduct";
import PutProduct from "./content/products/PutProduct/PutProduct";
import CreateBannerHome from "./content/homePage/bannerHome/create/CreateBannerHome";
import UpdateBannerHome from "./content/homePage/bannerHome/edit/UpdateBannerHome";
import CreateCategoryHome from "./content/homePage/categoryHome/create/CreateCategoryHome";
import CreateShippingMethods from "./content/shippingMethods/create/CreateShippingMethods";
import PutShipping from "./content/shippingMethods/update/PutShipping";
import UpdateOrders from "./content/order/update/UpdateOrders";
import CreateProductCardHome from "./content/homePage/productBannerHome/create/CreateProductCard";
import UpdateProductCard from "./content/homePage/productBannerHome/edit/UpdateProductCard";
import ManagementCategory from "./content/category/ManagementCategory";
import UpdateCategoryCardHome from "./content/homePage/categoryHome/edit/UpdateCategoryCardHome";

export default function NavigationBar ({setContent}) {
    const options = [
        {
            name:"Pedidos",
            options: [
                {
                    name:"Gerenciar",
                    content: <UpdateOrders/>
                },

            ]
        },
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
            name:"Banner",
            options: [
                {
                    name:"Novo",
                    content: <CreateBannerHome/>
                },
                {
                    name:"Editar",
                    content: <UpdateBannerHome/>
                },
            ]
        },
        {
            name:"Card Categorias",
            options: [
                {
                    name:"Novo",
                    content: <CreateCategoryHome/>
                },
                {
                    name:"Editar",
                    content: <UpdateCategoryCardHome/>
                }
            ]
        },
        {
            name:"Card Produto",
            options: [
                {
                    name:"Novo",
                    content: <CreateProductCardHome/>
                },
                {
                    name:"Editar",
                    content: <UpdateProductCard/>
                }
            ]
        },
        {
            name:"Categorias",
            options: [
                {
                    name:"Inserir Nova Categoria",
                    content: <ManagementCategory/>
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

    @media (max-width: 850px) {
        width: 100%;
        flex-direction: row;
        height: auto;
        display: flex;
        align-items: center;
        background-color: #FFFFFF;
        padding: 10px 2vw;
        column-gap: 5vw;
        overflow-y: hidden;
        overflow-x: scroll;
        border-radius: 15px;

        &::-webkit-scrollbar {
            height: 0px;
        }
    } 
`
