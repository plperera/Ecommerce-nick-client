import styled from "styled-components"

export default function ExpandSubMenu ({ expandMenu, setExpandMenu }) {

    console.log(expandMenu?.subTitle)

    return(
        <Container onMouseLeave={ () => setExpandMenu(false)}>
            {
                expandMenu?.subTitle ? (
                
                    expandMenu?.subTitle?.map( e => 
                        <SubTopicContainer> {e} </SubTopicContainer>
                    )

                ):(<ErrorContainer>Erro ao carregar os subtopicos</ErrorContainer>)
            }

            <CloseMenuContainer onClick={() => setExpandMenu(false)}>X</CloseMenuContainer>

        </Container>
    )
}

const Container = styled.div`
    width: 80%;
    background-color: #263C4B;
    position: absolute;
    top: 14vh;
    display: inline;
    border-radius: 0 0 15px 15px;
    display: flex;
    align-items: center;
    justify-content: left;
    row-gap: 0.6vh;
    column-gap: 3vw;
    padding: 2vh 2vw;
    flex-wrap: wrap;
`
const ErrorContainer = styled.div`
    font-size: 20px;
    font-weight: 700;
    height: 100%;
    padding: 2vh 0;
    color: #00000060;
`
const SubTopicContainer = styled.div`
    height: 100%;
    display: inline-block;
    font-weight: 700;
    font-size: 15px;
    padding: 0.5vh 0.6vw;
    color: #FFFFFF;
    border-left: 4px solid #009395;
    cursor: pointer;

    &:hover {
        border-left: 8px solid #009395;
        margin-right: -4px;
    }
`
const CloseMenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 7px;
    border: 2px solid #FFFFFF;
    font-size: 14px;
    user-select: none;
    color: #FFFFFF;
    font-weight: 700;
    position: absolute;
    right: 2vw;
    cursor: pointer;
`