import React from 'react';
import './App.css';
import Main from "./components/main/Main";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Card from "./components/card/Card";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/card/:username/:reponame" element={<Card/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
