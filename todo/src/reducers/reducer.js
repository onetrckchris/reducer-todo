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
            }
        default:
            return state;
    }
}