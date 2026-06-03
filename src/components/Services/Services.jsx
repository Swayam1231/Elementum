import { useEffect, useRef } from 'react';
import styles from './Services.module.css';

const SERVICES = [
  {
    meta: 'Office of multiple\ninterest content',
    title: 'Collaborative & partnership',
  },
  {
    meta: 'The hanger US Air force\ndigital experiments!',
    title: 'We talk about our weight',
  },
  {
    meta: 'Delta faucet content,\nsocial, digital',
    title: 'Piloting digital confidence',
  },
];

function ServiceItem({ meta, title, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={styles.item}
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: `opacity 0.5s ease ${index * 0.12}s, transform 0.5s ease ${index * 0.12}s`,
      }}
    >
      <div className={styles.meta}>
        {meta.split('\n').map((line, i) => (
          <span key={i}>{line}<br /></span>
        ))}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.arrow}>→</div>
    </div>
  );
}

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        <h2 className={`${styles.heading} reveal`}>
          What we <span className={styles.greenHl}>can</span><br />
          offer you!
        </h2>

        <svg className={styles.swoosh} viewBox="0 0 220 65" fill="none" aria-hidden="true">
          <path
            d="M10 55 C50 10, 120 60, 175 22 C195 10, 210 35, 205 55"
            stroke="#E05A5A" strokeWidth="2" strokeLinecap="round"
          />
        </svg>

        <div className={styles.list}>
          {SERVICES.map((svc, i) => (
            <ServiceItem key={i} {...svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
