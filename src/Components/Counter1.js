import React,{useReducer}from "react"

    const initialState={
        firstCounter:0,
        secondCounter:10
    }
    const reducer=(state=initialState,action)=>{
        switch(action.type){
            case 'increment':
                return{...state,firstCounter:state.firstCounter+action.value}
            case 'decrement':
                return{...state,firstCounter:state.firstCounter-action.value}
            case 'increment2':
              return{...state, secondCounter : state.secondCounter +action.value}
            case 'decrement2':
              return{...state, secondCounter:state.secondCounter-action.value}

            case 'reset':
                return initialState
            default:
                return state
            }



        }
function Counter1(){
    const [count1,dispatch]=useReducer(reducer,initialState)



        
    
        

        
    
  return (
     <div>
        <div>Count-{count1.firstCounter}</div>
        <div>Count-{count1.secondCounter}</div>
        <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
        <button onClick={()=>dispatch({type:'increment',value:5})}>Increment5</button>
        <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement5</button>
        
        <div>
          <button onClick={()=>dispatch({type:'increment2',value:1})}>Increment2</button>
          <button onClick={()=>dispatch({type:'decrement2',value:1})}>Decrement2</button>
           <button onClick={()=>dispatch({type:'reset'})}>Reset</button>

        </div>
       
     </div>

         
        

        
       

  
  );
  }
export default Counter1;