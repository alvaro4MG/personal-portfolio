import { skillData } from './skillsList.js';

/*const Skills = () => {
    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <div className="grid-skills">
                <div className="skill-card cplusplus">
                    <i className="fa-solid fa-code"></i>
                    <p>C/C++</p>
                </div>
                <div className="skill-card csharp">
                    <i className="fa-solid fa-code"></i>
                    <p>C#</p>
                </div>
                <div className="skill-card python">
                    <i className="fa-brands fa-python python-icon"></i>
                    <p>Python</p>
                </div>
                <div className="skill-card java">
                    <i className="fa-brands fa-java"></i>
                    <p>Java</p>
                </div>
                <div className="skill-card rust">
                    <i className="fa-brands fa-rust"></i>
                    <p>Rust</p>
                </div>
                <div className="skill-card html">
                    <i className="fa-brands fa-html5 html-icon"></i>
                    <p>HTML</p>
                </div>
                <div className="skill-card css">
                    <i className="fa-brands fa-css3-alt css-icon"></i>
                    <p>CSS</p>
                </div>
                <div className="skill-card js">
                    <i className="fa-brands fa-js-square js-icon"></i>
                    <p>JavaScript</p>
                </div>
                <div className="skill-card unity">
                    <i className="fa-brands fa-unity"></i>
                    <p>Unity</p>
                </div>
                <div className="skill-card laravel">
                    <i className="fa-brands fa-laravel"></i>
                    <p>Laravel</p>
                </div>
                <div className="skill-card next">
                    <i className="fa-brands fa-react"></i>
                    <p>Next.js</p>
                </div>
                <div className="skill-card android">
                    <i className="fa-brands fa-android"></i>
                    <p>Android Studio</p>
                </div>
            </div>
        </div>
    )
}*/

const Skills = () => {
    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <div className="grid-skills">
                {skillData && skillData.map((skill) => (
                    <div className={`skill-card ${skill.type}`} key={skill.id}>
                        <i className={skill.icon}></i>
                        <p>{skill.title}</p>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Skills;