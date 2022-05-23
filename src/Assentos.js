import axios from "axios"
import React from "react"
import {useParams, useNavigate } from "react-router-dom"
import Loading from "./Loading"
import styled from "styled-components"
import Header from "./Header"
import reactDom from "react-dom"





function Main({assentos}){
    
    const [ids, setIds] = React.useState([]);
    const [nome, setNome]= React.useState("");
    const [cpf, setCpf] = React.useState("");
    const [selecionado, setSelecionado] = React.useState(false)

    const navigate = useNavigate();



    function Assentos({id,num,status}){

        function FormatarAssento(status){
            if(status===false){

            <Assento cor={"#FBE192"}>
                <p>{num + status}</p>
            </Assento>
            }

            if(status===true){
            <Assento cor={"#7B8B99"}>
                <p>{num + status}</p>
            </Assento>
            }
        }
        return(
            <>

                {FormatarAssento()}
            </>
           
        )
    }

    function addId(item){

        console.log(item.status)

        const novoId = [...ids, item.id ]
        setIds(novoId)
    }

    function exibir(event){
        event.preventDefault()

        const user = {
            ids:ids,
            name:nome,
            cpf:cpf
        }

        const promisse = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", user)

        promisse.then((resonse)=>{
            console.log(resonse.data)
            navigate("/sucesso")

        }).catch(erro=> console.log(erro))

        console.log(user)
    }



    return(
        <Container>
            <h1>Selecione os seus assentos</h1>
            <p>{assentos.movie.title}</p>
            <Mapa>
                {assentos.seats.map((item, i)=> <Assentos key={item} id={item.id} num={item.name} status={item.isAvailable}></Assentos>)}
            </Mapa>

            <Form>
                <form onSubmit={exibir}>

                <label>insira seu nome</label>
                <input value={nome} onChange={(event)=> setNome(event.target.value)} required ></input> <br/>

                <label>insira seu cpf:</label>
                <input value={cpf} onChange={(event)=> setCpf(event.target.value)} required ></input>

                <button onClick={exibir}>Comprar Ingressos</button>

                </form>
                
            </Form>
            

        </Container>
        
    )
}

export default function Assentos(){

    const [assentos, setAssentos] = React.useState({load:'loading'})
    const {idAssento}= useParams()

    

    
   React.useEffect(()=>{
       const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idAssento}/seats`)
       promisse.then(response=>{
        const respostaApi = response.data
        setAssentos(respostaApi)
        
       })



   },[])
    
  

    return(
        <div>
            <Header/>
            {assentos.load === "loading"? <Loading/>:<Main assentos={assentos}/>}
        </div>
        
    )
}


const Container = styled.div`


    width: 600px;
    margin: 0 auto;
    text-align: center;

    p{
        margin: 10px 0;
    }

`;


const Mapa = styled.div`
    width: 360px;
    margin: 0 auto;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
`;

const Assento = styled.div`
    cursor: pointer;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: ${props => props.cor};
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Form = styled.div`
margin: 0 auto;
width: 360px;


input{
    border: none;
    border-radius: 5px;
    height: 25px;
    width: 200px;
    margin: 10px;
}

button{
    width: 220px;
    height: 40px;
}
`;