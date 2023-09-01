import './App.css';
import React from 'react'
import HomePage from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App=() => < HomePage/>; 
// function App() {
//   return (

   
//         <Router>
//           <div className="App">
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//             </Routes>
//           </div>
//         </Router>
 
    
//   );
// }

export default App;
