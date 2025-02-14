import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 useEffect(()=>{

setInterval(() => {
 // @ts-expect-error mjjjj
 window.electron.subscribeStatistics(stats=>console.log(stats))

}, 500);
 },[])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          yayayyayya
        </a>
      </div>
      i like a sugar mommy
    
     
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
