import styles from './Testimonials.module.css';

const SIDE_AVATARS = [
  { bg: '#c0e0b0', initials: 'GK' },
  { bg: '#f0b0b0', initials: 'TN' },
  { bg: '#f0c0a0', initials: 'BL' },
];

const LEFT_AVATARS = [
  { bg: '#d0b0e0', initials: 'VM' },
  { bg: '#f0d0b0', initials: 'RH' },
  { bg: '#a0c8f0', initials: 'SY' },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={`${styles.inner} reveal`}>

        {/* Left avatars */}
        <div className={styles.leftAvatars} aria-hidden="true">
          {LEFT_AVATARS.map((av, i) => (
            <div
              key={i}
              className={styles.sideAv}
              style={{ background: av.bg, animationDelay: `${i * 0.3}s` }}
            >
              <span>{av.initials}</span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className={styles.main}>
          <h2 className={styles.heading}>
            What our customer<br />
            says <em><span className={styles.underline}>About Us</span></em>
          </h2>

          <blockquote className={styles.quoteCard}>
            <span className={styles.quoteOpen} aria-hidden="true">&ldquo;</span>
            <p>
              Elementum delivered the site with in the timeline as they requested.
              In the end, the client found a 50% increase in traffic with in days since its launch.
              They also had an impressive ability to use technologies that the company hasn't used,
              which have also proved to be easy to use and reliable.
            </p>
            <span className={styles.quoteClose} aria-hidden="true">&rdquo;</span>
          </blockquote>
        </div>

        {/* Right avatars */}
        <div className={styles.rightAvatars} aria-hidden="true">
          {SIDE_AVATARS.map((av, i) => (
            <div
              key={i}
              className={styles.rightAv}
              style={{ background: av.bg, animationDelay: `${i * 0.4}s` }}
            >
              <span>{av.initials}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
