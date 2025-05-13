import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Clock} from './components/components'
function App() {
  return (
    <>
      <div className="h-full w-[100vw] m-0 p-0 grid grid-cols-3 justify-items-center gap-[1rem]">
        <div id="starting-grid">
          <div
            className="font-inter font-bold text-[72px] leading-[86px] text-[#222222] mb-4 ">
              PomPomPomo!
          </div>
        </div>
        <div id ="middle-grid">
          <Clock/>
        </div>
        
        
      </div>

    </>
  )
}

export default App
