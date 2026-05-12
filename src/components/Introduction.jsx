import { useEffect, useState } from "react";
import MoleculeBackground from "../components/MoleculeBackground";
import styles from "./Introduction.module.css";

export default function Introduction(){

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

            <MoleculeBackground/>

            <div className={styles.textBox}>
                Code is
                <span className={styles.word}>
                    {" " + text}
                </span>
                <span className={styles.cursor}>|</span>
            </div>

        </div>
    );
}