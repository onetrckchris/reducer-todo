import React from 'react';
import styled from 'styled-components';

// This is completely over the top, but it looks cool.
// Maybe it has some usecase for much bigger conditionals.
const Completed = styled.p`
    text-decoration: line-through;
    color: red;
    cursor: pointer;
`;

const NotCompleted = styled.p`
    text-decoration: none;
    cursor: pointer;
`;

const TodoContainer = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    width: 500px;
    margin: auto;
    margin-top: 10px;
    padding: 0px 20px;
`;

const Todo = (props) => {
    return (
        <TodoContainer>
            {props.todo.completed ?
            <Completed onClick={() => props.toggleItem(props.todo.id)}>{props.todo.item}</Completed> :
            <NotCompleted onClick={() => props.toggleItem(props.todo.id)}>{props.todo.item}</NotCompleted>}
        </TodoContainer>
    )
}

export default Todo;