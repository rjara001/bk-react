import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Login } from './pages/LoginPage.js';
import { HomePage } from './pages/HomePage.js';

const App = () => {
    // return <h1>This is my first App!</h1>;
    // return <Login></Login>
    return <HomePage></HomePage>
}

createRoot(document.getElementById('root')).render(<App />);