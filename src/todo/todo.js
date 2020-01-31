import React, { useState} from 'react';
import axios from 'axios';
import Menu from '../template/menu/menu';
import Header from '../template/pageHeader/header';
import Form from './todoForm';


import './todo.css'

function Todo() {

const [todo, setTodo]= useState([]);


const api = axios.create({
  baseURL:'http://localhost:3003'
});

async function handleSearch(to){
  const response = await api.get(`api/todos/?sort=-createdAt&description__regex=${to}`)
  
  console.log(response.data)
handleAdd()
  console.log(todo)

}
    
  async function loadTodo(todo){
    const search = todo ? `?description=/${todo}` : '?sort=-createdAt';
    const response = await api.get(`/api/todos${search}`);

    setTodo(response.data);
    
  }

  loadTodo();

 async function handleAdd(data){
  
const response = await api.post(`/api/todos`,{description:data})
  //.then(res => console.log('funcionou!!')) 

    setTodo([response.data,...todo]);
    
  } 


 async function handleExcluir(to){
  await api.delete(`api/todos/${to}`)
   .then(res => handleAdd() )
} 

 

async function handleDone(to){
      api.put(`api/todos/${to}`,{...todo, done: true})
      .then(res => handleAdd())
}

async function handlePut(to){
  api.put(`api/todos/${to}`,{...todo, done: false})
  .then(res => handleAdd())
}


 

  return (
    <>
    <Menu/>
    <Header name={'Tarefa'} small={'Cadastrado'}/>

    <Form key={todo._id} classeName='p5' handleSearch={handleSearch} handleAdd={handleAdd} />
    

    <table className='table mt4'>
     <thead className=' margin'>
       <tr>
         <th className='mt2'>Descrição</th>
         <th>Ações</th>
       </tr>
       
     </thead>
     <tbody>
       {todo.map((to) =>(
          <tr key={to._id}>
            <td  className={to.done ? 'mark' : ''}>{to.description}</td>
            <td>

              <button onClick={e =>{handleDone(to._id)}} className={'btn btn-success'} hidden ={to.done}>
              <i className='fa fa-check' ></i>
              </button>

              <button onClick={e =>{handlePut(to._id)}} className={'btn btn-warning'}hidden ={!to.done}>
              <i className='fa fa-undo' ></i>
              </button>
              
              <button onClick={e =>{handleExcluir(to._id)}} className={'btn btn-danger'} hidden ={!to.done}>
              <i className='fa fa-trash-o' ></i>
              </button>
            </td>
        </tr>
       ))}
     </tbody>
   </table>
    </>
  );
}
export default Todo;