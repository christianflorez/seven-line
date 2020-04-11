import React from "react";

function Quote({ children, author }) {
  return (
    <blockquote className="blockquote mb-0">
      <p>{children}</p>
      <footer className="blockquote-footer">{author}</footer>
    </blockquote>
  );
}

export default Quote;
