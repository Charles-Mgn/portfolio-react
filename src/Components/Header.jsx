const Header = () => {
    function getScrollProgress() {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrolled = scrollTop / (scrollHeight - clientHeight);
        return Math.round(scrolled * 1000) / 10;
    }

    window.addEventListener('scroll', function() {
        const progress = getScrollProgress();
        document.querySelector('.header-progress').style.width = `${progress}%`;
    });

    return (
        <header className="flex-container slide-down">
            <div className="header-progress"></div>
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