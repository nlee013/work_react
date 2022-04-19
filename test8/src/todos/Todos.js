import React, { useRef, useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import './Todos.css';

const Todos = () => {

    const no = useRef(1)
    const [todos, setTodos] = useState([
        //{id:1, text:'점심먹기', done:false}
    ])

    const onAdd = (text) => {

        //alert('추가!')
        setTodos([
            ...todos,
            {
                id:no.current++,
                text:text,
                done:false
            }
        ])
    }

    const onDel = (id) => {
        setTodos(todos.filter(todo=>todo.id!==id))
    }

    const onToggle = (id) =>{
        //alert('toggle')
        // setTodos(todos.map(todos =>{

        //     if(todos.id === id){
        //         return{
        //         ...todos,
        //         done:!todos.done
        //         }

        //     }else{
        //         return todos
        //     }
        // }))

        setTodos(todos.map(todos=>todos.id===id?
            {
                ...todos,
                done:!todos.done
            }
                :todos))
    }

    return (
        <div className='Todos'>
            <h1>Todo List</h1>
            <TodoInput onAdd={onAdd}/>
            <TodoList todos={todos} onDel={onDel} onToggle={onToggle}/>
        </div>
    );
};

export default Todos;