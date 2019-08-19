import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import StateHook from './Components/StateComponent'
import Persons from './Components/ModuleFourList'
import AddPerson from './Components/AddInTable'


class  App2 extends React.Component
 {


  ToggelPerson=()=>{
    this.setState({ShowPerson:!this.state.ShowPerson})
   
  }
  deleteEventHandler=(index)=>{
    var deletePerson=this.state.persons.slice();
    deletePerson.splice(index,1);
    this.setState({persons:deletePerson});
  }
  addInTableHandler=(name,age)=>{
    
    var person=[...this.state.persons, 
      {
        name:name, 
        age:age,
        id:"person"+this.state.persons.length, 
        buttonId:"b"+this.state.persons.length
     }
  ];
    this.setState({persons:person})
  }
  addNameHandler=(event)=>{
   this.setState({NameValue:event.target.value})
  }
  addAgeHandler=(event)=>{
    this.setState({AgeValue:event.target.value})
  }
   state=
  {
    persons:[{name:"Ali", age:34,id:"person0",buttonId:"b0"},
      {name:"waleed", age:35, id:"person1", buttonId:"b1"}],
      otherData:"",
      ShowPerson:false,
      NameValue:"",
      AgeValue:""
    };
   render(){
  
  let person=null;
  if(this.state.ShowPerson && this.state.persons.length>0){
    person=(
    <div>
      <center>
        <table>
        
       <th>name</th>
       <th>age</th>
       <th>action</th>
    
     {
       this.state.persons.map((personItem, index)=>{
      return(
      <Persons name={personItem.name}
       age={personItem.age} 
       buttonId={personItem.buttonId} 
       buttonIndex={index} 
       id={personItem.id} 
       delete={()=>this.deleteEventHandler(index)}/>)
     }

     )}
      </table>
      </center>
    </div>
    );
  }
    
  return (
    <div className="App">
      {/*implement module three>> state*/}
     <StateHook/>
     <AddPerson 
     Click={()=>this.addInTableHandler(this.state.NameValue,this.state.AgeValue)}
     NameValue={this.addNameHandler}
     AgeValue={this.addAgeHandler}
      />
     <button onClick={this.ToggelPerson}>HideShowPerson</button>
     
     {person}
     {/*implement module four>>list and condition s */}
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
    </div>
  );
}
 }

export default App2;
