import React,{useState} from 'react';
import './form.css'

// import { Container } from './styles';

export default function Form(props) {
  const [description, setDescription] = useState('');


  return (
    
    <div key={props.key} role="form" className="row todoForm" >

        <div className= 'col-xs-12 col-sm-9 col-md-10'>
            <input 
            type='t'
            id='description' 
            className='form-control'
            placeholder='Adicione ma tarefa...'
            value = {description}
            onChange ={e => setDescription(e.target.value)}
            ></input>
        </div>

            <div className='col-xs-12 col-sm-3 col-md-2'>
                <button 
                className='btn btn-primary'
                onClick={e => props.handleAdd(description)
                }>
                    <i className='fa fa-plus' ></i>
                </button>
                <button 
                className='btn btn-info'
                onClick={e => props.handleSearch(description)
                }>
                    <i className='fa fa-search' ></i>
                </button>
            </div>
          
        
    </div>

  );
}
