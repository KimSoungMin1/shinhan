
import './App.css';
import Layout from './page/Layout';
import Main from './components/Main/Main';
import Card from './page/Card';
import Login from './page/Login';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Main/>}></Route>
              <Route path='/c' element={<Card/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
