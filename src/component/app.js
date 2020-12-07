import React, { Component } from 'react';
import Navbar from './navbar';
import Buttons from './buttons';
class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar />
                <Buttons />
            </div>
         );
    }
}
 
export default App;
