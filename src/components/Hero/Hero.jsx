import 'animate.css';
import styles from './Hero.module.css';

const avatars = [
  { color: '#e8c4a0', initials: 'AL', delay: '0s' },
  { color: '#a8c4e8', initials: 'MR', delay: '0.5s' },
  { color: '#b8e0b0', initials: 'JT', delay: '1s' },
  { color: '#e8d0a0', initials: 'SK', delay: '1.5s' },
  { color: '#d0b8e8', initials: 'NC', delay: '0.8s' },
  { color: '#e8b0b0', initials: 'PW', delay: '1.2s' },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      {/* Decorative elements */}
      <svg className={styles.squiggle} viewBox="0 0 70 130" fill="none" aria-hidden="true">
        <path
          d="M35 5 C10 30, 60 55, 35 80 C10 105, 60 115, 35 125"
          stroke="#E05A5A" strokeWidth="2.5" strokeLinecap="round"
        />
      </svg>
      <div className={styles.purpleBlob} aria-hidden="true" />

      <div className={styles.inner}>
        <h1 className={`${styles.headline} animate__animated animate__fadeInUp`}>
          The <span className={styles.underlineWord}>thinkers</span> and<br />
          doers were <span className={styles.pinkHl}>changing</span><br />
          the <span className={styles.greenHl}>status</span> Quo with
        </h1>

        <p
          className={`${styles.sub} animate__animated animate__fadeInUp`}
          style={{ animationDelay: '0.2s' }}
        >
          We are a team of strategists, designers communicators, researchers.
          Together, we believe that progress only happens when you refuse to play things safe.
        </p>
      </div>

      {/* Avatar collage */}
      <div
        className={`${styles.collage} animate__animated animate__fadeIn`}
        style={{ animationDelay: '0.4s' }}
        aria-label="Team member avatars"
      >
        {avatars.map((av, i) => (
          <div
            key={i}
            className={styles.avatar}
            style={{
              '--av-color': av.color,
              '--av-delay': av.delay,
              '--av-index': i,
            }}
          >
            <span>{av.initials}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
