import axios from "axios"
import React from "react"
import {useParams, Link } from "react-router-dom"
import Header from "./Header"
import Loading from "./Loading"
import styled from "styled-components"
import Footer from "./Footer"


function Button({name, id}){
    return(
        <Botao>
            <p>{name}</p>
        </Botao>
    )
}


function InfosSessao({weekday, date, showtimes}){
    return(
        <>
        
        <Infos>
            <Sec>
                <Data className="dia"> {weekday} - {date} </Data>
                {showtimes.map(item=> <Link  key={item} to={`/assentos/${item.id}`}> <Button name={item.name}/> </Link> )}
            </Sec>
        </Infos>

        
        </>
    )
}

function Main({itemApi}){

    
    return(
        <C_Sessao>
            <p>Selecione o horário desejado:</p>
            {itemApi.days.map(item=> <InfosSessao weekday={item.weekday} date={item.date} showtimes={item.showtimes} />)}
        
        <Footer img={itemApi.posterURL} filme={itemApi.title}/>
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


const Sec = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;


const C_Sessao = styled.div`
    
    margin: 0 auto;
    text-align: center;
    background-color: #e5e5e5;
    width: 375px;
  
`;

const Infos = styled.div`
    margin: 0 auto;
    width: 375px;
    display: flex;
    justify-content: center;

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

const Data = styled.p`
    width: 110px;
`;