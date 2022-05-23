import axios from "axios"
import React from "react"
import { Link } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components"



function FilmPoster({id, posterURL, title}){
    return (
        <div>
           <Cartaz>
               <img src={posterURL}/>
           </Cartaz>
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
        <Body>
        <Header/>

        <L_Container_Cards>
            {itensApi.map(item=> <Link to={`/sessao/${item.id}`}><FilmPoster id={item.id} title={item.title} posterURL={item.posterURL}></FilmPoster></Link>  )}
        </L_Container_Cards>


        </Body>
    )
}


const Body = styled.div`
    background-color: #E5E5E5;

`;

const L_Container_Cards = styled.div`
    margin-top: 20px;
    grid-template-columns: repeat(auto-fit, 250px);
    justify-content: center;
    justify-items: center;
    display: grid;
    grid-gap: 30px;
`;

const Cartaz = styled.div`

    img{
        width: 100%;
        cursor: pointer;
    }
`;