import uuid from 'uuid';

export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: uuid.v4()
        },
        {
            item: 'Get to Diamond IV',
            completed: false,
            id: uuid.v4()
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO_ITEM':
            const newItem = {
                item: action.payload,
                completed: false,
                id: uuid.v4()
            }

            return {
                ...state,
                todos: [
                    ...state.todos, 
                    newItem
                ]
            };
        case 'TOGGLE_TODO_ITEM':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(action.payload === todo.id) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        };
                    } else {
                        return todo;
                    }
                })
            };
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            };
        default:
            return state;
    }
}