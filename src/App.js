


import React from 'react'


import ComponentD from './Components/ComponentD'
import User from './Components/User'
import withLoader from './Components/withLoader'
export default function App() {
  const UserContext=React.createContext()

  const UserwithLoad = withLoader(User)
  return (
    <div>
      
     <UserContext.Provider value={"sowmya"}>
      <ComponentD/>

      </UserContext.Provider>
    </div>
  )
}

