import styled from "styled-components"
import ContentComponent from "./ContentComponent"

export default function ManagementComponent ({ManagementData}) {
    return(
        <Container isMainComponent={ManagementData?.isMainComponent}>
            <TitleContainer>
                <h1>{ManagementData?.title}</h1>
            </TitleContainer>

            <MiddleContainer>
                {ManagementData?.components?.map(comp => 
                    <ContentComponent showReturnButton={comp?.showReturnButton} handleReturn={comp?.handleReturn} title={comp?.title} content={comp?.content}/>
                )}
            </MiddleContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: #171717;
    width: 100%;
    font-size: 21px;
    font-weight: 500;
    background-color: ${props => props.isMainComponent ? '#FFFFFF00':'#DFDFDF2D'};
    border-radius: ${props => props.isMainComponent ? '0':'10px'};
    /* padding: 25px 1.4vw; */
    -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    box-shadow: ${props => props.isMainComponent ? 'none':'8px 8px 24px 0px rgba(66, 68, 90, 1)'};
    
    @media (max-width: 850px) {
        width: 100%;
    }
`
const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 1.4vw;
    > h1 {
        font-size: 28px;
        font-weight: 700;
        color: #999999;
    }
`
const MiddleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 1.4vw;
    row-gap: 2vh;
`