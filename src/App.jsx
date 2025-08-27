import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import Store from './utils/Redux/store'
import Body from './assets/components/Body'
import { BrowserRouter } from 'react-router'


function App() {
  const [count, setCount] = useState(0)

  return (


   
    <Provider store={Store}>
      <Body/>
    </Provider>

    
  )
}

export default App


