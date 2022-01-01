import React from 'react';
import './todo.css'
import { addTodo,deleteTodo,toggleTodo } from '../redux/todo/actionTodo';
import { Itodo } from './index'; 
import {useSelector,useDispatch} from 'react-redux'


export default function TodoRedux() {
   
    const todos = useSelector((state:any) => state.todo);
    const [todo,setTodo] = React.useState<Itodo>({value:'',done:false ,id:todos.length + 1})
    const dispatch = useDispatch();
    
    const onFormChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTodo({...todo,value:e.target.value});
    }
    const onButtonClick = (e:React.MouseEvent<HTMLElement>) => {
        if(todo.value) {
            dispatch(addTodo({...todo, id:todos.length+1}));
            setTodo({value:'',done:false,id:todos.length+1})
        }
    }
  
    const onDoneChange = (id:number) => {
        dispatch(toggleTodo(id));
         
    }
    const onDeleteChange = (id:number) => {
       dispatch(deleteTodo(id))
    }

    return (
    <> 
    
    <div className='parent-container' >
    <h1> Todo List</h1>

        <div className='todo-input-container'>
        <input className='todo-input' onChange={onFormChange} type="text" placeholder='Type Something to add in Todo List'  value={todo.value}/>
        <button className='add-button' onClick={onButtonClick}>Add</button>

        </div>

        <div className='todo-list-container'>
            <TodoList values={todos} doneChange={onDoneChange} deleteChange={onDeleteChange}  />
        </div>
    </div>
    </>)
}

interface todolistProps {
    values : Itodo[];
    doneChange : (id:number) => void;
    deleteChange : (id:number) => void;
   
}

const TodoList = (props:todolistProps) => {
    return (
    <> 
    {props.values.length ? <div className='todolist-container'>
        
        {props.values.map((v:Itodo) => {
            return (
            
            <div className='todo-item'>
                <div className='todo-list-input-container'>
                <input className='checkbox-done' type='checkbox' checked={v.done} onChange={(e) => props.doneChange(v.id)} />
                <label className={v.done ? 'completed' : ''}>{v.value}</label>
                </div>
                <div>
                <button className='edit-button'>Edit</button>
                <button className='delete-button' onClick={(e) => props.deleteChange(v.id)}>Delete</button>
                </div>
            </div>
                )
        })}
        </div> : null
}
    </>)

}