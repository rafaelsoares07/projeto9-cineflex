import axios from "axios"
import React from "react"
import {useParams, Link } from "react-router-dom"
import Header from "./Header"
import Loading from "./Loading"


function Button({name, id}){
    return(
        <div className="btn">
            <p>{name}</p>
        </div>
    )
}


function InfosSessao({weekday, date, showtimes}){
    return(
        <div>
            <p className="dia"> {weekday} - {date} </p>
            <div className="c-sessao">
            
                {showtimes.map(item=> <Link to={`/assentos/${item.id}`}> <Button name={item.name}/> </Link> )}
            </div>
        </div>
    )
}

function Main({itemApi}){

    
    return(
        <div className="sessao">
            {itemApi.days.map(item=> <InfosSessao weekday={item.weekday} date={item.date} showtimes={item.showtimes} />)}
        </div>
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
