const Perso = () => {
    return (
        <section id="perso" className="flex-container">
            <div className="block-left">
                <h2>Who am I?</h2>
                <h3>Hi, I’m Charles, and I always loved tinkering with tech!</h3>
                <p>I’m a web developer who is also currently studying at HETIC, one of the best rated schools for learning web development in France.</p>
                <p>Having earned multiple degrees in different domains, as well as having worked in different countries, I am a polyvalent and adaptable developer who's always on the lookout for new challenges.</p>

                <h2>What do I do?</h2>
                <h3>Simply put, I create, modify, and maintain websites and apps.</h3>
                <p>Using different techs:</p>
                <ul>
                    <li>React</li>
                    <li>Vue</li>
                    <li>Vite</li>
                    <li>PHP</li>
                    <li>Symfony</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>MySQL / NoSQL</li>
                    <li>HTML & CSS</li>
                </ul>
            </div>

            <div className="block-right">
                <img className="photo" src="src/assets/img/photo.jpg" alt="It's me!"/>
                <p><a href="#contact">Hello there! Want to talk? Fell free to get in touch :)</a></p>
            </div>
        </section>
    )
}

export default Perso;