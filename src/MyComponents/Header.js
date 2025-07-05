import React from 'react';
import { Link } from 'react-router-dom';
import todoIcon from './icons8-todo-list-66.png';

export default function Header({title = "title goes here"}) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={todoIcon} alt="Todo Icon" width="35" height="35" />{title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active px-4" aria-current="page" to="/"><strong>Home</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-4" to="/about"><strong >About</strong></Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

