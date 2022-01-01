import React from 'react'
import './counter.css'
import { increment,decrement,reset } from '../redux/counter/counterAction'
import {useSelector, useDispatch} from 'react-redux'

const CounterRedux = () => {
    const counterValue : number = useSelector((state:any) => { 
        return state.counter;
    });
    const dispatch = useDispatch();

    return(
        <>
        <div className='parent'>
        <h4 className='title'>Counter</h4>
        <div className='counter'>
            
            <button className='counter-button' name='decrement' onClick={() => dispatch(decrement())}>-</button>
            <h4>{counterValue}</h4>
            <button className='counter-button' name='increment' onClick={() => dispatch(increment())}>+</button>
            </div>
            
            </div>
            
            
        </>
    )
}
export default CounterRedux;