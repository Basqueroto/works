import { useEffect, useState } from "react";
import MoleculeBackground from "../components/MoleculeBackground";
import styles from "./Introduction.module.css";
import GetInButton from "./GetInButton.jsx";

export default function Introduction({idiom, setIdiom}){

    const words = [
        "Journey",
        "Challenge",
        "Future",
        "Adventure",
        "Discovery"
    ];

    const [wordIndex,setWordIndex] = useState(0);
    const [text,setText] = useState("");
    const [isDeleting,setIsDeleting] = useState(false);

    useEffect(()=>{

        const currentWord = words[wordIndex];

        const typingSpeed = isDeleting ? 60 : 120;

        const timeout = setTimeout(()=>{

            if(!isDeleting){
                setText(currentWord.substring(0, text.length + 1));

                if(text === currentWord){
                    setTimeout(()=> setIsDeleting(true), 1200);
                }
            }else{
                setText(currentWord.substring(0, text.length - 1));

                if(text === ""){
                    setIsDeleting(false);
                    setWordIndex((prev)=> (prev + 1) % words.length);
                }
            }

        },typingSpeed);

        return ()=> clearTimeout(timeout);

    },[text,isDeleting,wordIndex]);

    return(
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.languagueSelection}>
                    <button
                        onClick={() => setIdiom("PT")}
                        className={`${styles.button} ${idiom === "PT" ? styles.active : styles.inactive}`}
                    >
                        PT
                    </button>

                    <p>|</p>

                    <button
                        onClick={() => setIdiom("EN")}
                        className={`${styles.button} ${idiom === "EN" ? styles.active : styles.inactive}`}
                    >
                        EN
                    </button>
                </div>
            </header>

            <MoleculeBackground/>

            <div className={styles.textBox}>
                <p className={styles.textTitle}>Hello</p>
                <p className={styles.textTitle}>I am Felipe</p>
                <p className={styles.textTitle}>Fullstack developer</p>
                <p className={styles.textSubTitle}>Passionate for the expericence</p>
                <div className={styles.btnDiv}>
                    <GetInButton/>
                </div>
            </div>

        </div>
    );
}