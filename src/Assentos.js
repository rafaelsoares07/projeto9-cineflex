import axios from "axios"
import React from "react"
import {useParams, useNavigate } from "react-router-dom"
import Loading from "./Loading"
import styled from "styled-components"
import Header from "./Header"
import reactDom from "react-dom"
import Footer from "./Footer"


function Sets({id,num,status, ids, setIds,setNum}){
    const [selecionado, setSelecionado] = React.useState(false)

    function FormatarAssento(){    

        function addId(id){
            console.log('add')
            setNum(num)
            const novoId = [...ids, id ]
            setIds(novoId)
            setSelecionado(!selecionado)

            console.log(selecionado)
            console.log(novoId)
          
        }

        function removeId(id){
            console.log('remove')

            const novoId = ids.filter(item => item!=id )
            setIds(novoId)
            setSelecionado(!selecionado)

            console.log(selecionado)
            console.log(novoId)
            
        }

        
        if(status===false){
        return(
            <Assento cor={"#FBE192"}>
                <p>{num}</p>
           </Assento>
        )}

        if(status===true && selecionado===false){
        
        return(
            <Assento onClick={()=> addId(id)} cor={"#7B8B99"}>
                <p>{num}</p>
            </Assento>
        )}

        if(status===true && selecionado===true){
            
            return(
                <Assento onClick={()=> removeId(id)} cor={"#45BDB0"}>
                    <p>{num}</p>
                </Assento>
            )}

    }
    return(
        <>
        
            {FormatarAssento()}
        </>
       
    )
}



function Main({assentos}){
    
    console.log(assentos)
    const [ids, setIds] = React.useState([]);
    const [num, setNum] = React.useState([]);
    const [nome, setNome]= React.useState("");
    const [cpf, setCpf] = React.useState("");

    const InfosUser = {
        name:nome,
        cpf:cpf,
        filme:assentos.movie.title,
        data:assentos.day.weekday,
        hora:assentos.day.date,
        num:num,
    }
   // const [selecionado, setSelecionado] = React.useState(false)
    const navigate = useNavigate();
   

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
            navigate("/sucesso", {state:InfosUser})

        }).catch(erro=> console.log(erro))

        console.log(user)
    }



    return(
        <>
        <Container>
            <h1>Selecione os seus assentos</h1>
            <p>{assentos.movie.title}</p>
            <Mapa>
                {assentos.seats.map((item, i)=> <Sets setNum={setNum} setIds={setIds} ids={ids}  key={i} id={item.id} num={item.name} status={item.isAvailable}></Sets>)}
            </Mapa>

            <Legenda>
                <div>
                    <Icon cor={"#8DD7CF"}></Icon>
                    <p>Selecionado</p>
                </div>

                <div>
                    <Icon cor={"#C3CFD9"}></Icon>
                    <p>Disponível</p>
                </div>

                <div>
                    <Icon cor={"#FBE192"}></Icon>
                    <p>Indisponível</p>
                </div>
            </Legenda>

            <Form>
                <form onSubmit={exibir}>

                <label>Insira seu Nome:</label>
                <input value={nome} onChange={(event)=> setNome(event.target.value)} required ></input> <br/>

                <label>Insira seu CPF:</label>
                <input value={cpf} onChange={(event)=> setCpf(event.target.value)} required ></input>

                <button onClick={exibir}>Reservar Assento(s)</button>

                </form>
                
            </Form>

      
        </Container>
          <Footer filme={assentos.movie.title} img={assentos.movie.posterURL} data={assentos.day.weekday} dia={assentos.day.date} />
        </>
        
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
    width: 375px;
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
    cursor: pointer;
    margin-bottom: 30px;
    border-radius: 5px;
    border: none;
    background-color:#E8833A;
    width: 220px;
    height: 40px;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 400;
}
`;

const Legenda = styled.div`
    margin: 10px auto;
    width: 360px;
    display: flex;
    justify-content: space-between;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`;

const Icon = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${props => props.cor}
`;