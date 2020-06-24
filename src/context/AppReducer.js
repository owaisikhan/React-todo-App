
export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [action.payload, ...state]
        case 'DELETE':
            return [...state].filter(todo => todo.id !== action.payload)
        default:
            return state
    }
}