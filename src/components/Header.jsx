import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import "../App.css";

function Header(props){

// estado é informação armazenada.
// As informações são imutáveis.
// getter & setter para mudar.
// const [getter, setter] = useState(valor inicial)
    const [company, setCompany] = useState(
        props.options.empresa || "Nenhuma informada");
    const [name, setName] = useState(props.options.nome);
    const [site, setSite] = useState(props.options.site);

    //executar a primeira vez que a página for carregada(Fiap). E cada vez que um estado for alteradi(Avanade). Ele executa novamente.

    useEffect(() => {
//Hook executa automaticamente, toda vez que a página é carregada - componenDidMount (
// Executa automaticamente toda vez que um estado é alterado.
 
setCompany(company.toUpperCase());
 } , [company]);

    return(
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{props.title}</p>
        <a
          className={props.options.className}
          href={props.options.site}
          target="_blank"
          rel="noopener noreferrer"
        >
          {company} - {name}
        </a>
        <button onClick={(e) => setCompany("Avanade")}
        > {`Mudando o nome de: ${company}`}</button>
      </header>

    );
}


export default Header;