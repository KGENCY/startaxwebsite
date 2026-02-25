'use client';

import ServiceNav from '../components/ServiceNav';
import ServicePageNav from '../components/ServicePageNav';
import ServiceCTA from '../components/ServiceCTA';
import { useActiveSection } from '../hooks/useActiveSection';
import styles from './page.module.css';

const SECTIONS = [
  { id: 'bookkeeping', label: '세무기장 및 운영컨설팅' },
  { id: 'correction', label: '경정청구' },
  { id: 'transfer', label: '양도양수' },
  { id: 'inheritance', label: '상속증여' },
];

export default function TaxServicePage() {
  const { activeSection, scrollTo } = useActiveSection(SECTIONS, 'bookkeeping');

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

          {/* Keyword Navigation */}
          <div className={styles.keywordNav}>
            <div className={styles.keywordContainer}>
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  className={`${styles.keywordBtn} ${activeSection === section.id ? styles.keywordActive : ''}`}
                  onClick={() => scrollTo(section.id)}
                >
                  {section.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
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
                    { label: '사전분석' },
                    { label: '예측 시뮬레이션' },
                    { label: '비용 조정' },
                    { label: '예상 세액 산출', filled: true },
                  ].map((item, i) => (
                    <div key={i} className={styles.circleStep}>
                      <div className={`${styles.circle} ${item.filled ? styles.circleFilled : ''}`} />
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
                    { label: '예상 매출 분석' },
                    { label: '예상 경비 분석' },
                    { label: '경비 적정성 분석' },
                    { label: '경비 가이드 제시', filled: true },
                  ].map((item, i) => (
                    <div key={i} className={styles.circleStep}>
                      <div className={`${styles.circle} ${item.filled ? styles.circleFilled : ''}`} />
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
                <div className={styles.partnerGrid}>
                  {[
                    { role: '법무사', desc: '법적 절차 및 등기 업무 지원' },
                    { role: '변호사', desc: '법적 자문 및 분쟁 사전 방지' },
                    { role: '감정평가사', desc: '시장 가치 평가 지원' },
                  ].map((partner, index) => (
                    <div key={index} className={styles.partnerCard}>
                      <div className={styles.partnerRole}>{partner.role}</div>
                      <div className={styles.partnerDesc}>{partner.desc}</div>
                    </div>
                  ))}
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
              <div className={styles.assetGrid}>
                {['금융자산', '부동산', '동산', '사업자산', '지적재산권', '가상화폐', '회원권'].map((asset, index) => (
                  <div key={index} className={styles.assetTag}>{asset}</div>
                ))}
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
