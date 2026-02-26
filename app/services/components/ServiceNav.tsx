'use client';

import Link from 'next/link';
import styles from './ServiceNav.module.css';
import { useConsultation } from '../../context/ConsultationContext';

export default function ServiceNav() {
  const { openModal } = useConsultation();

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <img src="/startax-logo.png" alt="STARTAX" className={styles.logoIcon} />
          <span className={styles.logoMain}>STARTAX</span>
          <span className={styles.logoSub}>세무법인 스타택스</span>
        </Link>
        <button onClick={openModal} className={styles.ctaButton}>
          상담신청
        </button>
      </div>
    </nav>
  );
}
