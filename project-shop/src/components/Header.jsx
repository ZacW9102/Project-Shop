import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <div className="header">
            <header>
                <Link to="/" className='logo'>
                <span className='logo-project'>Project</span>
                <span className='logo-shop'>Shop</span>
                </Link>
                    <nav>
                        <NavLink 
                            to="/projects"
                            className={({isActive}) => isActive ? "active-link" : null}
                        >
                            Projects
                        </NavLink>
                        <NavLink 
                            to="/listings"
                            className={({isActive}) => isActive ? "active-link" : null}
                        >
                            Listings
                        </NavLink>
                        
                        <NavLink 
                            to="/contact"
                            className={({isActive}) => isActive ? "active-link" : null}
                        >
                            Contact
                        </NavLink>
                    </nav>
            </header>
    <div className="bar"></div>
        </div>
    )

}