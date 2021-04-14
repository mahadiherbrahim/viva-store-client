import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    return (
        <div className="container p-2 viva-header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt=""/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="nav navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link acitve">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addProduct" className="nav-link">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/order" className="nav-link">Order</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/deals" className="nav-link">Deals</Link>
                            </li>
                            <li className="nav-item">
                                {loggedInUser.email ? <Link to="/" className="btn btn-info nav-link">{<li>{loggedInUser.email}</li> }</Link> : <Link to="/login" className="btn btn-info nav-link">Login</Link>} 
                            </li>
                            {/* <li>{loggedInUser.email}</li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;