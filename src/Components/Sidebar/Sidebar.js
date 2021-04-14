import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className="p-4 adminPanel">
            <img src={logo} alt=""/>
            <ul>
                <li className="sidebar-menu">
                    <Link to="/"  className="sidebar-menu-link">Home</Link>
                </li>
                <li className="sidebar-menu">
                    <Link to="/manageProducts"  className="sidebar-menu-link">Manage Products</Link>
                </li>
                <li className="sidebar-menu">
                    <Link to="/addProduct" className="sidebar-menu-link">Add Products</Link>
                </li>
            </ul>
            
        </div>
    );
};

export default Sidebar;