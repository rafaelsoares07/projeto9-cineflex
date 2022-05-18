import axios from "axios"
import React from "react"
import {useParams } from "react-router-dom"
import Header from "./Header"




export default function Sessao(){

    const [itemApi, setItemApi] = React.useState({})
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

        {itemApi.id}
        {itemApi.days.map(item=> <h1>{item.weekday}</h1>)}


        <div className="footer">
            <div>
                <img src={itemApi.posterURL}/>
                <p>{itemApi.title}</p>
            </div>
        
        </div>
       
        
        </>
    )
}
