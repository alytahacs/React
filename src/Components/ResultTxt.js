import React from 'react'
const Result=(props)=>{
    let result ='Your input is too short'
    if(props.SendData.length>=5){
        result='your input is enough long'
    }
    let style={display:"inline-Block", width:"10%", border:"1px solid #eee"}
    return(
        <div 
       
        style={style} 
        id={props.DivId}>

            <button  onClick={props.Click}> {props.SendData} </button>
        </div>
    )
}
export default Result;