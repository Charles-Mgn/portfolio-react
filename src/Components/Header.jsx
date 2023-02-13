const Header = () => {
    return (
        <header className="flex-container slide-down">
            <a href="/" className="home-link">Charles Mangin.</a>
            <nav>
                <ul>
                    <a href="#projects"><li>Projects</li></a>
                    <a href="#perso"><li>Who am I?</li></a>
                    <a href="#contact"><li>Contact</li></a>
                </ul>
            </nav>
        </header>
    )
}

export default Header;