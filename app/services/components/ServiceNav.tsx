import Link from 'next/link';
import styles from './ServiceNav.module.css';

export default function ServiceNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMain}>STARTAX</span>
          <span className={styles.logoSub}>세무법인 스타택스</span>
        </Link>
        <a href="tel:02-423-7110" className={styles.ctaButton}>
          상담신청
        </a>
      </div>
    </nav>
  );
}
