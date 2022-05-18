import axios from "axios"
import React from "react"
import { Link, useParams } from "react-router-dom"




export default function Sessao(){

    const [itemApi, setItemApi] = React.useState({})
    const {idSessao}= useParams()
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
        <h1>{itemApi.id}</h1>
        <h1>{itemApi.title}</h1>
        <h3>{itemApi.overview}</h3>
        <img src={itemApi.posterURL}/>
        
        </>
    )
}
