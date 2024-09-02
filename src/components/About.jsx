import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    {/*<p>
                        As a developer, I have always been passionate about creating elegant and effective solutions to complex problems. I have a strong 
                        foundation in software development, with a focus on web technologies such as HTML, CSS, and JavaScript. I enjoy working on both 
                        the front-end and back-end of applications, and I am always looking for ways to optimize performance, improve user experience, and 
                        ensure the highest level of code quality.
                    </p>
                    <p>Throughout my career, I have worked on a wide range of projects, from simple static websites to complex enterprise-level 
                        applications. I am experienced in working with a variety of development tools and frameworks, including React, Angular, Vue.js, 
                        Node.js, and Laravel. I am always eager to learn and explore new technologies, and I am constantly seeking out opportunities to 
                        improve my skills and knowledge.
                    </p>*/}
                    <p>Since I was a kid, I have always been passionate about puzzles, problem solving, mathematics and logic. After finding out what programming was, 
                        I discovered my dream career and decided to pursue a degree in Computer Engineering. Since I wanted to learn more and challenge myself, I decided to 
                        study the International Baccalaureate alongside the Spanish Science Baccalaureate. Then I decided to study Computer Engineering at 
                        the University of Alicante (Spain) as they offer a special reduced group for bilingual High Academic Performance students called the ARA group where 
                        I could receive a high-quality education on programming.
                    </p> 
                    <p>Throughout these years, I have learned many different technologies and disciplines about Computer Engineering. My passion for both solving 
                        different problems and videogames made me realize that a career at game development was my dream job and now I'm focused on learning 
                        specific techonologies like Unity, Unreal Engine and Godot. My years of study pursuing a Bachelor's degree in Computer Engineering have 
                        provided me with the knowledge and foundation to confidently work with a wide range of languages and technologies.
                    </p>
                </div>
                <div className="about-img">
                    <Image src='/images/about.jpeg' className="profile-img" width={300} height={500} alt="Alvaro and animal relaxing and having fun" />
                </div>
            </div>
        </div>

    )
}

export default About;