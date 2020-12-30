import React , {Component} from 'react'
import {ThemeContext} from './App'


export default class Counter extends Component {
    constructor(props){
        super(props)

        this.state={
            count:props.initialCount
        }
    }
    changeCount(amount){
        //it is async (setState)
        this.setState({count:this.state.count + amount})
        //using previous state we need to use the previous state
        // this.setState(prevState=>{return {count:prevState.count + amount}})
        // only change sthe kesy that we pass into it
        //uses Object.assign
    }
    render(){
        //only render this coponent and its child components
       return(
           <ThemeContext.Consumer>
               {style=>(
                    <div>
                    <button style={style} onClick={()=>this.changeCount(1)} >+</button>
                    <span>{this.state.count}</span>
                    <button style={style} onClick={()=>{this.changeCount(-1)}}>-</button>
                
                </div>
               )}
               
           </ThemeContext.Consumer>
        
       ) 
    }
}