import React from 'react';

import Todo from './Todo';
import AddTodoForm from './AddTodoForm';

const Todos = (props) => {
    return (
        <div>
            <AddTodoForm addItem={props.addItem} />
            {props.todos.map(todo => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default Todos;