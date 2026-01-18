import {React,Component} from 'react';
import Parent from './Components/Parent';
import './App.css'
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      text:"Tanya"
    }
  }
  sendText=(value)=>{
    this.setState({text:value});
  }
  render(){
    return(
      <div>
        <Parent sendText={this.sendText}/>
        <h1>{this.state.text}</h1>
      </div>
    )
    }
}

export default App
