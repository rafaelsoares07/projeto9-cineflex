import styled from 'styled-components';

export default function Header(){
    return(
        <CHeader>
             <p>CineFlex</p>
        </CHeader>
    )
}


const CHeader = styled.div`
    background-color:#C3CFD9;
    width: 100vw;
    height: 60px;
    color: azure;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;

    p{
        color:#E8833A;
    }
`;