import React from "react"
import { useState,useEffect } from "react"
import axios from "axios"
function Fetching() {
    const [post,setPost]=useState({})
    const [id,setId]=useState(1)
    const [idFromButtonClick,setidFromButtonClick]=useState(2)
    const handleClick=()=>{
        setidFromButtonClick(id)
    }
        useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(response=>{
            setPost(response.data)
        })
        .catch(error=>{
            console.log("error")
        })
    },[idFromButtonClick])
  return (
    <div>
        <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
        <button type="button" value={idFromButtonClick} onClick={handleClick}>Click Me</button>
        <li>{post.title}</li>
        
      
    </div>
  );
}
export default Fetching