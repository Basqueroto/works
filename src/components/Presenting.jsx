import styles from './Presenting.module.css';

export default function Presenting() {
    return (
        <div className={styles.background}>
            <div className={styles.leftText}>
                <p className={styles.textTitle}>Hello</p>
                <p className={styles.textTitle}>I am Felipe</p>
                <p className={styles.textTitle}>Fullstack developer</p>
                <p className={styles.textSubTitle}>Passionate for the expericence</p>
            </div>
            <div className={styles.handAnimation}>
                <div className={styles.color}>

                </div>
            </div>
        </div>
    )
}