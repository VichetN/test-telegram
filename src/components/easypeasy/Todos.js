import React from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
import TodoItem from './TodoItem'

function Todos() {

    const todos = useStoreState(state => state.todos.items);

    return (
        <div>
            <h1>Todos</h1>
            <p>Click todo item to toggle completed</p>
            <hr />
            {
                todos?.map(todo => (
                    <TodoItem todo={todo} />
                ))
            }
        </div>
    )
}

export default Todos