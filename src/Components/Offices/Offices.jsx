import React from "react";
import "./Offices.css";

const Offices = () => {
    const officeLocations = [
        {
            city: "New York",
            address: "123 Fifth Avenue, Manhattan, NY 10010",
            phone: "+1 212-555-0199",
            email: "nyoffice@funshop.com",
        },
        {
            city: "London",
            address: "45 High Street, Soho, London W1D 4EF",
            phone: "+44 20 7946 0958",
            email: "londonoffice@funshop.com",
        },
        {
            city: "Sydney",
            address: "89 Market Street, Sydney NSW 2000",
            phone: "+61 2 9374 0958",
            email: "sydneyoffice@funshop.com",
        },
        {
            city: "Tokyo",
            address: "1-1 Marunouchi, Chiyoda, Tokyo 100-0005",
            phone: "+81 3-3212-3456",
            email: "tokyooffice@funshop.com",
        },
        {
            city: "Dubai",
            address: "301 Business Bay Tower, Dubai, UAE",
            phone: "+971 4 567 8901",
            email: "dubaioffice@funshop.com",
        },
        // Domestic offices in India
        {
            city: "Mumbai",
            address: "Flat No. 101, Oberoi Sky Garden, Andheri, Mumbai, Maharashtra 400053",
            phone: "+91 22 4956 8920",
            email: "mumbai@funshop.com",
        },
        {
            city: "Bangalore",
            address: "Office No. 302, UB City Mall, Vittal Mallya Road, Bangalore, Karnataka 560001",
            phone: "+91 80 2308 9478",
            email: "bangalore@funshop.com",
        },
        {
            city: "Delhi",
            address: "A-34, Connaught Place, New Delhi 110001",
            phone: "+91 11 4747 2215",
            email: "delhi@funshop.com",
        },
        {
            city: "Chennai",
            address: "Tech Park Tower, Mount Road, Chennai, Tamil Nadu 600032",
            phone: "+91 44 2827 9944",
            email: "chennai@funshop.com",
        },
        {
            city: "Hyderabad",
            address: "Plot No. 45, Banjara Hills, Hyderabad, Telangana 500034",
            phone: "+91 40 2955 7845",
            email: "hyderabad@funshop.com",
        },
    ];

    return (
        <div className="offices-page">
            <header className="offices-header">
                <h1>Our  Offices</h1>
                <p>
                    FunShop operates across the globe! Find us at one of our key locations to connect, collaborate, or simply say hi.
                </p>
            </header>

            <div className="offices-grid">
                {officeLocations.map((office, index) => (
                    <div className="office-card" key={index}>
                        <h2>{office.city}</h2>
                        <p><strong>Address:</strong> {office.address}</p>
                        <p><strong>Phone:</strong> {office.phone}</p>
                        <p><strong>Email:</strong> <a href={`mailto:${office.email}`}>{office.email}</a></p>
                    </div>
                ))}
            </div>

            <footer className="offices-footer">
                <p>We’re just a call or email away. Let’s stay connected!</p>
            </footer>
        </div>
    );
};

export default Offices;
