import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const handleClick = (path : string) => {
        navigate(path);
    }
  return (
    <nav>
        <ul>
            <li onClick={() => handleClick("/")}>Home</li>
            <li onClick={() => handleClick("/navbar")}>Navbar</li>
            <li onClick={() => handleClick("/laptop")}>Laptop</li>
            <li onClick={() => handleClick("/list")}>List</li>
        </ul>
    </nav>
  )
}
