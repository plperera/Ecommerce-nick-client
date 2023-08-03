import styled from "styled-components"
import MaskedInput from 'react-text-mask';
import { createNumberMask } from "text-mask-addons";

export default function Inputs ({handleForm, form}) {

    const priceMask = createNumberMask({
        prefix: 'R$ ',
        suffix: '',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: '.',
        allowDecimal: true,
        decimalSymbol: ',',
        decimalLimit: 2,
        integerLimit: 13,
        allowNegative: false,
        allowLeadingZeroes: false,
    });

    const stockMask = createNumberMask({
        includeThousandsSeparator: true,
        prefix: '',
        thousandsSeparatorSymbol: '.',
        integerLimit: 13,
        allowNegative: false,
        allowLeadingZeroes: false,
    });

    return(
        <Container>
            <NameInputContainer>
                <label>{"Nome"}</label>
                <input 
                    placeholder="Nome"
                    onChange={handleForm}
                    value={form.name}
                    name={"name"}
                />
            </NameInputContainer>

            <DescriptionInputContainer>
                <label>{"Descrição"}</label>
                <input 
                    placeholder="Descrição" 
                    onChange={handleForm}
                    value={form.description}
                    name={"description"}
                />
            </DescriptionInputContainer>

            <StockInputContainer>
                <label>{"Estoque"}</label>
                <Input 
                    placeholder="Estoque"
                    mask={stockMask}
                    maskChar={null}
                    onChange={handleForm}
                    value={form.stock}
                    name={"stock"}
                />
            </StockInputContainer>

            <PriceInputContainer>
                <label>{"Preço"}</label>
                <Input 
                    placeholder="Preço"
                    mask={priceMask}
                    maskChar={null}
                    onChange={handleForm}
                    value={form.price}
                    name={"price"}
                />
            </PriceInputContainer>  

            <PriceInputContainer>
                <label>{"Preço antes do Desconto"}</label>
                <Input 
                    placeholder="Preço antes do Desconto"
                    mask={priceMask}
                    maskChar={null}
                    onChange={handleForm}
                    value={form.highPrice}
                    name={"highPrice"}
                />
            </PriceInputContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 1vw;
    padding: 2vh 0;
`
const Input = styled(MaskedInput)`
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 1em;
  width: 100%;
`;
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    flex-wrap: nowrap;
    input {
        margin-top: 1vh;
        margin-bottom: 1vh;
        height: 42px;
        text-decoration: none;
        opacity: 1;
        border: none;
        border: 2px solid #02131B ;
        color: #171717;

        padding-left: 12px;
        padding-right: 12px;
        outline: none;
        border-radius: 0px;
        font-size: 14px;
        font-weight: 600;

        ::placeholder{
            color: #171717;
            opacity: .2;
        }
        :focus {
            border-radius: 10px;
            border: 2px solid #0B83BE ;
        }
    }
    label {
        font-size: 18px;
        color: #02131B;
        font-weight: 500;
        margin-top: 16px;
    }
    @media (max-width: 850px) {
        justify-content: end;
        input {
            font-size: 10px;
        }
        label {
            font-size: 11px;
        }
    }
`
const StockInputContainer = styled(InputContainer)`
    width: 32%;
`
const PriceInputContainer = styled(InputContainer)`
    width: 32%;
`
const NameInputContainer = styled(InputContainer)`
    width: calc( 99% + 1vw);
`
const DescriptionInputContainer = styled(InputContainer)`
    width: calc( 99% + 1vw);
`