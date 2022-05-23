import styled from "styled-components"
import Header from "./Header";


export default function TelaSucesso(){
    return(
        <div>
            <Header/>
            <TextSucess>Pedido feito com sucesso!</TextSucess>
            <Filme>ds</Filme>
            <Ingressos>dasdsa</Ingressos>
            <Comprador>dasdasdas</Comprador>
        </div>
    )
}


const TextSucess = styled.div`
background-color: bisque;
`;


const Filme = styled.div`
background-color: red;
`;


const Ingressos = styled.div`
background-color: blue;
`;


const Comprador = styled.div`
background-color: yellowgreen;
`;