import React from 'react'
const Result=(props)=>{
    let result ='Your input is too short'
    if(props.SendData.length>=5){
        result='your input is enough long'
    }
    return(
        <div>
            <p> {result} {props.SendData}</p>
        </div>
    )
}
export default Result;