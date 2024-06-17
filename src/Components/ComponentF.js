import React,{useContext} from "react"
import { UserContext,ChannelContext,MyCarContext } from "../App";
function ComponentF() {
    const user=useContext(UserContext)
    const channel=useContext(ChannelContext)
    const carmodel=useContext(MyCarContext)
  return (
    <div>
        User Name is {user} <br/> Channel is {channel}<br/> Model is {carmodel}
      
    </div>
  );
}
export default ComponentF;