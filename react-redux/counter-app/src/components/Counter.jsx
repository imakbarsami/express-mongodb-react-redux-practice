import {} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../services/action/counterAction'


/*
0. install redux, react-redux
1. state : counterReducer.js
2. constant : counterConstant.js
3. action: counterAction.js
4. reducer : counterReducer.js
5. store : counterStore.js
6. import prodive & add store : main.jsx
7. import useDispatch() & useSelector() : Counter.jsx
*/

const Counter = () => {

    const count=useSelector((state)=>state.count)
    
    const dispatach=useDispatch()

    const handleIncrement=()=>{
       dispatach(incrementCounter())
    }

    const handleDecrement=()=>{
        dispatach(decrementCounter())
    }


    const handleReset=()=>{
       dispatach(resetCounter())
    }
  return (
    <div>
        <h3>Counter : {count}</h3>
        <div className="counter-buttons">
            <button className="btn btn-increment" onClick={handleIncrement}>Increment</button>
            <button className="btn btn-decrement" onClick={handleDecrement}>Decrement</button>
            <button className="btn btn-reset" onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

export default Counter