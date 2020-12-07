import React, { Component } from 'react';
class Button extends Component {
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }
    state = { 
        count:this.props.value
     }
     style = {
         fontSize:"10px",
         fontFamily:"cursive"
     }
    
    render() { 
        let classes = this.bclass();
        return ( 
            <div>
                
        <span style={this.style} className={classes}>{this.formatCount()}</span>
        <button className="btn btn-warning m-2 " onClick={this.handleIncrement}>Increment</button>
        <button className="btn btn-danger m-2 " onClick={this.handleDecrement}>Decrement</button>
        <button className="btn btn-danger m-2 " onClick={()=>this.props.onDelete(this.props.id)}>Delete</button>
            
            </div>
            
         );
    }
    bclass() {
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? "danger" : "primary";
        return classes;
    }

    formatCount(){
        return this.state.count === 0 ? "zero":this.state.count;
    }
    // handleIncrement(){
    //     console.log(this)
    // }
    handleIncrement = ()=>{
        this.setState({count:this.state.count+1})
    }
    handleDecrement = ()=>{
        this.setState({count:this.state.count-1})
    }
}
 
export default Button;