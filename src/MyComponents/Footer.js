import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-dark text-light py-2">
      <p className="text-center mb-0">
        © {new Date().getFullYear()} Manmeet •{" "}
        <a
          href="https://manmeet.todos.com"
          className="text-decoration-none text-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          todos.com
        </a>
      </p>
    </footer>
  );
};
