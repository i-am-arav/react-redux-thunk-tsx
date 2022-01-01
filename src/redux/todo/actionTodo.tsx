import {Itodo} from '../../todo'

let nextTodoId = 0;

export const addTodo = (val:Itodo) => {
    return ({type:'ADD_TODO', payload: val})
}

export const toggleTodo = (id:number) => {
    return ({type:'TOGGLE_TODO', payload:id})
}
export const deleteTodo = (id : number) => {
    return ({type:'DELETE_TODO',payload:id})
}