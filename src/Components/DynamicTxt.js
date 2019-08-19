import React from 'react'
const DynamicText=(props)=>{
    return(
        <div>
            <input type="text" onChange={props.Event}  value={props.Current}></input>
        </div>
    )
}
export default DynamicText;