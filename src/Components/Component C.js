import  {UserContext} from "../App";
function ComponentC() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user=>{
                    return(<div> User Context {user}</div>)
                }
            }

        </UserContext.Consumer>
      
    </div>
  );
}
export default ComponentC