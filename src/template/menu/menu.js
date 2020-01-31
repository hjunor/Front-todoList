import React from 'react';
import { Link } from "react-router-dom";
// import { Container } from './styles';
import './styles.css'
export default function Menu() {
  return (
    
 <nav className=" menu navbar navbar-expand-lg navbar-light bg-dark  ">
  <Link className="nav-link text-light" to="/todo">
    <i  className="fa fa-calendar-check-o mr-2" ></i>
    TodoApp <span className="sr-only">(current)</span></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-light " to="/todo">Tarefas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/about">Sobre</Link>
        </li>
        
      </ul>
    </div>
  </nav>
 
    
  );
}
