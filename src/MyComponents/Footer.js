import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-dark text-light py-2">
      <p className="text-center mb-0">
        © {new Date().getFullYear()} Manmeet •{" "}
        <a
          href="https://github.com/Mann0001/Todo-App"
          className="text-decoration-none text-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          todos.com <i className="bi bi-github" style={{ fontSize: "0.9rem" }}></i>
        </a>
      </p>
    </footer>
  );
};
