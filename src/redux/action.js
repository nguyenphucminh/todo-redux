export const addTodo = (data) =>{
    return {
        type: 'addTodo',
        payload: data
    }
}
export const searchFilter = (text) =>{
    return {
        type: 'searchFilter',
        payload: text
    }
}