import React, { useState } from "react";

const Contact = () => {
    const [status, setStatus] = useState("Submit");

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const data = new FormData();
        data.append("name", e.target.name.value);
        data.append("email", e.target.email.value);
        data.append("message", e.target.message.value);

        fetch("https://www.charlesmangin.fr/proxy.php", {
            method: "POST",
            body: data,
        })
            .then((res) => {
                setStatus("Sent!");
            })
            .catch((err) => {
                setStatus("Failed to send");
            });
    };

    return (
        <section id="contact">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit} className="flex-container">
                <div className="flex-container">
                    <input id="name" type="text" className="input-left" placeholder="My name is..." required/>
                    <input id="email" type="text" className="input-right" placeholder="And my email..." required/>
                </div>
                <textarea id="message" cols="30" rows="10" placeholder="How's it going?" required/>
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