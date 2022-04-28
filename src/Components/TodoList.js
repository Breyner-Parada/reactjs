import React from "react";
import '../StyleComponents/TodoList.css';

export function TodoList (props){
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}