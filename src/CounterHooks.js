import React,{useState,useContext} from 'react'
import { ThemeContext } from './App';

export default function CounterHooks({initialCount}){
    //hooks rely on being called in sameorder
    //also rely on being called the first thing in the app
    //not in ifs loops and functions
    const[count,setCount]=useState(initialCount);
    const style = useContext(ThemeContext)
    return(
        <div>
        <button style={style} onClick={()=>setCount(prevCount=>prevCount+1)}>+</button>
        <span>{count}</span>
        <button style={style} onClick={()=>setCount(prevCount=>prevCount-1)}>-</button>
    
      </div>
    )
}