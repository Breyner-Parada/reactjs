import React from 'react';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoList} from '../Components/TodoList';
import { TodoItem } from '../Components/TodoItem';
import { TodoSearch } from '../Components/TodoSearch';
import {CreateTodoButton} from '../Components/CreateTodoButton';
import {TodoContext} from '../TodoContext/';
import {Modal} from '../Modal/';
import { TodoForm } from '../Components/TodoForm';
import {MsgError} from '../Components/MsgError';
import {MsgLoading} from '../Components/MsgLoading';
import {MsgLoaded} from '../Components/MsgLoaded';
import {MsgNoResult} from '../Components/MsgNoResult';
// import './App.css';
/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar el curso de intro de React', completed: false},
  { text: 'Jugar futbol', completed: false},
]; */



function App() {

  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    totalTodos,
    

  } = React.useContext(TodoContext);

  return (

    <>
      <TodoCounter />

      <TodoSearch />
      
      <TodoList >
        {error && <MsgError />}
        {loading && <MsgLoading />}
        {(!loading && !totalTodos) && <MsgLoaded />}
        {(!!totalTodos && !searchedTodos.length) && <MsgNoResult /> }
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)}/>
          ))}
      </TodoList>
       
      <CreateTodoButton />

      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
      
      
        
    </>
    
  );
}

export default App;
