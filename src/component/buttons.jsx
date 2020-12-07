import React, { Component } from 'react';
import Button from './button'
class Buttons extends Component {
    constructor(){
        super();
        console.log("Constructor")
    }
    state = { 
     buttons:[
        {id:1 ,value:4},
        {id:2 ,value:0},
        {id:3 ,value:0},
        {id:4 ,value:0}
        
     ] 
     }
     handleDelete = counterId=>{
         const counters = this.state.buttons.filter(b=> b.id !== counterId);
         this.setState({buttons:counters});
     };
     componentWillMount(props){
        console.log("component will mount");
     }
    render() {
        console.log("I am render"); 
        return ( 
            
            <div>
             {this.state.buttons.map(button=>(
                 <Button onDelete = {this.handleDelete} id={button.id} key={button.id} value = {button.value}  />
             ))}   
            </div>
         );
    }
    componentDidMount(props){
        console.log("component did mount");
     } 
     
}
 
export default Buttons;