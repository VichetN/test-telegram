import { useStoreActions } from 'easy-peasy';
import React from 'react'

function TodoItem({ todo }) {

    const {toggleTodo} = useStoreActions(actions => ({
        toggleTodo: actions.todos.toggleTodo
    }));

    return (
        <div
            className="todo"
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
            <span onClick={() => toggleTodo(todo.id)} style={{ cursor: "pointer" }}>
                {todo.title}
            </span>
            <button >
                <i className="fas fa-trash-alt" />
            </button>
        </div>
    )
}

export default TodoItem