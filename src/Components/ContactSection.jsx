const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <form action="" className="flex-container">
                <div className="flex-container">
                    <input type="text" className="input-left" placeholder="My name is..."/>
                    <input type="text" className="input-right" placeholder="And here's my email"/>
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder="I'm contacting you in order to"></textarea>
                <input type="submit" value="Envoyer"/>
            </form>
            <div className="social-container flex-container">
                <a href="https://www.linkedin.com/in/charles-m-9014a4151/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/Ezellix" target="_blank"><i className="fa-brands fa-github"></i></a>
            </div>
        </section>
    )
}

export default Contact;