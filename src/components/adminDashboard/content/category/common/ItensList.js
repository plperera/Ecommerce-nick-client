import styled from "styled-components"

export default function ItemList ({ListData, title, selectItem, contentWhenSelected}) {
    return(
        <>  
        {
            selectItem 
            ? contentWhenSelected

            : <Container>
                <ContentContainer>
                    {!ListData?.length && 
                        <EmptyContainer>{"Nenhum Conteudo Encontrado..."}</EmptyContainer>
                    }
                    {ListData?.map(e => 
                        e?.content
                    )}
                </ContentContainer>

                <BottomContainer>
                    <CountContainer>
                        <p>{`${ListData?.length || 0} ${title || "itens"} no total`}</p>
                    </CountContainer>

                    <CommandContainer>
                        <ArrowStyle>{"<"}</ArrowStyle>
                        <IndexStyle>{"1"}</IndexStyle>
                        <ArrowStyle>{">"}</ArrowStyle>
                    </CommandContainer>
                </BottomContainer>
            </Container>
        }
            
        </>
        
    )
}

const Container = styled.div`
    background-color: #CECECE1E;
    width: 100%;
    display: flex;
    flex-direction: column;    
    border-radius: 10px;
`
const ContentContainer = styled.div`
    width: 100%;
    min-height: 100px;
    padding: 15px;
    padding-bottom: 25px;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 20px;
`
const BottomContainer = styled.div`
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #CECECE1E;
`
const CountContainer = styled.div`
    > p {
        font-size: 13px;
    }
`
const CommandContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 1vw;
`
const ArrowStyle = styled.div`
    padding: 8px 10px;
    font-size: 15px;
    font-weight: 700;
    background-color: #CCCCCC3A;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
    :hover {
        background-color: #CCCCCC;
    }
`
const IndexStyle = styled.div`
    padding: 8px 20px;
    font-size: 15px;
    font-weight: 600;
    background-color: #CCCCCC3A;
    border-radius: 10px;
    :hover {
        background-color: #CCCCCC;
    }
`
const EmptyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-weight: 700;
    font-size: 14px;
    color: #A8A8A8;
    letter-spacing: 3px;
    user-select: none;
` 