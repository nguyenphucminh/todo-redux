const initState = {
    filter:{
        search: '',
        status: 'All',
        priority: []
    },
    todoList:[
        { id:1, name:'Learn React', completed: false, priority: 'Medium'},
        { id:2, name:'Learn Nest', completed: false, priority: 'High'},
        { id:3, name:'Learn Node', completed: true, priority: 'Low'},

    ]
}
const rootReducer = (state = initState, action) =>{
    console.log('stateRedu', state)
    console.log("actionRedu", action)
    switch (action.type) {
        case 'addTodo':
            return{
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
            break;
        case 'searchFilter':
            return{
                ...state,
                filter: {
                    ...state.filter,
                    search: action.payload
                }
            }
        default:
            console.log("state: ", state)
            return state;
    }
}
export default rootReducer