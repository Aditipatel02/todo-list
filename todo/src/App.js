import React,{Component} from 'react';
import './App.css';

class App extends Component{
  render(){
    return(
<header>
   <form id="to-do-form">
<input type="text" placeholder="Enter text"></input>
<button type="submit">Add</button>
   </form>
</header>
    );
  }
}

export default App;
