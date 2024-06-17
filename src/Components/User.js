import React from 'react'


function User(props) {
    const user={
        name:"sowmya",
        email:"ksowmya123@gmail.com"
    }
  return (
    <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
    </div>
  )
}


export default User
