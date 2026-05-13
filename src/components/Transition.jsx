import styles from './Transition.module.css';

export default function Transition() {
    return (
        <div className={styles.container}>
            <div className={styles.about}>
                <p>About me</p>
            </div>
            <div className={styles.content}>
                <div className={styles.information}>

                </div>
            </div>
        </div>
    )
}