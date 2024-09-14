import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppProvider from './context/app-provider';
import Dashboard from './views/dashboard';
import Landing from './views/landing';
import Login from './views/login';
import './App.css';

const ReadContext = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Landing /> } />
                <Route path="/login" element={ <Login  /> } />
                <Route path="/dashboard" element={ <Dashboard /> } />
            </Routes>
        </Router>
    )
}

const App = () => {
    return (
        <AppProvider>
            <ReadContext />
        </AppProvider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
