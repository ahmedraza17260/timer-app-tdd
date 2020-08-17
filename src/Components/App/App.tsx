import React from 'react';
import './App.css';
import Timer from '../Timer/Timer';

function App() {
    return (
        <div>
            <h1>Timer App</h1>
            <div className="App">
                <Timer />
            </div> <br />
            <div className="copyRight">
                <h4> Powered by Ahmed Raza </h4>
                <a href="https://github.com/ahmedraza17260" rel="noopener noreferrer" target="_blank">
                    {" "}
                    <h3> Copyright &copy; 2020 Ahmed Raza </h3>{" "}
                </a>
                <h3> All Right Reserved </h3>
            </div>
        </div>
    );
}

export default App;