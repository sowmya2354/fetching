import React,{useReducer} from "react"
const initialState=0
const reducer=(state=initialState,action)=>{
    switch (action) {
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
        
    }

}
function Counter3() {
    const [count,dispatch]=useReducer(reducer,initialState)
    const [CounterTwo,dispatchTwo]=useReducer(reducer,initialState)
  return (
    <div>
        Count-{count}
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
        <div>
            CounterTwo-{CounterTwo}
            <button onClick={()=>dispatchTwo('increment')}>Increment2</button>
            <button onClick={()=>dispatchTwo('decrement')}>Decrement2</button>
            <button onClick={()=>dispatchTwo('reset')}>Reset</button>

        </div>
        
      
    </div>
  );
}
export default Counter3