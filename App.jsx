import { useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Header from './components/Header'
import Github from './components/Github'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Router>
     <Header />
    <Routes>
      <Route path = '/'  element = {<Home/>}/>
      <Route path = '/Contact' element = {<Contact/>} />
      <Route path = '/About' element = {<About/>}/>
      <Route path = '/Github' element = {<Github/>}/>
      {/* <Rotue element = {`google.com`} />  not worked*/}
    </Routes>
     </Router>
    </>
  )
}

export default App
