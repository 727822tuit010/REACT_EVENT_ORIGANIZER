 import Login from "./Component/Login.jsx";
import Sign from "./Component/Sign.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/Sign" element={<Sign/>}></Route>
      </Routes></BrowserRouter>
  );

}

export default App;
