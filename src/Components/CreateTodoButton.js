import React from "react";
import '../StyleComponents/CreateTodoButton.css';
import { TodoContext } from "../TodoContext";

export function CreateTodoButton (){
    const {setOpenModal, openModal} = React.useContext(TodoContext);
    const onClickButton = () => {
       !openModal 
       ? setOpenModal(true)
       : setOpenModal(false)
    }
    return (
        <button 
        className="CreateTodoButton"
        onClick={onClickButton} 
        >+</button>
    );
}