import axios from "axios"
import React from "react"
import {useParams, Link } from "react-router-dom"
import Loading from "./Loading"





function Main({assentos}){
    return(
        <div>
            <h1>Selecione os seus assentos</h1>
            <p>{assentos.movie.title}</p>
            <div className="mapa">
                {assentos.seats.map((item, i)=> <p className="num-assento">{i}</p>)}
            </div>
            
        </div>
        
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
            {assentos.load === "loading"? <Loading/>:<Main assentos={assentos}/>}
           

        </div>
        
    )
}