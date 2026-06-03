import styles from './Footer.module.css';

const COMPANY = ['Home', 'Studio', 'Service', 'Custom', 'Blog'];
const POLICIES = ['Privacy Policy', 'Terms & Conditions', 'Custom', 'Accessibility'];
const SOCIAL = ['Instagram', 'LinkedIn', 'YouTube', 'Twitter'];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Company</h4>
          <ul className={styles.list}>
            {COMPANY.map((item) => (
              <li key={item}><a href="#" className={styles.link}>{item}</a></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Terms &amp; Policies</h4>
          <ul className={styles.list}>
            {POLICIES.map((item) => (
              <li key={item}><a href="#" className={styles.link}>{item}</a></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Follow Us</h4>
          <ul className={styles.list}>
            {SOCIAL.map((item) => (
              <li key={item}><a href="#" className={styles.link}>{item}</a></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact</h4>
          <address className={styles.address}>
            1499a Flatbush, STE<br />
            20 Chicago, IL 63897<br />
            <br />
            (123) 456-891000<br />
            <br />
            <a href="mailto:info@elementum.com" className={styles.link}>
              info@elementum.com
            </a>
          </address>
        </div>
      </div>

      <div className={styles.bottom}>
        &copy; 2025 Elementum. All rights reserved.
      </div>
    </footer>
  );
}
