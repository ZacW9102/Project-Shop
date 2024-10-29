import React from "react"
import logo from "../assets/projectshop.jpg"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-page">
            <div className="intro">
                <img src={logo} alt="logo" className="home-logo"/>
                <div className="intro-paragraph">
                    <h1>Welcome to</h1>
                    <h1>Project Shop, LLC</h1>
                    <p>
                        Project Shop, LLC was created in 2010 to focus on real estate management 
                        and consulting. The current focus of the company is commercial property management.
                    </p>
                </div>
            </div>
            <div className="btns-container">
                <Link to="/contact" className='contact-btn'>Contact Us</Link>
                <Link to="/about" className='about-btn'>Get to Know Us</Link>
            </div>
        </div>
    )   
}