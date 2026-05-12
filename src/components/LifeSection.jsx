import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styles from "./LifeSection.module.css";
import PlantExperience from "./models/PlantExperience.jsx";

function Plant(){

    return(
        <mesh rotation={[0,0,0]}>
            <coneGeometry args={[1,2,32]} />
            <meshStandardMaterial color="white"/>
        </mesh>
    )

}

export default function LifeSection(){

    return(

        <section className={styles.container}>

            <figure className={styles.left}>
                <PlantExperience></PlantExperience>
            </figure>

            <div className={styles.right}>

                <h1>Code is life</h1>

            </div>

        </section>

    )

}