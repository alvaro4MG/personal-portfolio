const Footer = () => {
    return (
        <>
            <hr />
            <div className="footer-container">
                <p>
                    &copy; {new Date().getFullYear()} Álvaro's Portfolio
                </p>
                <div className="social_icons">
                    <a
                        href="mailto:alvaromg8m@gmail.com"
                        aria-label="Gmail"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-regular fa-envelope"></i>
                    </a>
                    <a
                        href="https://github.com/alvaro4mg"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/alvaro-martinez-garcia-game-dev/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                        href="https://alvaro4mg.itch.io"
                        aria-label="itch.io"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-itch-io"></i>
                    </a>
                    <a
                        href="https://bsky.app/profile/pikalvaro.bsky.social"
                        aria-label="Bluesky"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-bluesky"></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer;