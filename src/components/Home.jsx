import styles from './Home.module.css';

export function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.animatedItem}>Bem-vindo à <span>Luz de Cristo</span></h1>
      <p className={styles.animatedItem}>Um lugar de paz, fé e espiritualidade.</p>
      <button className={`${styles.animatedItem} ${styles.ctaButton}`}>
        Conheça nossa história
      </button>
      
    </div>
  );
}