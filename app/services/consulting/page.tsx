'use client';

import ServiceNav from '../components/ServiceNav';
import ServicePageNav from '../components/ServicePageNav';
import ServiceCTA from '../components/ServiceCTA';
import { useActiveSection } from '../hooks/useActiveSection';
import styles from './page.module.css';

const SECTIONS = [
  { id: 'venture', label: '벤처기업 인증' },
  { id: 'treasury-stock', label: '자기주식 처분' },
  { id: 'succession', label: '가업승계' },
  { id: 'incorporation', label: '법인전환' },
  { id: 'realestate', label: '부동산/재무컨설팅' },
];

export default function ConsultingPage() {
  const { activeSection, scrollTo } = useActiveSection(SECTIONS);

  return (
    <>
      <ServiceNav />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroContent}>
            <div className={styles.tag}>BUSINESS CONSULTING</div>
            <h1 className={styles.heroTitle}>
              35,996개 병원장님들을 위한<br />
              <span className={styles.goldText}>경영 컨설팅</span>을 경험해보세요
            </h1>
            <p className={styles.heroDesc}>
              사업과 경영상태가 달라집니다.
            </p>
          </div>
          <ServicePageNav currentPath="/services/consulting" />

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

        {/* 벤처기업 인증 */}
        <section id="venture" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.tag}>VENTURE CERTIFICATION</div>
              <h2 className={styles.sectionTitle}>벤처기업 인증</h2>
              <p className={styles.sectionDesc}>
                획기적인 기술과 성장 가능성이 높다고 판단되어 벤처기업으로 인증받게 되면
                다양한 세제 혜택과 보증기관들로부터 가점을 부여받게 되며,
                이로 인해 각종 혜택들을 받을 수 있어 사업을 운영할 수 있습니다.
              </p>
            </div>

            {/* 혜택 테이블 */}
            <div className={styles.tableWrapper}>
              <h3 className={styles.tableTitle}>벤처인증 기업의 혜택</h3>
              <div className={styles.tableContainer}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>분류</th>
                      <th>내용</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { category: '세제', items: ['최대 5년간 법인세/소득세 50% 감면', '취득세 75% 감면', '재산세 3년간 면제 후 2년간 50% 감면'] },
                      { category: '금융', items: ['50억원 이행보증', '전자상거래 담보보증 70억원', '코스닥 상장 기준 50억 → 15억 완화', '법인세비용차감전계속사업이익 기준 50% 우대'] },
                      { category: '입지', items: ['취득세 50%, 재산세 35% 경감', '취득세/등록면허세/재산세 중과적용 면제'] },
                      { category: 'M&A', items: ['대기업 인수합병 시 상호출자제한 기업집단 계열편입 7년간 유예'] },
                      { category: '인력', items: ['연구소 인력 기준 완화', '스톡옵션 부여대상 확대'] },
                      { category: '광고', items: ['TV·라디오 최대 70% 할인 (정상가 35억 한도)', '광고제작비 최대 70% 지원'] },
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className={styles.tableCategoryCell}>{row.category}</td>
                        <td>
                          <ul className={styles.tableList}>
                            {row.items.map((item, j) => <li key={j}>{item}</li>)}
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className={styles.noticeBox}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <p>각 항목 중 하나의 요건을 모두 충족하여야 벤처기업확인 신청이 가능합니다.</p>
            </div>
          </div>
        </section>

        {/* 자기주식 처분 */}
        <section id="treasury-stock" className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.tag}>TREASURY STOCK</div>
              <h2 className={styles.sectionTitle}>자기주식 처분</h2>
              <p className={styles.sectionDesc}>
                자기주식 취득 시 적법한 절차에 따라 진행한다면 주주의 권리 확보는 물론
                누적된 가지급금과 미처분 이익잉여금과 같은 경영 리스크 해결 비용을 상당 부분 절감할 수 있습니다.
              </p>
            </div>

            {/* 자기주식 처분의 혜택 */}
            <h3 className={styles.stockBenefitHeading}>자기주식 처분의 혜택</h3>
            <div className={styles.stockBenefitGrid}>
              <div className={styles.stockBenefitCard}>
                <div className={styles.stockBenefitIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
                <div className={styles.stockBenefitLabel}>매입목적의 취득</div>
                <p className={styles.stockBenefitDesc}>
                  자기주식을 취득한 원가로 자본조정의 자기주식 과목으로 회계 처리
                </p>
                <span className={styles.stockBenefitSub}>(자본항목의 마이너스 계정으로 처리)</span>
              </div>

              <div className={styles.stockBenefitCard}>
                <div className={styles.stockBenefitIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="17 1 21 5 17 9" />
                    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                    <polyline points="7 23 3 19 7 15" />
                    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                  </svg>
                </div>
                <div className={styles.stockBenefitLabel}>처분 시</div>
                <div className={styles.stockBenefitPairs}>
                  {[
                    { condition: '처분 금액 > 장부금액', result: '자본잉여금의 자기주식 처분 이익으로 처리' },
                    { condition: '처분 금액 < 장부금액', result: '자본조정의 자기주식 처분 손실로 처리' },
                  ].map((pair, i) => (
                    <div key={i} className={styles.stockBenefitPair}>
                      <span className={styles.pairCondition}>{pair.condition}</span>
                      <span className={styles.pairResult}>{pair.result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.stockBenefitCard}>
                <div className={styles.stockBenefitIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <div className={styles.stockBenefitLabel}>소각 시</div>
                <div className={styles.stockBenefitPairs}>
                  {[
                    { condition: '이익소각', result: '취득원가에 해당하는 이익잉여금을 상계처리' },
                    { condition: '감자소각', result: '취득가액 vs 액면금액에 따라 감자차익 또는 감자차손으로 처리' },
                  ].map((pair, i) => (
                    <div key={i} className={styles.stockBenefitPair}>
                      <span className={styles.pairCondition}>{pair.condition}</span>
                      <span className={styles.pairResult}>{pair.result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 전략적 활용 */}
            <div className={styles.featureBlock}>
              <div className={styles.featureCard}>
                <div className={styles.featureNumber}>02</div>
                <h3 className={styles.featureTitle}>전략적 활용</h3>
                <div className={styles.strategyGrid}>
                  {[
                    { title: '주가 안정화 및 상승', desc: '주주 가치 향상' },
                    { title: '잉여 현금 활용', desc: '배당 대체 효과' },
                    { title: '주식 희석 방지', desc: '지분율 보호' },
                    { title: '적대적 인수 방어', desc: '경영권 보호' },
                    { title: '주주 신뢰 강화', desc: '재무 비율 개선' },
                    { title: 'M&A 자산 확보', desc: '인수합병 준비' },
                  ].map((item, index) => (
                    <div key={index} className={styles.strategyCard}>
                      <h4 className={styles.strategyTitle}>{item.title}</h4>
                      <p className={styles.strategyDesc}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 세무 관련 */}
            <div className={styles.featureBlock}>
              <div className={styles.featureCard}>
                <div className={styles.featureNumber}>03</div>
                <h3 className={styles.featureTitle}>세무 관련</h3>
                <div className={styles.taxPointGrid}>
                  <div className={styles.taxPointCard}>
                    <div className={styles.taxPointLabel}>법적 제한</div>
                    <p className={styles.taxPointDesc}>현행 법령 취지에 맞는 합법적 절차 진행</p>
                  </div>
                  <div className={styles.taxPointCard}>
                    <div className={styles.taxPointLabel}>세무 이슈 해소</div>
                    <p className={styles.taxPointDesc}>개인이익 및 가지급금 문제 대응</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 가업승계 */}
        <section id="succession" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.tag}>BUSINESS SUCCESSION</div>
              <h2 className={styles.sectionTitle}>가업승계</h2>
              <p className={styles.sectionDesc}>
                가업을 배우자나 자식에게 승계 시 최대 500억까지 100% 상속 공제
              </p>
            </div>

            <div className={styles.highlightBanner}>
              <span className={styles.highlightIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </span>
              미리미리 승계를 준비하세요!
            </div>

            {/* 가업상속 공제 */}
            <div className={styles.featureBlock}>
              <div className={styles.featureCard}>
                <div className={styles.featureNumber}>01</div>
                <h3 className={styles.featureTitle}>가업상속 공제</h3>
                <p className={styles.featureBody}>
                  10년 이상된 중소기업을 배우자나 자녀에게 승계하시고자 한다면,
                  이때 최대 500억까지 가업상속재산가액의 100%를 상속 공제하여
                  자연스럽게 가업을 이어나갈 수 있도록 지원하는 제도입니다.
                </p>
                <div className={styles.processFlow}>
                  {[
                    { step: '01', title: '10년 이상 경영', desc: '중소기업 운영 기간 요건 충족' },
                    { step: '02', title: '승계 대상 확인', desc: '배우자 또는 자녀 자격 요건 검토' },
                    { step: '03', title: '공제 신청', desc: '최대 500억 가업상속재산 100% 공제' },
                    { step: '04', title: '사후 관리', desc: '사후 요건 충족 및 지속 경영 지원' },
                  ].map((item, index) => (
                    <div key={index} className={styles.processItem}>
                      <div className={styles.processStep}>{item.step}</div>
                      <div className={styles.processInfo}>
                        <div className={styles.processTitle}>{item.title}</div>
                        <div className={styles.processDesc}>{item.desc}</div>
                      </div>
                      {index < 3 && (
                        <div className={styles.processArrow}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 가업승계 주식 증여세 과세특례제도 */}
            <div className={styles.featureBlock}>
              <div className={styles.featureCard}>
                <div className={styles.featureNumber}>02</div>
                <h3 className={styles.featureTitle}>가업승계 주식 증여세 과세특례제도</h3>
                <p className={styles.featureBody}>
                  10년 이상된 중소기업의 60대 이상 경영자가 다른 사람에게 증여를 할 경우에는
                  5억을 공제하고 10% 낮은 세율로 증여세를 부과하는 제도입니다.
                  이 제도는 사전 증여도 가능합니다.
                </p>
                <div className={styles.comparisonGrid}>
                  <div className={styles.comparisonCard}>
                    <div className={styles.comparisonLabel}>일반 증여</div>
                    <div className={styles.comparisonValue}>일반 세율 적용</div>
                    <div className={styles.comparisonDesc}>최대 50% 세율</div>
                  </div>
                  <div className={styles.comparisonArrow}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                  <div className={`${styles.comparisonCard} ${styles.comparisonHighlight}`}>
                    <div className={styles.comparisonLabel}>과세특례 적용</div>
                    <div className={styles.comparisonValue}>5억 공제 + 10% 세율</div>
                    <div className={styles.comparisonDesc}>사전 증여 가능</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 창업 자금 증여 */}
            <div className={styles.featureBlock}>
              <div className={styles.featureCard}>
                <div className={styles.featureNumber}>03</div>
                <h3 className={styles.featureTitle}>창업자금 증여세 과세특례제도</h3>
                <p className={styles.featureBody}>
                  18세 이상 자녀가 60세 이상 부모에게 자금을 받아 창업을 한다면
                  세제혜택을 받을 수 있는 제도입니다. 사업 자금 준비와 동시에
                  상속세 부담을 완화할 수 있습니다.
                </p>
                <div className={styles.conditionGrid}>
                  {[
                    { label: '자녀 요건', value: '18세 이상' },
                    { label: '부모 요건', value: '60세 이상' },
                    { label: '용도', value: '창업 자금' },
                  ].map((item, index) => (
                    <div key={index} className={styles.conditionCard}>
                      <div className={styles.conditionLabel}>{item.label}</div>
                      <div className={styles.conditionValue}>{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 법인전환 */}
        <section id="incorporation" className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.tag}>INCORPORATION</div>
              <h2 className={styles.sectionTitle}>법인전환</h2>
              <p className={styles.sectionDesc}>
                개인사업자가 사업의 조직형태를 법인 사업자의 형태로 변경하는 것을 말합니다.
                기존의 권리와 의무 등을 그대로 이양하여 영업을 지속하고자 할 때 법인전환을 하게 됩니다.
              </p>
            </div>

            <div className={styles.benefitGrid}>
              {[
                { number: '01', title: '세율 부담 감소', before: '소득세율 6~45%', after: '법인세율 9~24%', desc: '개인사업자 대비 법인세율이 현저히 낮아 세금 부담이 크게 줄어듭니다' },
                { number: '02', title: '의료보험 절감', before: '지역의료보험 (높은 보험료)', after: '직장의료보험 (낮은 보험료)', desc: '직장인 의료보험으로 변경되어 보험료 부담이 경감됩니다' },
                { number: '03', title: '채무 부담 감소', before: '무한책임 (개인사업자)', after: '유한책임 (법인)', desc: '법인의 유한책임으로 사업 실패 시 책임부담이 경감됩니다' },
                { number: '04', title: '제도 정책 활용 용이', before: '지원 자금 제한', after: '정부 지원 자금 활용', desc: '정부 지원 운전·시설·고용 자금 및 소상공인 자금 지원 가능합니다' },
              ].map((benefit, index) => (
                <div key={index} className={styles.benefitCard}>
                  <div className={styles.benefitNumber}>{benefit.number}</div>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <div className={styles.benefitComparison}>
                    <div className={styles.benefitBefore}>
                      <span className={styles.benefitLabel}>Before</span>
                      <span>{benefit.before}</span>
                    </div>
                    <div className={styles.benefitArrow}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                    <div className={styles.benefitAfter}>
                      <span className={styles.benefitLabel}>After</span>
                      <span>{benefit.after}</span>
                    </div>
                  </div>
                  <p className={styles.benefitDesc}>{benefit.desc}</p>
                </div>
              ))}
            </div>

            <div className={styles.noticeBox}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <p>
                지속할 영업적 권리와 의무 등이 존재하지 않는 경우에는 신규법인 설립으로 진행하면 됩니다.
              </p>
            </div>
          </div>
        </section>

        {/* 부동산/재무컨설팅 */}
        <section id="realestate" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.tag}>REAL ESTATE & FINANCE</div>
              <h2 className={styles.sectionTitle}>부동산/재무컨설팅</h2>
              <p className={styles.sectionDesc}>
                부동산 개발부터 가치평가, M&A 실사까지 전문적인 재무 컨설팅을 제공합니다
              </p>
            </div>

            <div className={styles.twoColumnGrid}>
              <div className={styles.columnCard}>
                <h3 className={styles.columnTitle}>부동산개발 및 시행업무</h3>
                <ul className={styles.columnList}>
                  {['Project Financing 자문', '부동산 사업수지분석 및 투자분석', '부동산 재무타당성 분석'].map((item, i) => (
                    <li key={i}>
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <path d="M16.667 5L7.5 14.167L3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.columnCard}>
                <h3 className={styles.columnTitle}>가치평가 및 실사업무</h3>
                <ul className={styles.columnList}>
                  {[
                    '지분 매수/매각 관련 가치평가, 재무모델링',
                    '사업결합에 따른 PPA (매수가격 배분 및 무형자산 공정가치 평가)',
                    '영업권 손상검사, 피투자기업 지분가치평가 및 손상검사',
                    '파생상품 공정가치평가',
                    '지분투자 또는 M&A를 위한 재무실사',
                  ].map((item, i) => (
                    <li key={i}>
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <path d="M16.667 5L7.5 14.167L3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ServiceCTA
          title="경영 컨설팅이 필요하신가요?"
          description="스타택스의 전문가가 기업의 성장과 안정적인 경영을 함께합니다"
        />
      </main>
    </>
  );
}
