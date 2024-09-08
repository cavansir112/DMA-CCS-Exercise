import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Navbar() {
    const [list, setList] = useState(false);
    const location = useLocation();  

    useEffect(() => {
        
        if (location.pathname == "/admin" || location.pathname == "/admin/" || location.pathname == "/admin/authors" || location.pathname == "/admin/jhaneras") {
            setList(true);
        } else {
            setList(false);
        }
    }, [location.pathname]); 

    return (
        <nav className="navbar navbar-light bg-dark justify-content-between px-5">
            <Link to="/">
                <a className="navbar-brand text-light" onClick={() => setList(false)}>Books</a>
            </Link>
            <ul className="d-flex">
                {list && (
                    <ul className="list-admin">
                        <li><Link to="admin/"><a href="#" className="dropdown-item li-active">Book</a></Link></li>
                        <li><Link to="admin/authors"><a href="#" className="dropdown-item">Author</a></Link></li>
                        <li><Link to="admin/jhaneras"><a href="#" className="dropdown-item">Jhanr</a></Link></li>
                        <Outlet/>
                    </ul>
                )}
                <li>
                    <Link to="/admin">
                        <a className="menu-a" onClick={() => setList(true)}>Admin</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;