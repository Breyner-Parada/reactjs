import React from "react";
import '../StyleComponents/TodoCounter.css';
import { TodoContext } from "../TodoContext";


export function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext);

    return (
        <>
        <h1 className="TituloPrimary">TAREAS</h1>
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
        </>
    );
}