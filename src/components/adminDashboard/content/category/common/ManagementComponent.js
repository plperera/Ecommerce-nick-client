import styled from "styled-components"

export default function ManagementComponent ({ManagementData}) {
    return(
        <Container isMainComponent={ManagementData?.isMainComponent}>
            <TitleContainer>
                <h1>{ManagementData.title}</h1>
            </TitleContainer>

            <MiddleContainer>

                {ManagementData?.components?.map(comp => 
                    <>
                        <MiddleTitleContainer>
                            <h2 onClick={comp?.handleReturn}>{comp?.title}</h2>
                        </MiddleTitleContainer>

                        <ContentContainer>
                            {comp?.content}
                        </ContentContainer>     
                    </>
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
    background-color: ${props => props.isMainComponent ? '#FFFFFF00':'#DFDFDF4D'};
    border-radius: ${props => props.isMainComponent ? '0':'10px'};
    /* padding: 25px 1.4vw; */
    
    @media (max-width: 850px) {
        width: 100%;
    }
`
const TitleContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 1.4vw;
    > h1 {
        font-size: 25px;
        font-weight: 600;
    }
`
const MiddleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 25px 1.4vw;
    row-gap: 1vh;
`
const MiddleTitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > h2 {
        font-size: 20px;
        font-weight: 600;
        padding: 5px 0;
    }
`
const ContentContainer = styled.div`
    display: flex;
    width: 100%;
    min-height: 100px;
`