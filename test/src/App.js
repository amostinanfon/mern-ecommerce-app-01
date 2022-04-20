import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Pay  from './Pay.js'
import Success from './Success.js'





export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path="/pay" element={<Pay/>} />
        <Route path="/success" element={<Success/>} />
      </Routes>
    </Router>
  )
}


