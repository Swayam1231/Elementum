import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section}>
      <svg className={styles.squiggle} viewBox="0 0 100 60" fill="none" aria-hidden="true">
        <path
          d="M10 50 C30 10, 70 55, 90 20"
          stroke="#aaa" strokeWidth="1.5" strokeLinecap="round"
        />
      </svg>

      <div className={`${styles.content} reveal`}>
        <h2 className={styles.heading}>
          Subscribe to<br />our newsletter
        </h2>
        <p className={styles.sub}>To make your stay special and even more memorable.</p>
        <button className={styles.btn}>Subscribe Now</button>
      </div>

      <div className={styles.purpleShape} aria-hidden="true" />
    </section>
  );
}
