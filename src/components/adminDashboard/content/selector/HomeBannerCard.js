import styled from "styled-components"

export default function HomeBannerCard ({ bannerData, setBannerSelect }) {
    return(
        <Container onClick={() => setBannerSelect(bannerData)} style={{backgroundImage: `url(${bannerData?.imageUrl})`}}>
            <Title>{bannerData?.text}</Title>
        </Container>
    )
}

const Container = styled.div`
    flex-shrink: 0;
    width: 32vw;
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

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 1366px) {
        padding: 1vh 1vw;
        height: 46vh;
    }
    &:hover{ 
        transform: translateY(-1vh);
        div{
            background-color: #0000003F;
        }
    }
`
const Title = styled.div`
    display: flex;
    align-items: center;
    width: auto;
    max-width: 85%;
    padding: 0.5vh 0.5vw;
    left: 1.4vw;
    height: 20%;
    position: absolute; 
    color: #FFFFFF;  
    text-align: left;
    font-size: 17px;
    text-shadow: 0 0 5px #0000007C;
`