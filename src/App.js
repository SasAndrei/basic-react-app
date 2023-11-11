import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="w-full ">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LoginPage/>}/>
              <Route path="/admin-page" element={<AdminPage/>}/>
              <Route path="/main-page" element={<MainPage/>}/>
          </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
