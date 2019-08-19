import UserInput from './UserInput'
import UserOutPut from './UserOutput'
import React, {useState} from 'react';

const Implement=()=>{
  const[myUserName,setUserName]= useState({userName:""});
const onchangeHandler=(event)=>{
  setUserName({userName:event.target.value})
}
return (
    <div>
         <UserInput Change={onchangeHandler}/>
         <UserOutPut userName={myUserName.userName}/>
    </div>
)
}
export default Implement;