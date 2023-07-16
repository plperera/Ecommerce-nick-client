import styled from "styled-components"
import UserNavigationItem from "./UserNavigationItem";
import Orders from "./content/orders/Orders";
import Favorites from "./content/favorites/Favorites";
import UserData from "./content/userData/UserData";
import UserAddress from "./content/userAddress/UserAddress";

export default function UserNavigationBar ({setContent, content, userData}) {



    const options = [
        {
            name:"Últimos Pedidos",
            ref: <Orders/>
        },
        {
            name:"Favoritos",
            ref: <Favorites/>
        },
        {
            name:"Meus Dados",
            ref: <UserData/>
        },
        {
            name:"Meus Endereços",
            ref: <UserAddress/>
        },
    ]

    return(
        <Container>
            <Title>{`Olá, ${userData.name}!`}</Title>
            {
                options.map(e => <UserNavigationItem option={e} setContent={setContent} content={content}/>)
            }           
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    align-items: start;
    align-content: start;
    row-gap: 2vh;
    padding: 25px 0vw 25px 0.4vw;
    background-color: #FFFFFF;    
    border-radius: 15px;
`
const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8vh 1.3vw 1.8vh 1.3vw;
    width: 300px;
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
    color: #02131B;
    font-size: 18px;
    font-weight: 500;
`
