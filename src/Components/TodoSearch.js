import React from "react";
import '../StyleComponents/TodoSearch.css';
import { TodoContext } from "../TodoContext";


export function TodoSearch (){
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <input 
            className="TodoSearch" 
            placeholder="Buscar"
            value={searchValue}
            onChange={onSearchValueChange}
        />
        
    );
}