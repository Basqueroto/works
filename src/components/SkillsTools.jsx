import styles from "./SkillsTools.module.css";

import pythonIcon from "../assets/tools/python.png";
import javascriptIcon from "../assets/tools/JavaScript.png";
import reactIcon from "../assets/tools/react.png";
import javaIcon from "../assets/tools/java.png";
import htmlIcon from "../assets/tools/html.png";
import cssIcon from "../assets/tools/css.png";
import viteIcon from "../assets/tools/vite.png";

export default function SkillsTools() {
    const skills = [
        { name: "Python", icon: pythonIcon }, 
        { name: "JavaScript", icon: javascriptIcon }, 
        { name: "React", icon: reactIcon }, 
        { name: "Java", icon: javaIcon },
        { name: "HTML", icon: htmlIcon },
        { name: "CSS", icon: cssIcon },
        { name: "Vite", icon: viteIcon },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.textLeft}>
                <div className={styles.paragraph}>
                    <h2 className={styles.title}>Skills and tools</h2>
                    <p className={styles.subTitle}>
                        I am passionate about the experience, creating interactive experiences.
                    </p>
                </div>
            </div>
            
            <div className={styles.rightAnimation}>
                {/* TRACK 1: Roda em primeiro plano */}
                <div className={styles.carouselTrack}>
                    {skills.map((skill, index) => (
                        <div key={`track1-${index}`} className={styles.carouselItem}>
                            <img className={styles.iconImages} src={skill.icon} alt={skill.name} />
                        </div>
                    ))}
                </div>

                {/* TRACK 2: Cópia idêntica colada logo abaixo para emenda visual invisível */}
                <div className={styles.carouselTrack} aria-hidden="true">
                    {skills.map((skill, index) => (
                        <div key={`track2-${index}`} className={styles.carouselItem}>
                            <img className={styles.iconImages} src={skill.icon} alt={skill.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}