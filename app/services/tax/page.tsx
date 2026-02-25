import ServiceNav from '../components/ServiceNav';
import ServicePageNav from '../components/ServicePageNav';
import ServiceKeywordNav from '../components/ServiceKeywordNav';
import ServiceCTA from '../components/ServiceCTA';
import { Fragment } from 'react';
import styles from './page.module.css';

const SECTIONS = [
  { id: 'bookkeeping', label: '세무기장 및 운영컨설팅' },
  { id: 'correction', label: '경정청구' },
  { id: 'transfer', label: '양도양수' },
  { id: 'inheritance', label: '상속증여' },
];

export default function TaxServicePage() {
  return (
    <>
      <ServiceNav />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroContent}>
            <div className={styles.tag}>TAX SERVICE</div>
            <h1 className={styles.heroTitle}>
              35,996개 병원장님들을 위한<br />
              <span className={styles.goldText}>특별한 세무서비스</span>를 경험해보세요
            </h1>
            <p className={styles.heroDesc}>
              사업과 경영상태가 달라집니다.
            </p>
          </div>
          <ServicePageNav currentPath="/services/tax" />
          <ServiceKeywordNav sections={SECTIONS} defaultSection="bookkeeping" />
        </section>

        {/* 세무기장 및 운영컨설팅 */}
        <section id="bookkeeping" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.tag}>BOOKKEEPING & CONSULTING</div>
              <h2 className={styles.sectionTitle}>세무기장 및 운영컨설팅</h2>
              <p className={styles.sectionDesc}>
                병의원에 특화된 체계적인 세무 관리로 안정적인 경영 환경을 만들어 드립니다
              </p>
            </div>

            <div className={styles.serviceGrid}>
              {[
                { title: '세무조정', desc: '정확한 세무조정으로 과세표준을 최적화하고 불필요한 세금 부담을 줄여드립니다' },
                { title: '신고대행', desc: '종합소득세, 법인세, 부가세 등 모든 세금 신고를 정확하고 기한 내에 처리합니다' },
                { title: '신청대행', desc: '각종 세무 관련 신청 업무를 대행하여 복잡한 행정 절차를 간소화해 드립니다' },
                { title: '업무대응', desc: '세무서 질의·소명요구 등 각종 세무 업무에 신속하고 전문적으로 대응합니다' },
              ].map((service, index) => (
                <div key={index} className={styles.serviceCard}>
                  <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                  <p className={styles.serviceCardDesc}>{service.desc}</p>
                </div>
              ))}
            </div>

            {/* 미리미리 서비스 */}
            <div className={styles.featureBox}>
              <div className={styles.featureBoxLeft}>
                <div className={styles.circleFlow}>
                  {[
                    {
                      label: '사전분석',
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="10.5" cy="10.5" r="6" />
                          <path d="m21 21-4.15-4.15" />
                          <path d="M8 9h5M8 12h3" />
                        </svg>
                      ),
                    },
                    {
                      label: '예측 시뮬레이션',
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 2v6h-6" />
                          <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                          <path d="M3 22v-6h6" />
                          <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                        </svg>
                      ),
                    },
                    {
                      label: '비용 조정',
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2v4M12 18v4" />
                          <path d="M2 12h4M18 12h4" />
                          <circle cx="12" cy="12" r="3" />
                          <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83" />
                          <path d="M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                      ),
                    },
                    {
                      label: '예상 세액 산출',
                      filled: true,
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="4" y="2" width="16" height="20" rx="2" />
                          <path d="M8 6h8" />
                          <path d="M8 10h2M14 10h2" />
                          <path d="M8 14h2M14 14h2" />
                          <path d="M8 18h8" />
                        </svg>
                      ),
                    },
                  ].map((item, i) => (
                    <div key={i} className={styles.circleStep}>
                      <div className={`${styles.circle} ${item.filled ? styles.circleFilled : ''}`}>
                        {item.icon}
                      </div>
                      <span className={styles.circleLabel}>{item.label}</span>
                      {i < 3 && <div className={styles.arrow}>→</div>}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.featureBoxRight}>
                <h3 className={styles.featureBoxTitle}>
                  스타택스의 <strong>미리미리 서비스</strong>
                </h3>
                <p className={styles.featureBoxDesc}>갑작스러운 세금 납부에 부담이 있었나요?</p>
                <p className={styles.featureBoxBody}>미리 준비해야 하는 세금! 세금을 내는데 갑자기라는 것은 없습니다.</p>
              </div>
            </div>

            {/* 절세 전략 수립 */}
            <div className={styles.featureBox}>
              <div className={styles.featureBoxLeft}>
                <h4 className={styles.featureBoxLabel}>절세 전략 수립</h4>
                <div className={styles.circleFlow}>
                  {[
                    {
                      label: '예상 매출 분석',
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 20V10M12 20V4M6 20v-6" />
                        </svg>
                      ),
                    },
                    {
                      label: '예상 경비 분석',
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <path d="M14 2v6h6" />
                          <circle cx="12" cy="15" r="3" />
                          <path d="m14.5 17.5 2 2" />
                        </svg>
                      ),
                    },
                    {
                      label: '경비 적정성 분석',
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      ),
                    },
                    {
                      label: '경비 가이드 제시',
                      filled: true,
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                      ),
                    },
                  ].map((item, i) => (
                    <div key={i} className={styles.circleStep}>
                      <div className={`${styles.circle} ${item.filled ? styles.circleFilled : ''}`}>
                        {item.icon}
                      </div>
                      <span className={styles.circleLabel}>{item.label}</span>
                      {i < 3 && <div className={styles.arrow}>→</div>}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.featureBoxRight}>
                <h3 className={styles.featureBoxTitle}>
                  스타택스의 누수없는 <strong>절세 전략!</strong>
                </h3>
                <p className={styles.featureBoxDesc}>세무는 곧 절세를 의미합니다.</p>
                <p className={styles.featureBoxBody}>지속적인 관리와 효과적인 절세가 진짜 케어입니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 경정청구 */}
        <section id="correction" className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.tag}>TAX CORRECTION</div>
              <h2 className={styles.sectionTitle}>경정청구</h2>
              <p className={styles.sectionDesc}>
                과다하게 납부한 세금이 있다는 것, 알고 계신가요?
              </p>
            </div>

            <div className={styles.correctionContent}>
              <div className={styles.correctionInfo}>
                <p className={styles.correctionText}>
                  납세자가 세금을 신고하거나 납부한 후, 잘못된 점이 있거나 과다하게 납부한 경우,
                  이를 정정하여 환급받기 위해 세무서에 신청하는 것을 말하며 이를 통해 실제로
                  환급을 받게 되거나 부족세액을 징수하지 않게 됩니다.
                </p>
              </div>

              <div className={styles.refundGrid}>
                <h3 className={styles.refundTitle}>동네 병의원 평균 환급액</h3>
                <div className={styles.refundCards}>
                  {[
                    { label: '잘못된 보험청구', amount: '100~500만원', icon: '01' },
                    { label: '세금의 과다납부', amount: '200~300만원', icon: '02' },
                    { label: '보험의 청구오류', amount: '100~500만원', icon: '03' },
                  ].map((item, index) => (
                    <div key={index} className={styles.refundCard}>
                      <div className={styles.refundIcon}>{item.icon}</div>
                      <div className={styles.refundLabel}>{item.label}</div>
                      <div className={styles.refundAmount}>{item.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 양도양수 */}
        <section id="transfer" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.tag}>TRANSFER</div>
              <h2 className={styles.sectionTitle}>양도양수</h2>
              <p className={styles.sectionDesc}>
                양도양수 막막하고 어려우신가요?
              </p>
            </div>

            <div className={styles.transferContent}>
              <div className={styles.assetGrid}>
                {['포괄양수도', '주식', '채권', '계약', '특허권', '부동산'].map((asset, index) => (
                  <div key={index} className={styles.assetTag}>{asset}</div>
                ))}
              </div>

              <p className={styles.transferDesc}>
                계약서 검토부터 세금 및 비용, 법적 규정의 준수를 통한 승인까지
                복잡한 법적, 재정적 요소가 포함된 절차들로 이루어져 있어
                이를 진행할 때 세무전문가 및 법률 전문가의 도움을 받는 것이 중요합니다.
              </p>

              <div className={styles.partnershipSection}>
                <h3 className={styles.partnershipTitle}>스타택스 파트너십</h3>

                {/* Diamond Infographic */}
                <div className={styles.diamondWrapper}>
                  {/* Left labels */}
                  <div className={`${styles.diamondLabel} ${styles.labelTopLeft}`}>
                    <span>세무회계</span>
                    <div className={styles.labelLine} />
                  </div>
                  <div className={`${styles.diamondLabel} ${styles.labelBottomLeft}`}>
                    <span>법률 자문</span>
                    <div className={styles.labelLine} />
                  </div>

                  {/* Diamond grid */}
                  <div className={styles.diamondGrid}>
                    {/* Top-left: 세무회계 */}
                    <div className={`${styles.diamondCard} ${styles.diamondBlue}`}>
                      <div className={styles.diamondIconWrap}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="4" y="2" width="16" height="20" rx="2" />
                          <path d="M8 6h8" />
                          <path d="M8 10h2M14 10h2" />
                          <path d="M8 14h2M14 14h2" />
                          <path d="M8 18h8" />
                        </svg>
                      </div>
                    </div>
                    {/* Top-right: 분쟁방지 */}
                    <div className={`${styles.diamondCard} ${styles.diamondDark}`}>
                      <div className={styles.diamondIconWrap}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      </div>
                    </div>
                    {/* Bottom-left: 법률 자문 */}
                    <div className={`${styles.diamondCard} ${styles.diamondNavy}`}>
                      <div className={styles.diamondIconWrap}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3v3" />
                          <path d="M4 10h16" />
                          <path d="M6 10l1.5 7H8" />
                          <path d="M18 10l-1.5 7H16" />
                          <path d="M12 10v7" />
                          <path d="M5 20h14" />
                          <path d="M4 10l8-4 8 4" />
                        </svg>
                      </div>
                    </div>
                    {/* Bottom-right: 감정평가 */}
                    <div className={`${styles.diamondCard} ${styles.diamondMedium}`}>
                      <div className={styles.diamondIconWrap}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <path d="M14 2v6h6" />
                          <path d="M9 15l1.5-1 1.5 1 1.5-1 1.5 1" />
                          <path d="M9 11l1.5-1 1.5 1 1.5-1 1.5 1" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Center circle */}
                  <div className={styles.diamondCenter}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2E2620" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                    <span className={styles.diamondCenterText}>세무법인스타택스</span>
                  </div>

                  {/* Right labels */}
                  <div className={`${styles.diamondLabel} ${styles.labelTopRight}`}>
                    <div className={styles.labelLine} />
                    <span>분쟁 방지</span>
                  </div>
                  <div className={`${styles.diamondLabel} ${styles.labelBottomRight}`}>
                    <div className={styles.labelLine} />
                    <span>감정평가</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 상속증여 */}
        <section id="inheritance" className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.tag}>INHERITANCE & GIFT</div>
              <h2 className={styles.sectionTitle}>상속증여</h2>
              <p className={styles.sectionDesc}>
                상속세/증여세 줄이고 싶다면?
              </p>
            </div>

            <div className={styles.inheritanceContent}>
              {/* Asset Icon Grid */}
              <div className={styles.assetIconGrid}>
                {[
                  {
                    label: '금융자산',
                    icon: (
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="8" cy="16" r="2" />
                        <circle cx="8" cy="14" r="2" />
                        <circle cx="12" cy="16" r="2" />
                        <circle cx="12" cy="14" r="2" />
                        <path d="M10 8h4" />
                        <path d="M12 6v4" />
                        <rect x="7" y="5" width="10" height="6" rx="1" />
                      </svg>
                    ),
                  },
                  {
                    label: '부동산',
                    icon: (
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21h18" />
                        <path d="M5 21V7l7-4 7 4v14" />
                        <path d="M9 21v-6h6v6" />
                        <path d="M10 10h4" />
                        <path d="M10 13h4" />
                      </svg>
                    ),
                  },
                  {
                    label: '동산',
                    icon: (
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M3.6 9h16.8M3.6 15h16.8" />
                        <path d="M12 3a9 9 0 0 1 0 18" />
                        <path d="M12 3a9 9 0 0 0 0 18" />
                      </svg>
                    ),
                  },
                  {
                    label: '사업자산',
                    icon: (
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="7" r="3" />
                        <path d="M5 21v-2a7 7 0 0 1 7-7" />
                        <rect x="14" y="15" width="7" height="5" rx="1" />
                        <path d="M16 15v-2h3v2" />
                      </svg>
                    ),
                  },
                  {
                    label: '지적재산권',
                    icon: (
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18h6" />
                        <path d="M10 22h4" />
                        <path d="M12 2a7 7 0 0 0-4 12.7V18h8v-3.3A7 7 0 0 0 12 2z" />
                        <path d="m9 9 2 2 4-4" />
                      </svg>
                    ),
                  },
                  {
                    label: '가상화폐',
                    icon: (
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M9 8h4.5a2.5 2.5 0 0 1 0 5H9V8z" />
                        <path d="M9 13h5a2.5 2.5 0 0 1 0 5H9v-5z" />
                        <path d="M11 6v2M13 6v2M11 18v-2M13 18v-2" />
                      </svg>
                    ),
                  },
                  {
                    label: '회원권',
                    icon: (
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="3" width="14" height="18" rx="2" />
                        <circle cx="12" cy="10" r="3" />
                        <path d="M9 16h6" />
                        <path d="M10 19h4" />
                      </svg>
                    ),
                  },
                ].map((asset, index) => (
                  <div key={index} className={styles.assetIconCard}>
                    <span className={styles.assetIconLabel}>{asset.label}</span>
                    <div className={styles.assetIconBox}>{asset.icon}</div>
                  </div>
                ))}
              </div>

              {/* 정책변경 - Hexagon Flow */}
              <div className={styles.policySection}>
                <div className={styles.hexFlow}>
                  {[
                    {
                      label: '정책 변경',
                      colorClass: styles.hexDark,
                      icon: (
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                          <path d="M8 7h8M8 11h5" />
                        </svg>
                      ),
                    },
                    {
                      label: '세율 변경',
                      colorClass: styles.hexBlue,
                      icon: (
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="4" y="2" width="16" height="20" rx="2" />
                          <path d="M8 6h8" />
                          <path d="M8 10h2M14 10h2" />
                          <path d="M8 14h2M14 14h2" />
                          <path d="M8 18h8" />
                          <circle cx="18" cy="18" r="4" fill="currentColor" fillOpacity="0.15" />
                          <path d="m16.5 18 1 1 2-2" />
                        </svg>
                      ),
                    },
                    {
                      label: '자산 변동',
                      colorClass: styles.hexNavy,
                      icon: (
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 21h18" />
                          <path d="M5 21V7l7-4 7 4v14" />
                          <path d="M14 12l2-3 2 3M15 12v-3" />
                          <rect x="9" y="14" width="4" height="4" rx="0.5" />
                        </svg>
                      ),
                    },
                    {
                      label: '자녀의 성장',
                      colorClass: styles.hexRoyal,
                      icon: (
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="9" cy="7" r="3" />
                          <circle cx="17" cy="9" r="2" />
                          <path d="M3 21v-2a6 6 0 0 1 6-6h0" />
                          <path d="M13 21v-1a4 4 0 0 1 4-4h0" />
                          <path d="M12 2l1 2.5L12 7l-1-2.5L12 2z" />
                        </svg>
                      ),
                    },
                  ].map((item, i, arr) => (
                    <Fragment key={i}>
                      <div className={styles.hexStep}>
                        <div className={`${styles.hexagon} ${item.colorClass}`}>
                          {item.icon}
                        </div>
                        <span className={styles.hexLabel}>{item.label}</span>
                      </div>
                      {i < arr.length - 1 && (
                        <div className={styles.hexConnector}>
                          <span className={styles.hexDot} />
                          <span className={styles.hexDotLine} />
                          <span className={styles.hexDot} />
                        </div>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>

              <p className={styles.inheritanceDesc}>
                정책 변동, 세율 변경, 자산의 변동과 상속·증여될 자녀의 성장 등
                많은 변화를 고려하여 최적의 세금으로 컨설팅 해드립니다.
              </p>
            </div>
          </div>
        </section>

        <ServiceCTA
          title="전문 세무 상담이 필요하신가요?"
          description="스타택스의 세무 전문가가 병원장님의 성공적인 경영을 함께합니다"
        />
      </main>
    </>
  );
}
