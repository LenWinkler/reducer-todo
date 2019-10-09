export const initialState = {

 todos: [
    {item: 'Learn about reducers',
    completed: false,
    id: 3892987589},

    {item: 'Build Todo App with reducer hook',
    completed: false,
    id: 3892987234},

    {item: 'Do something else',
    completed: false,
    id: 3892984524}
]}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NEW_TODO':
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };
            return (
                [...state, newTodo]
            );
        case 'TOGGLE_COMPLETED':
            return {
                ...state, completed: !state.completed
            };
 
    default:
        return state;

    }
}