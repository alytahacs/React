import React from 'react';

 
const ListCondition=(props)=>{
    return(
    <tr>
        <td> {props.name}</td>
        <td>{props.age}</td>
        <td><button onClick={props.delete} id={props.buttonId}>مسح</button></td>
    </tr>
    );
}

export default ListCondition
