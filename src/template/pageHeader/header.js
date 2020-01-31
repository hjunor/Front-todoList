import React from 'react';

// import { Container } from './styles';

export default function Header(props) {
  return (
    <header key={props.id} className="page-header"> 
      <h2>{props.name} <small>{props.small}</small> </h2>
    </header>
  );
}
