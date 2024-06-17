import React from "react"
import { ChannelContext, UserContext } from "../App";
function ComponentE() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return(
                        <ChannelContext.Consumer>
                            {
                                channel=>{
                                    return(<div>UserContext Name is {user},ChannelContext Name is {channel}</div>)
                                }

                            }
                            
                        </ChannelContext.Consumer>
                    )
                }

            }
            
        </UserContext.Consumer>
      
    </div>
  );
}
export default ComponentE