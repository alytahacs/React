import React from 'react';
const addDataStep1=(props)=>{
 return(
 <div>
     <div>add your name <input type="text" id="name" onBlur={props.NameValue} ></input></div>
     <div>add your age<input type="text" id="age" onBlur={props.AgeValue}></input> </div>
     <div><button onClick={props.Click}>add</button></div>
 </div>
 );

 
}
export default addDataStep1;