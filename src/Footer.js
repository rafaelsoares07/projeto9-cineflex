import styled from "styled-components"

export default function Footer({filme,img,data,dia}){

    return(
        <Main>

            <img src={img}/>

            <div>
            <p>{filme}</p>
            <p>{dia}</p>
            <p>{data}</p>
            </div>
            
            
        
        </Main>
            
    )
}


const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9EADBA;
    img{
        margin: 5px;
        width: 64px;
        height: 89px;
        object-fit: cover;
        margin-right: 10px;
    }

`;

