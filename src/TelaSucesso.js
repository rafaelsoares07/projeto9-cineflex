import { useLocation } from "react-router-dom";
import styled from "styled-components"
import Header from "./Header";





export default function TelaSucesso(){

    const location = useLocation()
    const Info  = location.state;

    console.log(Info.num)

    return(
        <>
        <Header/>
        
        <Container>
            <TextSucess><p>Pedido feito com sucesso!</p></TextSucess>
            <Filme>
                <p>Filme e Sessão:</p>
                <span>{Info.filme}</span>
                <span>{Info.data +" "+ Info.hora}</span>
                </Filme>
            <Ingressos>
                <p>Ingressos:</p>
                <span>Assento {Info.num}</span>
                
            </Ingressos>
            <Comprador>
                <p>Comprador:</p>
                <span>Nome:{Info.name}</span>
                <span>CPF: {Info.cpf}</span>
            </Comprador>
        </Container>
        </>
    )
}


const Container = styled.div`
    margin: 0 auto;
    width: 375px;
`;

const TextSucess = styled.div`
margin: 10px;
p{
    text-align: center;
    font-size: 24px;
    color: #293845;
}

`;


const Filme = styled.div`
margin: 10px;
p{
    
    font-size: 24px;
    color: #293845;
    margin-bottom: 10px;
}

span{
    display: block;
}
`;


const Ingressos = styled.div`
margin: 10px;
p{
   
    font-size: 24px;
    color: #293845;
    margin-bottom: 10px;
}
`;


const Comprador = styled.div`
margin: 10px;
p{
    
    font-size: 24px;
    color: #293845;
    margin-bottom: 10px;
}

span{
    display: block;
}
`;