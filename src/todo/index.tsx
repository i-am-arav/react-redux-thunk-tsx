import React from 'react';
import './todo.css'

export interface Itodo {
    value : string;
    done: boolean;
    id : number;
}

export default function Todo() {
    const [todos,setTodos] = React.useState<Itodo[]>([]);
    const [todo,setTodo] = React.useState<Itodo>({value:'',done:false ,id:todos.length + 1})
    React.useEffect(() => {
        setTodo({...todo, value:'', id:todos.length+1})
    },[todos])
    const onFormChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTodo({...todo,value:e.target.value});
    }
    const onButtonClick = (e:React.MouseEvent<HTMLElement>) => {
        if(todos.filter((v:Itodo) => v.id == todo.id).length == 0) {
            if(todo.value) {
                setTodos([...todos,todo]);
            }
        }
        else {
            handleUpdate(todo.id,todo);
        }
        
    }
    const handleUpdate = (id:number, updated:Itodo) => {
        setTodos(todos.map((v:Itodo) => v.id == id ? updated : v));
    }
    const onEditClick = (val: Itodo) => {
        setTodo(val);
    }
    const onDoneChange = (id:number) => {
        const newTodo = todos.filter((v:Itodo) => v.id == id )[0];
        newTodo.done = !newTodo.done;
        handleUpdate(id,newTodo);
         
    }
    const onDeleteChange = (id:number) => {
        const newList = todos.filter((v:Itodo) => v.id !==id);
        setTodos(newList);
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
            <TodoList values={todos} doneChange={onDoneChange} deleteChange={onDeleteChange} editClick={onEditClick} />
        </div>
    </div>
    </>)
}

interface todolistProps {
    values : Itodo[];
    doneChange : (id:number) => void;
    deleteChange : (id:number) => void;
    editClick : (val:Itodo) => void;
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
                <button className='edit-button' onClick={(e) => props.editClick(v)}>Edit</button>
                <button className='delete-button' onClick={(e) => props.deleteChange(v.id)}>Delete</button>
                </div>
            </div>
                )
        })}
        </div> : null
}
    </>)

}