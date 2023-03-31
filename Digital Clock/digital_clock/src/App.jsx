import { useState } from 'react'
import './App.css'

function App() {
const time = new Date().toLocaleTimeString();

const [currentTime, SetCurrentTime] = useState(time);

const updateTime = ()=>{
  const newTime = new Date().toLocaleTimeString();
  SetCurrentTime(newTime);
}
setInterval(updateTime, 1000);

  return (
    <div className="App">
      <h1>{currentTime}</h1>
    </div>
  )
}

export default App
