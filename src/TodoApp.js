import React from 'react';
import { useState } from 'react';

const TodoItem = ({todo, removeTodo}) =>
{
    return (
        <li>
        {todo.text}
        <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
    )
}

const TodoApp = () => {

    // An array that holds the todo objects that is using useState
    const [todos, setTodos] = useState([
        { id: 1, text: 'react todo list'}
    ]);

    // Make a useState variable that holds the input field
    const [inputValue, setInputValue] = useState('');

    // Handle event change of user input
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    // Function that adds a new todo to the list of todo objects
    const addTodo = (e) => {
        e.preventDefault();

        const newTodo = { id: Date.now(), text:inputValue };
        setTodos([...todos, newTodo]);
        setInputValue('');
    }
    // Function to remove a todo from the list of todo objects
    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    // Sort todos alphabetically by text
    const sortTodos = () => {
        const sorted = [...todos].sort((a, b) => a.text.localeCompare(b.text));
        setTodos(sorted);
    }
    // return JSX code that render input field, submit button and a list of todos
    return (
        <div>
            <h1>Todo App</h1>
            <form onSubmit={addTodo}>
                <input
                    type="test"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            <button type="submit">Add Todo</button>
            </form>
            <button onClick={sortTodos}>Sort Todos</button>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
                ))}
            </ul>

        </div>
    )
}
export default TodoApp;