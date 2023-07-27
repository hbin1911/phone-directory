import React, { Component } from 'react';
import Header from './Header';
import './Header.css'

    class App extends Component{
      render(){
        return(
          <div>
            <Header/>
            <button>Add</button>
            <div>
              <span>Name</span>
              <span>Phone</span>
            </div>
          </div>
        )
      }
    }


export default App;
