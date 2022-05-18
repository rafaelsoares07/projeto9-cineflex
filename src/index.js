import ReactDom from "react-dom"; // usa pra poder renderizar no root, só precisa importar uma vez 
import './style.css'
import App from "./App";



ReactDom.render(<App/>, document.querySelector('.root'))