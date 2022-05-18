import axios from "axios"
import React from "react"
import { Link } from "react-router-dom";
import Header from "./Header";



function FilmPoster({id, posterURL, title}){
    console.log(id+'  '+title)
    return (
        <div className="cardsFilme">
           <div className="cartaz">
               <img src={posterURL}/>
           </div>
        </div>
    )
}


export default function TelaInicial(){

    const [itensApi, setItensApi] = React.useState([])
   


    React.useEffect(()=>{
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        promisse.then(response =>{
            let respostaApi = response.data 
          
            setItensApi(respostaApi)
        })
    },[])
  





    return(
        <>
        <Header/>
        <div className="l-container-cards">
            {itensApi.map(item=> <Link to={`/sessao/${item.id}`}><FilmPoster id={item.id} title={item.title} posterURL={item.posterURL}></FilmPoster></Link>  )}
        </div>
        </>
    )
}
