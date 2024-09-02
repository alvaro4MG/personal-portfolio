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
                        href="https://www.linkedin.com"
                        //href="https://www.linkedin.com/in/álvaro-martínez-garcía-2b8185275"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                        href="https://itch.io/"
                        //href=""
                        aria-label="itch.io"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-itch-io"></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer;