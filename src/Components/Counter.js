import React,{useReducer} from 'react'
const initialState=0;
const reducer=(state=initialState,action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return state
        default:
            return initialState

    }
}

function Counter() {
    const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <div>Count-{count}</div>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('rest')}>Reset</button>

    </div>
  );
}
export default Counter;