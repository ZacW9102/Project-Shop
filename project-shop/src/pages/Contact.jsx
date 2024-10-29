import React from "react"

const handleCopy = (event) => {
    const textToCopy = event.target.innerText 
    navigator.clipboard.writeText(textToCopy)
}


export default function Contact() {
    return (
        <div className="contact-page">
            <h1>We'd love to hear from you!</h1>
            <h2>Project Shop</h2>
            <div className="contacts-container">
                <div className="contact">
                    <h3>PO Box 926</h3>
                    <p onClick={handleCopy}>Scottsdale AZ 85252</p>
                </div>
                <div className="contact">
                    <h3>Eve Webb</h3>
                    <p onClick={handleCopy}>602-390-2140 direct</p>
                    <p onClick={handleCopy}>602-926-2659 efax </p>
                    <p onClick={handleCopy}>eve.webb@projectshopllc.com</p>
                </div>
                <div className="contact">
                    <h3>Tricia Rochford</h3>
                    <p onClick={handleCopy}>602-390-6642 direct</p>
                    <p onClick={handleCopy}>602-926-2659 efax</p>
                    <p onClick={handleCopy}>tricia.rochford@projectshopllc.com</p>
                </div>
            </div>
        </div>
    )   
}