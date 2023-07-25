import styled from "styled-components"

export default function HomeBannerCard ({ bannerData, setBannerSelect }) {
    return(
        <Container onClick={() => setBannerSelect(bannerData)}>
            <ImageContainer>
                <img src={bannerData?.imageUrl} alt=""/>
            </ImageContainer>
            <Title>{bannerData?.text}</Title>
        </Container>
    )
}

const Container = styled.div`
    flex-shrink: 0;
    width: 30vw;
    height: 23vh;
    color: #000000;
    background-color: #02131bff;
    box-shadow: 0px 4px 8px #00000068;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 1.2vh 0.8vw;
    position: relative;
    @media (max-width: 1366px) {
        padding: 1vh 1vw;
        height: 46vh;
    }
    &:hover{ 
        transform: translateY(-1vh);
    }
`
const Title = styled.div`
    width: 80%;
    left: 1.4vw;
    height: 20%;
    position: absolute; 
    color: #FFFFFF;
    text-align: left;
    font-size: 17px;
`
const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 5px;
    }
`