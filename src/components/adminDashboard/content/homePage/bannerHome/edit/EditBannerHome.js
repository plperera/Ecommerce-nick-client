import styled from "styled-components"
import Input from "../../../../../../common/form/Input"

export default function EditBannerHome ({bannerData}) {
    return(
        <Container>
            <Input/>
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
    margin-top: calc(2vh + 7vh);
`