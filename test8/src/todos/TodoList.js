import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({todos, onDel, onToggle}) => {
    //변수이름으로item말고 todos로 써도된다
    return (
        <ul className='TodoList'>
            {
                todos.map(todos=><TodoItem key={todos.id}
                todos={todos} onDel={onDel} onToggle={onToggle}/>)
            }
        </ul>
    );
};

export default TodoList;