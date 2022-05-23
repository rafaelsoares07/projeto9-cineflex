import axios from "axios"
import React from "react"
import {useParams, Link } from "react-router-dom"
import Header from "./Header"
import Loading from "./Loading"
import styled from "styled-components"


function Button({name, id}){
    return(
        <Botao>
            <p>{name}</p>
        </Botao>
    )
}


function InfosSessao({weekday, date, showtimes}){
    return(
        <Infos>
            <div className="c-sessao">
                
                <p className="dia"> {weekday} - {date} </p>
                {showtimes.map(item=> <Link to={`/assentos/${item.id}`}> <Button name={item.name}/> </Link> )}
            </div>
        </Infos>
    )
}

function Main({itemApi}){

    
    return(
        <C_Sessao>
            <p>Selecione o horário desejado:</p>
            {itemApi.days.map(item=> <InfosSessao weekday={item.weekday} date={item.date} showtimes={item.showtimes} />)}
        </C_Sessao>
    )
}



export default function Sessao(){

    const [itemApi, setItemApi] = React.useState({load:'loading'})
    const {idSessao}= useParams()
    console.log(idSessao)
    console.log(itemApi)

  
    

    React.useEffect(()=>{
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idSessao}/showtimes`)
        promisse.then(response=>{
        let respostaApi = response.data
        //console.log(respostaApi)
        setItemApi(respostaApi)
    })
    },[])

   
    return(
        <>
        <Header/>
        {itemApi.load === "loading"? <Loading/>:<Main itemApi={itemApi}/>}

        </>
    )
}


const C_Sessao = styled.div`
    text-align: center;
    background-color: #e5e5e5;
`;

const Infos = styled.div`
   background-color: aquamarine;
    margin: 0 auto;
    width: 600px;

    p{
        text-align: center;
    }

    
`;


const Botao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    width: 80px;
    height: 50px;
    background-color: orange;
    border-radius: 10px;
`;