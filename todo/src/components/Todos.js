import React from 'react';
import styled from 'styled-components';

import Todo from './Todo';
import AddTodoForm from './AddTodoForm';

const ClearCompletedButton = styled.button`
    margin-top 10px;
    border: 1px solid red;
    border-radius: 5px;
    color: red;
    cursor: pointer;
    outline: none;
`;

const Todos = (props) => {
    return (
        <div>
            <AddTodoForm addItem={props.addItem} />
            {props.todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleItem={props.toggleItem} />
            ))}
            <ClearCompletedButton onClick={props.clearCompleted}>Clear Completed Items</ClearCompletedButton>
        </div>
    )
}

export default Todos;