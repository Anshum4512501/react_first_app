import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        name:"Anshoo",
        count:0

        }
    render() { 
        return ( 
            <div>
        <h1>Hello from {this.state.name}</h1>
        <span>{this.formatCount()}</span>
         <button> Increment</button>
            </div>
         );
    }

    formatCount(){
        const {count} = this.state;

        console.log(this.state.count);
        return count===0? "Zero":count;
    }
}
 
export default Counter;
