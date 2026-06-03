import "animate.css";
import styles from "./Hero.module.css";

const avatars = [
  { img: "https://i.pravatar.cc/150?img=68", delay: "0s" },
  { img: "https://i.pravatar.cc/150?img=59", delay: "0.5s" },
  { img: "https://i.pravatar.cc/150?img=33", delay: "1s" },
  { img: "https://i.pravatar.cc/150?img=12", delay: "1.5s" },
  { img: "https://i.pravatar.cc/150?img=44", delay: "0.8s" },
  { img: "https://i.pravatar.cc/150?img=32", delay: "1.2s" },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      {/* Decorative elements */}
      <svg
        className={styles.squiggle}
        viewBox="0 0 70 130"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M35 5 C10 30, 60 55, 35 80 C10 105, 60 115, 35 125"
          stroke="#E05A5A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <div className={styles.purpleBlob} aria-hidden="true" />

      <div className={styles.inner}>
        <h1
          className={`${styles.headline} animate__animated animate__fadeInUp`}
        >
          The <span className={styles.underlineWord}>thinkers</span> and
          <br />
          doers were <span className={styles.pinkHl}>changing</span>
          <br />
          the <span className={styles.greenHl}>status</span> Quo with
        </h1>

        <p
          className={`${styles.sub} animate__animated animate__fadeInUp`}
          style={{ animationDelay: "0.2s" }}
        >
          We are a team of strategists, designers communicators, researchers.
          Together, we believe that progress only happens when you refuse to
          play things safe.
        </p>
      </div>

      {/* Avatar collage */}
      <div
        className={`${styles.collage} animate__animated animate__fadeIn`}
        style={{ animationDelay: "0.4s" }}
        aria-label="Team member avatars"
      >
        {avatars.map((av, i) => (
          <div
            key={i}
            className={styles.avatar}
            style={{
              "--av-delay": av.delay,
              "--av-index": i,
            }}
          >
            <img src={av.img} alt="Team member" />
          </div>
        ))}
      </div>
    </section>
  );
}
