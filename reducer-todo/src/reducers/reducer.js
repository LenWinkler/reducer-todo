export const initialState = {
    todos: [
        {
            todo: "Do something",
            id: 1234,
            completed: false
        },
        {
            todo: "Do another something",
            id: 12345,
            completed: false
        },
        {
            todo: "Do nothing",
            id: 123456,
            completed: false
        }
    ]
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            let newTodo = {
                todo: action.payload,
                id: Date.now(),
                completed: false
            };

            return {
                ...state,
                todos: [...state.todos, newTodo]
            };

        case 'TOGGLE_TODO':
            let updatedTodos = state.todos.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                } else {
                    return item;
                } 
            });
            return {
                ...state,
                todos: updatedTodos
            };

        case 'CLEAR_TODOS':
            return {
                ...state,
                todos: state.todos.filter(item => !item.completed)
            };

            default:
            return state;
    }
};