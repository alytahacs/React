import React, {useState} from 'react';
import  Dynamic from './Components/DynamicTxt'
import  Result from './Components/ResultTxt'
class App extends React.Component{
    state=({
        Mydata:'',
        ShowResult:false
      
});
    changeHandler=(event, data)=>{
      
     this.setState({Mydata:event.target.value}) ;
     
    }
    clickMeHandler=()=>{
        this.setState({ShowResult:!this.state.ShowResult})
    }

    
   
render(){
    let MyComponent ='';
    let characters=this.state.Mydata.split('').map((char)=>{
        return(
       <Result SendData={char}/>
    )})
    if(this.state.ShowResult){
        MyComponent=(
            <div>
            <Dynamic Event={(e)=>this.changeHandler(e,'ali')} />
           {characters}
            
            </div>)

           
        
        
    }

return (
    <div>
    <button onClick={this.clickMeHandler}>ClickMe</button>
    {MyComponent}
    </div>
)
};
}
export default App;