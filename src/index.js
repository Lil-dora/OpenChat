import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//protected routes
import {ProtectedRoute} from './Auth/projected_routes';

//components
import Header from './Components/header';
//pages
import Login from './Pages/login/view';
import Private from './Pages/private/view';
import Public from './Pages/public/view';

const Main = () =>{
  return(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route element={<ProtectedRoute/>}>
        <Route path="/private" element={<Private/>}/>
        <Route path="/public" element={<Public/>}/>
      </Route>
    </Routes>
  </BrowserRouter>)
}

ReactDOM.render(
    <Main />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
