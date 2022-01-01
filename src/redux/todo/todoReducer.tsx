import { Itodo } from "../../todo"

interface Iaction {
    type:string;
    payload?:any;
}
export default function(state:Itodo[]=[], action:Iaction) {
    switch(action.type) {
        case 'ADD_TODO' : {
            const pay:Itodo = action.payload
            return [...state,pay]
        }
        case 'TOGGLE_TODO' : {
            const id = action.payload;
            const newTodo = state.filter((v:Itodo) => v.id===id)[0];
            newTodo.done =!newTodo.done;
             return state.map((v:Itodo) => v.id===id ? newTodo : v);
        }
        case 'DELETE_TODO' : {
            const id = action.payload;
            return [...state.filter((v:Itodo) => v.id !== id)];
        }
        default : {
            return state;
        }
    }
}

