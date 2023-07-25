import styled from "styled-components"
import HomeBannerCard from "./HomeBannerCard"

export default function BannerSelector ({setBannerSelect, bannersData}) {
    return(
        <Container>
            {bannersData ? (
                bannersData.map((e,i) =><HomeBannerCard setBannerSelect={setBannerSelect} bannerData={e}/> )
            ):(<></>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    min-height: 10vh;
    row-gap: 3vh;
    background-color: #39525E3A;
    padding: 30px;
    border-radius: 5px;
    margin-top: calc(2vh + 7vh);
    cursor: pointer;
`