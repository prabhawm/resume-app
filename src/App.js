import React, { Component } from 'react';
import logo from './logo.svg';
import resume from './PVP_DevOps_L2.pdf'
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
        
         
          
          <p>
             {/* Edit <code>src/App.js</code> and save to reload. */}             
              
           
            <iframe title='document' src={resume} width='1366px' height='623px' frameborder='0' className="CV"> 
            </iframe>
          </p>
         
          
        </header>
      </div>
    );
  }
}

export default App;
