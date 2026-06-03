import styles from './Studio.module.css';

function ImageCircle({ className, gradient }) {
  return (
    <div className={`${styles.imgCircle} ${className || ''}`} style={{ background: gradient }}>
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" aria-hidden="true">
        <circle cx="45" cy="35" r="20" fill="rgba(255,255,255,0.25)" />
        <ellipse cx="45" cy="70" rx="30" ry="16" fill="rgba(255,255,255,0.18)" />
      </svg>
    </div>
  );
}

function Triangle({ className }) {
  return <div className={`${styles.tri} ${className || ''}`} aria-hidden="true" />;
}

export default function Studio() {
  return (
    <section className={styles.section} id="studio">

      {/* Block 1: left text, right image */}
      <div className={styles.block}>
        <div className="reveal-left">
          <h2 className={styles.heading}>
            <em>Tomorrow</em> should<br />
            be better than <span className={styles.underline}>today</span>
          </h2>
          <p className={styles.body}>
            We are a team of strategists, designers communicators, researchers.
            Together, we believe that progress only happens when you refuse to play things safe.
          </p>
          <a href="#" className={styles.readMore}>Read more &nbsp;&rsaquo;</a>
        </div>

        <div className={`${styles.imageWrap} reveal-right`}>
          <div className={styles.pinkBlob} aria-hidden="true" />
          <Triangle className={styles.triTopRight} />
          <ImageCircle gradient="linear-gradient(135deg,#c8d8e4,#8aaab8)" />
          <Triangle className={styles.triBottomLeft} />
        </div>
      </div>

      {/* Block 2: left image, right text */}
      <div className={`${styles.block} ${styles.blockReverse}`}>
        <div className={`${styles.imageWrap} reveal-left`}>
          <ImageCircle
            className={styles.imgSmall}
            gradient="linear-gradient(135deg,#b8c8d4,#7898a8)"
          />
          <Triangle className={styles.triSmall1} />
          <Triangle className={styles.triSmall2} />
          <svg className={styles.squiggleRed} viewBox="0 0 140 90" fill="none" aria-hidden="true">
            <path
              d="M10 70 C40 15, 90 80, 120 30 C132 16, 138 44, 130 70"
              stroke="#E05A5A" strokeWidth="2" strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="reveal-right">
          <h2 className={styles.heading}>
            See how we can<br />help you progress
          </h2>
          <p className={styles.body}>
            We add a layer of fearless insights and action that allows change makers to
            accelerate their progress in areas such as brand, design digital, comms and social research.
          </p>
          <a href="#" className={styles.readMore}>Read more &nbsp;&rsaquo;</a>
        </div>
      </div>

    </section>
  );
}
