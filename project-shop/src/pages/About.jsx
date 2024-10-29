import React from "react"
import employees from "../assets/ProjectShopEmployees.png"


export default function About() {
    return (
        <div className="about-page">
            <div className="top">
                <div className="employee-picture">
                    <img src={employees} alt="Employees of project shop"/>
                    <div className="legend">
                        <div className="employee1">
                            <p>Eve Webb</p>
                            <p>Designated Broker</p>
                            <p>Managing Member</p>
                        </div>
                        <div className="employee2">
                            <p>Tricia Rochford</p>
                            <p>Managing Member</p>
                        </div>
                    </div>
                </div>
                <div className="employee-info">
                    <h1>Managing Members of Project Shop, LLC</h1>
                    <h2>Eve Webb and Tricia Rochford</h2>
                    <p>
                        Prior to starting Project Shop, LLC, Tricia worked in the real 
                        estate development and management field for over twenty years. 
                        She offers experience in development, land use entitlements, land 
                        sales, due diligence and has served on the boards of several property 
                        owners associations. Tricia is a licensed Arizona REALTOR and the 
                        property manager of a successful retail shopping center.
                    </p>
                <p>
                    Project Shop, LLC, gained a partner in the spring of 2010 when Eve Webb 
                    joined Tricia. She brought to the partnership the management of three 
                    additional retail shopping centers. Eve serves as the firm’s Designated 
                    Broker and is a licensed Arizona REALTOR overseeing the property management 
                    and brokerage activities.
                </p>
                <p>
                    Prior to joining Project Shop, LLC, Eve also worked in the real estate 
                    development and management field for over twenty years. She offers experience 
                    in development, property management, asset sales, due diligence and has 
                    managed and served on the boards of several property owners associations.
                </p>
                <p>
                    During their forty years combined experience in the real estate industry, 
                    Tricia and Eve were involved in the development and management of a wide variety 
                    of award-winning projects which included; retail shopping centers, office buildings 
                    from garden office to mid-rise, industrical and flex-office buildings, master 
                    planned auto parks, inudstrial parks, and office complexes.
                </p>
                </div>
            </div>
        </div>
    )   
}