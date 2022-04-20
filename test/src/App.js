import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Pay  from './Pay.js'
import Success from './Success.js'





export default function App() {
  return (
    <Router>
      <h1>I love this game</h1>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path="/pay" element={<Pay/>} />
        <Route path="/success" element={<Success/>} />
      </Routes>
    </Router>
  )
}
