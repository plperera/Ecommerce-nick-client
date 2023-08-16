import styled from "styled-components"
import useNavigateAndMoveUp from "../../../hooks/useNavigateAndMoveUp"
import VerticalMenu from "./VerticalMenu"
import Card from "./Card"
import BannerSlide from "./BannerSlide"

export default function BannerHome () {

    
    const navigateAndMoveUp = useNavigateAndMoveUp();

    return(
        <Container>

            <VerticalMenu/>

            <BannerSlide navigateAndMoveUp={navigateAndMoveUp}/>

            <Card navigateAndMoveUp={navigateAndMoveUp}/>
            
            
        </Container>
    )
}

const Container = styled.div`
    margin-top: 12vh;
    width: 100%;
    height: 58vh;
    display: flex;

    @media (max-width: 850px) {
        height: 53vh;
    }
`