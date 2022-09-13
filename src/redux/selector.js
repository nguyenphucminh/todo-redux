export const todoListSelector = (state) => {
    const todoRemaining = state.todoList.filter(todo =>{
        return todo.name.includes(state.filter.search)
    });
    return todoRemaining
}
export const searchTextSelector = (state) => state.filter.search
