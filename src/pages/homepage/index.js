import React from "react";
import Estudents from "./components/estudent";
import Teachers from "./components/teacher";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Homepage() {
    return (

        <div className="container">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Teach-out</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Home
                                        <span className="visually-hidden">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/crud">Crud</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/home/estudent">Estudiantes</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/home/estudent">Profesores</a>
                                </li>
                            </ul>
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Login</button>
                            <a href="/login"></a>
                        </div>
                    </div>
                </nav>
            </div>

            <Routes>
                <Route path='/home/estudent' element={
                    <div> <Estudents /> </div>
                } />
                <Route path='/home/teacher' element={
                    <div> <Teachers /> </div>
                } />
            </Routes>


        </div>

    );
}
export default Homepage;