import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/profile.jpg' className="profile-img" width={300} height={300} alt="Álvaro's personal headshot" />
            <div className="hero-text">
                <h1>Hey, I'm Álvaro 👋</h1>
                <p>
                    I'm a final-year Computer Engineering student and a software and game developer from Spain. This web portfolio showcases 
                    my projects, skills and progress for all my learning in game development. If you have any advice, questions or 
                    offers, please feel free to check out my resume and contact me.
                </p>
                <div className="social-icons">
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
                        href="https://alvaro4mg.itch.io"
                        aria-label="itch.io"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-itch-io"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;