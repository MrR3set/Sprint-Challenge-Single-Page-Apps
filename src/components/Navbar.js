import React from "react";
import { Switch, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="nav-wrapper">      
      <div className="navbar">
          
            <Link to="/" >Home</Link>
            <Link to="characters/1" >Characters</Link>
           <Link to="locations/1" >Locations</Link>
          
      </div>
    </div>
  );
}
