import React from 'react';
import '../StyleComponents/TodoItem.css';
import {BsCheck2Circle} from 'react-icons/bs';
import {BsFillTrashFill} from 'react-icons/bs';

export function TodoItem(props) {

  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}>
        <BsCheck2Circle />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick={props.onDelete}>
        <BsFillTrashFill/>
      </span>
    </li>
  );
}