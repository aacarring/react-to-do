import React from 'react';
import ToDo from './ToDo';

export default function ToDoList({ toDos }) {
    return (
        toDos.map(todo => {
            return <ToDo key={todo.id} todo={todo} />
        })
    )
}