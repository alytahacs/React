import React, {useState} from 'react';
import  Dynamic from './Components/DynamicTxt'
import  Result from './Components/ResultTxt'

class AppFinal extends React.Component{
    state=({
        Mydata:'',
        ShowResult:false,
        idDiv:"div"
      
});
    changeHandler=(event)=>{
      //alert(this.state.Mydata.split(''))
        this.setState({Mydata:event.target.value }) ;
        
       }
       clickMeHandler=()=>{
           this.setState({ShowResult:!this.state.ShowResult})
       }
        clickDivHandler=(event, index)=>{
            let data=this.state.Mydata.split('');
            data.splice(index,1);
            data=data.join('');
         this.setState({Mydata:data})
        
        }
   
       
      
    
render(){
    let ShowContent=( <div>
        <Dynamic Event={this.changeHandler} Current={this.state.Mydata}/>
       
        {this.state.Mydata.split('').map((chr,i)=>{
            return(
           <Result SendData={chr} DivId={this.state.idDiv+''+i} Click={(e)=>this.clickDivHandler(e,i)}/>
            )
        })}
        
        </div>)
    return(
        <div>
           {ShowContent}
           </div>

    )
}
}
export default AppFinal;