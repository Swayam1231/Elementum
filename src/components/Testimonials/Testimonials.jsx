import styles from './Testimonials.module.css';

// 1. Swap initials and colors for placeholder image URLs
const LEFT_AVATARS = [
  { img: 'https://i.pravatar.cc/150?img=12', delay: '0s' },
  { img: 'https://i.pravatar.cc/150?img=35', delay: '0.3s' },
  { img: 'https://i.pravatar.cc/150?img=47', delay: '0.6s' },
];

const RIGHT_AVATARS = [
  { img: 'https://i.pravatar.cc/150?img=68', delay: '0.2s' },
  { img: 'https://i.pravatar.cc/150?img=59', delay: '0.5s' },
  { img: 'https://i.pravatar.cc/150?img=33', delay: '0.8s' },
];

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={`${styles.inner} reveal`}>

        {/* Left avatars */}
        <div aria-hidden="true">
          {LEFT_AVATARS.map((av, i) => (
            <div
              key={i}
              className={styles.sideAv}
              style={{ animationDelay: av.delay }}
            >
              {/* Added the image tag here */}
              <img src={av.img} alt="Customer" className={styles.avatarImg} />
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
        <div aria-hidden="true">
          {RIGHT_AVATARS.map((av, i) => (
            <div
              key={i}
              className={styles.rightAv}
              style={{ animationDelay: av.delay }}
            >
              {/* Added the image tag here */}
              <img src={av.img} alt="Customer" className={styles.avatarImg} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}