import React from "react"
import {useEffect,useReducer} from "react"
import axios from 'axios'
const initialState={
    loading:true,
    error:'',
    post : {}
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'FETCH-SUCCESS':
            return{
                loading:false,
                post:action.payload,
                error:''

            }
        case 'FETCH-FAILURE':
            return{
                loading:false,
                post:{},
                error:'error occured'
            }
        default:
            return state
           



    }
}
function FetchReducer() {
    const [state,dispatch]=useReducer(reducer,initialState)
     useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            dispatch({type:'FETCH-SUCCESS',payload:response.data})
           
        })
        .catch(error=>{
            dispatch({type:'FETCH-FAILURE'})
            
        })

    },[])

  return (
    <div>
        {state.loading ? 'Loading':  state.post.title}
        {state.error ? 'error' : state.error}
      
    </div>
  );
}
export default FetchReducer