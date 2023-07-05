import styled from "styled-components"
import BannerHome from "../../components/home/BannerHome"
import CategoriesHome from "../../components/home/CategoriesHome"
import HighlightsHome from "../../components/home/HighlightsHome"

export default function Home () {

    return(
        <Container>
            <BannerHome/>
            <CategoriesHome/>
            <HighlightsHome/>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 14vh;
    width: 100%;
    min-height: 73vh;
    background-color: #E6E6E6;
    padding: 0;
`
