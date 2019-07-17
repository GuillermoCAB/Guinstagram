import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

import Logo from '../assets/logo.svg';
import Camera from '../assets/camera.svg';

export default function Header() {
  return (
    <header id="main-header">
        <div className="header-content">
        <Link to="/">
            <img src={Logo} alt="InstaClone" />
        </Link>
        <Link to="/new">
            <img src={Camera} alt="Enviar " />
        </Link>    
        </div>    
    </header>
  );
}
