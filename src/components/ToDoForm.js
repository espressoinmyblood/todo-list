import React, {useState, useEffect, useRef} from 'react'

const ToDoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();

        const todo = {
            id: Math.floor(Math.random() * 10000),
            text: input
        }

        props.addTodo(todo);

        setInput('');

    };


  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder={props.edit ? "Edit ToDo" : "Add ToDo"}
            value={input} 
            name="text" 
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
        />
        <button className="todo-button">{props.edit ? "Update" : 'Add ToDo'}</button>
    </form>
  );
  
}

export default ToDoForm;
