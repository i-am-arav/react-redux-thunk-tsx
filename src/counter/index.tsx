import React from 'react'
import './counter.css'



export default function Counter() {
    const [count,setCount] = React.useState<number>(0);
    const [showSnack,setShowSnack] = React.useState<boolean>(false);
    React.useEffect(() => {
        if(showSnack) {
            setTimeout(() => {
                    setShowSnack(false)
            },3000)
        }
    },[showSnack])
        const onButtonClick = (e:React.MouseEvent<HTMLElement>) => {
            let event : any = e.target;
            if(event.name=== 'increment') {
                setCount((prev) => prev+1)
            } 
            else if(count < 1) {
                setShowSnack(true);
            }
            else if(event.name === 'decrement') {
                setCount((prev) => prev-1)
            }    
            
        }
    
        return (
            <>
            <div className='parent'>
            <h4 className='title'>Counter</h4>
            <div className='counter'>
                
                <button className='counter-button' name='decrement' onClick={onButtonClick}>-</button>
                <h4>{count}</h4>
                <button className='counter-button' name='increment' onClick={onButtonClick}>+</button>
                </div>
                {showSnack && <div className='snackbar'>Can't decrease further</div>}
                </div>
                
                
            </>
        )
}
