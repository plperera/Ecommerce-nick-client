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
    justify-content: space-between;
    width: 100%;
    min-height: 10vh;
    background-color: #39525E3A;
    padding: 30px;
    border-radius: 5px;
`