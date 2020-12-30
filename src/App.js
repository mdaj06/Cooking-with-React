import React,{useState} from 'react'
import Counter from './Counter'
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext()// context does not re render app



function App() {
  const[theme,setTheme] = useState('yellow')
  return (
    <ThemeContext.Provider value={{backgroundColor:theme}}>
    <h1>Counter Class</h1>
    <Counter initialCount={0}/> 
    <h1>Counter Hooks</h1>  
    <CounterHooks initialCount={0}/>
    <button onClick={()=>setTheme(prevTheme=>{
      return prevTheme==='red'?'blue':'red'
    })}>Toggle theme</button>
  </ThemeContext.Provider>
  );
}

export default App;
