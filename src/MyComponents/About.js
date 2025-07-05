import React from 'react';

export const About = () => {
    
    return (
        <div className="mt-2">
            <div className="p-2">
                <h2 className="mb-3 text-primary">About This App</h2>
                <p className="lead">
                    <strong>Todo-app</strong> is a clean and lightweight To-Do List application built using <strong>React</strong>, <strong>Bootstrap</strong>, and core web technologies like <strong>JavaScript</strong>, <strong>HTML</strong>, and <strong>CSS</strong>. It’s designed to provide a smooth and minimal task management experience with just the essential features.
                </p>
                <h5 className="mt-4">Key Features:</h5>
                <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">✅ <strong>Add a Todo</strong>: Create new tasks with a title and description.</li>
                    <li className="list-group-item">📝 <strong>Todo Task & Description</strong>: Include detailed notes for each task.</li>
                    <li className="list-group-item">📋 <strong>Todos List</strong>: View all tasks in a structured and responsive layout.</li>
                    <li className="list-group-item">🗑️ <strong>Delete</strong>: Easily remove tasks once completed or no longer needed.</li>
                </ul>
                <p className="text-muted">
                    This app was developed as a hands-on project to practice React fundamentals, component-based architecture, and Bootstrap styling. It demonstrates how a simple, clean UI combined with modern frontend tools can result in a practical and effective application.
                </p>
                <p className="text-end text-secondary">
                    Made by <strong>Mann</strong>
                </p>
            </div>
        </div>
    );
};
