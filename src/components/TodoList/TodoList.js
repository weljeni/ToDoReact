import React from 'react';
import './TodoList.css'
const TodoList = (props) => {
    let style = {
        color: "red",
        listStyleType: 'none'
    }
    console.log(props.todos);
    return (
        <ul style={style}>
            {props.todos.map((item, index) => (
                <li key={item.id} className={item.status ? "completed" : ""}>
                    <input
                        onChange={() => props.changeStatus(item.id)}
                        type="checkbox"
                    />
                    {item.task}
                    <button onClick={() => props.handleDelete(item.id)}>&times;</button>
                    <button onClick={() => props.handleEdit(index)}>Edit</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;