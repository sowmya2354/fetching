import React, { useMemo, useState } from 'react';
function Count() {
    const [count,setCount]=useState(0);
    const [number,setNumber]=useState(5);
    const Factorial = useMemo(()=>fact(number,[number]))

  return (
    <center>
        <div>

       Count -{count}<br/>
       Facorial-{Factorial}<br/>
      <button onClick={()=>setCount(count+1)}>Increment Count</button><br/>
       <button onClick={()=>setNumber(number+1)}>Increment Factorial</button>

     
    </div>


    </center>
   
  );
}
const fact=(n)=>{
    let answer=1;
    for(var i=n;i>=1;i--){
        answer=answer*i;
    }
    console.log("Factorial calling")
    return answer
}
export default Count