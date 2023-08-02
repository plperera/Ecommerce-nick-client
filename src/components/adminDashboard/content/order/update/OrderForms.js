import styled from "styled-components"
import { useEffect } from "react";
import OrderCard from "../../../../userDashboard/content/orders/OrderCard";

export default function OrderForms ({form, handleForm, setForm, orderData, token}) {

    const optionsArray = [
        {status: "waiting", label: "Processando"},
        {status: "Payd", label: "Pagamento Recebido"},
        {status: "Sorting", label: "Em Separação"},
        {status: "ReceivedByCarrier", label: "Recebido pela transportadora"},
        {status: "InTransit", label: "Em Transito"},
        {status: "Delivered", label: "Entregue"},
    ]

    useEffect(() => {

        setForm({
            status: optionsArray.filter(e => orderData?.status === e.status)[0].label
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[orderData])

    return(
        <Container>
            {form?.status ? (        
                <>
                    <h2>{"Selecione um novo Status"}</h2>
                    <Select 
                        placeholder=""   
                        type="text" 
                        name={"status"} 
                        value={form?.status} 
                        onChange={handleForm}
                    >
                        {
                            optionsArray.map((option, index) => 
                                <Option key={index} value={option.value}>
                                {option.label}
                                </Option>
                        )}
                    </Select>
                    <h2>{"Informações do Pedido"}</h2>

                    <OrderCard orderData={orderData}/>
                </>
                
            ):(<></>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 3vh;
    color: #171717;
    width: 100%;
    font-size: 21px;
    font-weight: 500;
    h2 {
        padding: 0.2vh 0.3vw;
        font-size: 20px;
        display: flex;
        align-items: center;
        font-weight: 600;
        border-left: 5px solid #009395ff; 
    }
    h1 {
        font-size: 25px;
        margin-bottom: 2vh;
        font-weight: 600;
        padding-top: 1.4vh;
    }
`
const Select = styled.select`
    width: 100%;
    height: 60px;
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px 16px;
    background-color: #fff;
    font-size: 17px;
    color: #171717A8;
    
    &:focus {
        border: 2px solid #009395ff;
    }

    &:disabled {
        opacity: 0.5;
    }
`;
const Option = styled.option`
  padding: 8px 16px;
  color: #333;


  &:hover {
    background-color: #eee;
  }

  &:selected {
    color: #fff;
  }
`;