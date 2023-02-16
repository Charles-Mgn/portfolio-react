import React, { useState } from "react";

const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <section id="contact">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit} className="flex-container">
                <div className="flex-container">
                    <input id="name" type="text" className="input-left" placeholder="My name is..." required/>
                    <input id="email" type="text" className="input-right" placeholder="And here's my email" required/>
                </div>
                <textarea id="message" cols="30" rows="10" placeholder="I'm contacting you in order to..." required/>
                <button type="submit">{status}</button>
            </form>
            <div className="social-container flex-container">
                <a href="https://www.linkedin.com/in/charles-m-9014a4151/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/Ezellix" target="_blank"><i className="fa-brands fa-github"></i></a>
            </div>
        </section>
    )
}

export default Contact;