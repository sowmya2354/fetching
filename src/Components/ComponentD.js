import { UserContext } from '.ComponentF.js';
function ComponentD() {
  return (
    <UserContext.Consumer>
        {value=>
            <div>
                Value-{value}
            </div>
        }
    </UserContext.Consumer>
  );
}
export default ComponentD