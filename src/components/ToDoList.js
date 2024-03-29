import React, {useState} from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

const ToDoList = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        };

        const newTodos = [todo, ...todos]

        setTodos(newTodos);    
    };

    const updateTodo = (todoId, newValue) => {
        if (/^\s*$/.test(newValue.text) || newValue.text) {
            return
        };

        setTodos(prev => prev.map(item => (item.id === todoId ? {...item, text: newValue} : item))
        );
    };



    const removeTodo = (id) => {
        const removeArr = todos.filter((todo) => todo.id !== id);

        setTodos(removeArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }

  return (
    <div>
        <h1>What's the Plan for Today?</h1>
        <ToDoForm addTodo={addTodo} />
        <ToDo 
            todos={todos} 
            completeTodo={completeTodo} 
            removeTodo={removeTodo}
            updateTodo={updateTodo}
        />
    </div>
  )
}

export default ToDoList