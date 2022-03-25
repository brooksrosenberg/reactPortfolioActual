import "./header.css";
import Nav from './NavTabs.js'
import React from "react";

export default function Header() {
  return (
    <header className="header">
        <h1> Brooks Rosenberg Porfolio</h1>
        <nav>
            {Nav}
        </nav>
      
    </header>
  );
}
