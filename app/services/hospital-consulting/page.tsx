import ServiceNav from '../components/ServiceNav';
import ServicePageNav from '../components/ServicePageNav';
import ServiceKeywordNav from '../components/ServiceKeywordNav';
import ServiceCTA from '../components/ServiceCTA';
import styles from './page.module.css';

const SECTIONS = [
  { id: 'tax-audit', label: '세무진단/조사' },
  { id: 'welfare-fund', label: '사내근로복지기금' },
  { id: 'mso', label: 'MSO설립/운영' },
  { id: 'welfare-mall', label: '복지몰' },
  { id: 'venture', label: '벤처투자 소득공제' },
  { id: 'research', label: '기업부설연구소' },
];

export default function HospitalConsultingPage() {
  return (
    <>
      <ServiceNav />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroContent}>
            <div className={styles.tag}>HOSPITAL CONSULTING</div>
            <h1 className={styles.heroTitle}>
              병의원 경영의 든든한 파트너<br />
              <span className={styles.goldText}>전문 컨설팅</span>으로 함께합니다
            </h1>
            <p className={styles.heroDesc}>
              절세부터 경영 지원까지, 병의원에 특화된 원스톱 컨설팅 서비스
            </p>
          </div>
          <ServicePageNav currentPath="/services/hospital-consulting" />
          <ServiceKeywordNav sections={SECTIONS} />
        </section>

        {/* 세무진단/조사 */}
        <section id="tax-audit" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.tag}>TAX AUDIT & DIAGNOSIS</div>
              <h2 className={styles.sectionTitle}>세무진단/조사</h2>
              <p className={styles.sectionDesc}>
                국세청으로부터 세무조사 대상으로 통지서를 받으셨다면!
              </p>
            </div>

            <div className={styles.contentBlock}>
              <p className={styles.bodyText}>
                모든 납세자는 납세자 권리헌장에 의해 권리보호를 요청할 수 있습니다.
                세무조사는 복잡하고 전문적인 영역이기에, 전문가의 체계적인 대응이 필수적입니다.
              </p>
            </div>

            {/* 납세자 5대 권리 */}
            <div className={styles.rightsSection}>
              <h3 className={styles.subTitle}>납세자 5대 권리</h3>
              <div className={styles.rightsGrid}>
                {[
                  '공정한 세무조사를 받을 권리',
                  '세무서와 소통할 수 있는 절차적 권리',
                  '불합리한 세금에 이의를 제기할 권리',
                  '과도한 세금이 부과되지 않도록 보호받을 권리',
                  '법적으로 알권리와 이의신청, 항소의 권리',
                ].map((title, index) => (
                  <div key={index} className={styles.rightCard}>
                    <div className={styles.rightNum}>{String(index + 1).padStart(2, '0')}</div>
                    <p className={styles.rightText}>{title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 스타택스 대응 전략 */}
            <div className={styles.strategySection}>
              <h3 className={styles.subTitle}>스타택스의 대응 전략</h3>
              <div className={styles.strategyGrid}>
                {[
                  { title: '여유시간 확보', desc: '대응 자료 확보를 위한 최대한의 여유시간 확보' },
                  { title: '전문가 확보', desc: '기일 대응 및 조정 가능 전문가 확보' },
                  { title: '대응정보 확보', desc: '소명 및 항명 관련 정보 수집' },
                ].map((strategy, index) => (
                  <div key={index} className={styles.strategyCard}>
                    <h4 className={styles.strategyCardTitle}>{strategy.title}</h4>
                    <p className={styles.strategyCardDesc}>{strategy.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 사내근로복지기금 */}
        <section id="welfare-fund" className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.tag}>EMPLOYEE WELFARE FUND</div>
              <h2 className={styles.sectionTitle}>사내근로복지기금</h2>
              <p className={styles.sectionDesc}>
                기업경영주 근로자 모두가 WIN-WIN하는 사내근로복지기금
              </p>
            </div>

            <div className={styles.contentBlock}>
              <p className={styles.bodyText}>
                기업 내에서 근로자의 복지 증진을 위해 조성된 기금입니다.
                회사가 일정 금액을 출연하거나 이익금의 일부를 기금으로 전환하여 조성되며,
                근로자 복리후생 향상을 위해 사용됩니다.
              </p>
            </div>

            {/* 3자 WIN-WIN 구조 */}
            <div className={styles.benefitTriple}>
              {[
                {
                  perspective: '기업',
                  benefits: [
                    { title: '법인세 절감', desc: '출연금을 비용 처리하여 과세소득 감소' },
                    { title: '비용처리', desc: '세금부담 감소 효과' },
                    { title: '장기적 절세', desc: '직원 복지 증진으로 생산성 향상 및 이직률 감소' },
                  ],
                },
                {
                  perspective: '대표자',
                  benefits: [
                    { title: '세금부담 경감', desc: '근로자 혜택을 비과세로 처리' },
                    { title: '협상력 강화', desc: '절세 혜택을 활용한 인재 유치' },
                    { title: '세금 혜택 극대화', desc: '다양한 공제 항목 활용' },
                  ],
                },
                {
                  perspective: '근로자',
                  benefits: [
                    { title: '비과세 혜택', desc: '주택자금 대출, 의료비·교육비 지원 등' },
                    { title: '소득세 부담 완화', desc: '실질 소득 증가 효과' },
                    { title: '노후 대비', desc: '퇴직 후 생활 지원 및 연금 프로그램' },
                  ],
                },
              ].map((group, gIndex) => (
                <div key={gIndex} className={styles.benefitGroup}>
                  <div className={styles.benefitPerspective}>
                    <span className={styles.benefitLabel}>{group.perspective} 입장의 절세 효과</span>
                  </div>
                  <div className={styles.benefitList}>
                    {group.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className={styles.benefitItem}>
                        <div className={styles.benefitDot} />
                        <div>
                          <div className={styles.benefitTitle}>{benefit.title}</div>
                          <div className={styles.benefitDesc}>{benefit.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MSO설립/운영 */}
        <section id="mso" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.tag}>MSO ESTABLISHMENT</div>
              <h2 className={styles.sectionTitle}>MSO설립/운영</h2>
              <p className={styles.sectionDesc}>
                병의원 절세를 위한 확실한 선택!
              </p>
            </div>

            <div className={styles.contentBlock}>
              <p className={styles.bodyText}>
                병원장님과 가족의 지분으로 설립된, 병의원에 의료행위 및 행정관리에 대한
                각종 서비스를 지원하는 병의원 경영지원 기업입니다.
                MSO를 통해 합법적인 절세와 체계적인 경영 지원이 가능합니다.
              </p>
            </div>

            {/* MSO 검토 대상 */}
            <div className={styles.msoTargetSection}>
              <h3 className={styles.subTitle}>MSO 검토 대상 병의원</h3>
              <div className={styles.msoGrid}>
                {[
                  { num: '01', title: '인력 규모', desc: '병의원내 인력이 10인 이상인 경우' },
                  { num: '02', title: '고액 부동산', desc: '병원장님 또는 가족이 고액의 부동산 소지 시' },
                  { num: '03', title: '별도 사업', desc: '별도의 사업을 추진하고자 할 때' },
                  { num: '04', title: '프랜차이즈', desc: '병원 프랜차이즈를 모색하고자 할 때' },
                  { num: '05', title: '규모 확장', desc: '병원의 규모를 키우고자 할 때' },
                  { num: '06', title: '정책자금 활용', desc: '정책 자금 지원 제도를 활용하고 싶을 때' },
                ].map((item, index) => (
                  <div key={index} className={styles.msoCard}>
                    <div className={styles.msoNum}>{item.num}</div>
                    <h4 className={styles.msoCardTitle}>{item.title}</h4>
                    <p className={styles.msoCardDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 복지몰 */}
        <section id="welfare-mall" className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.tag}>WELFARE MALL</div>
              <h2 className={styles.sectionTitle}>복지몰</h2>
              <p className={styles.sectionDesc}>
                이제 무겁게 선물을 들고가는 명절을 좋아하지 않아요
              </p>
            </div>

            <div className={styles.welfareMallContent}>
              <div className={styles.welfareMallCard}>
                <h3 className={styles.welfareMallTitle}>선택적 복지서비스</h3>
                <p className={styles.welfareMallDesc}>
                  병의원도 중소기업에서도 대기업과 동일하게 선택적 복지서비스인
                  복지몰 서비스를 운영할 수 있습니다. 직원들에게 다양한 복지 혜택을
                  제공하며, 기업은 비용 절감과 세제 혜택을 동시에 누릴 수 있습니다.
                </p>
                <div className={styles.welfareMallFeatures}>
                  {['명절 선물 간편 배송', '선택적 복지 포인트', '다양한 제휴 혜택', '비용 처리 간소화'].map((feature, index) => (
                    <div key={index} className={styles.welfareMallFeature}>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M16.667 5L7.5 14.167L3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 벤처투자 소득공제 */}
        <section id="venture" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.tag}>VENTURE INVESTMENT</div>
              <h2 className={styles.sectionTitle}>벤처투자 소득공제</h2>
              <p className={styles.sectionDesc}>
                연간 3천만원 100%, 연간 5천만원 70%<br />
                소득공제 가능한 효과적인 세테크
              </p>
            </div>

            <div className={styles.contentBlock}>
              <p className={styles.bodyText}>
                묻지마 투자가 아닌, 안전한 벤처기업을 선정하여 최소화된 리스크를 통해
                안전하게 세금을 공제받을 수 있는 솔루션을 제공합니다.
                조세특례법에 따라 개인이 벤처기업에 투자할 때 일정 금액에 대해
                소득세를 공제해주는 제도입니다.
              </p>
            </div>

            {/* 공제율 안내 */}
            <div className={styles.deductionSection}>
              <div className={styles.deductionGrid}>
                {[
                  { amount: '3,000만원', rate: '100%' },
                  { amount: '5,000만원', rate: '70%' },
                ].map((item, i) => (
                  <div key={i} className={styles.deductionCard}>
                    <div className={styles.deductionAmount}>{item.amount}</div>
                    <div className={styles.deductionRate}>{item.rate}</div>
                    <div className={styles.deductionLabel}>소득공제</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 시뮬레이션 예시 */}
            <div className={styles.simulationSection}>
              <h3 className={styles.subTitle}>환급 시뮬레이션</h3>
              <div className={styles.simulationCard}>
                <div className={styles.simulationHeader}>
                  <span>연소득 2억 / 투자금 5천만원 기준</span>
                </div>
                <div className={styles.simulationBody}>
                  <div className={styles.simulationRow}>
                    <div className={styles.simulationStep}>
                      <div className={styles.simulationStepNum}>01</div>
                      <div>
                        <div className={styles.simulationStepTitle}>3,000만원 구간</div>
                        <div className={styles.simulationStepDesc}>100% 공제 = 3,000만원</div>
                      </div>
                    </div>
                    <div className={styles.simulationPlus}>+</div>
                    <div className={styles.simulationStep}>
                      <div className={styles.simulationStepNum}>02</div>
                      <div>
                        <div className={styles.simulationStepTitle}>2,000만원 구간</div>
                        <div className={styles.simulationStepDesc}>70% 공제 = 1,400만원</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.simulationResult}>
                    <div className={styles.simulationResultLabel}>총 공제액</div>
                    <div className={styles.simulationResultAmount}>4,400만원</div>
                  </div>
                  <div className={styles.simulationRefund}>
                    <div className={styles.simulationRefundLabel}>예상 소득세 환급액</div>
                    <div className={styles.simulationRefundAmount}>약 1,839만원</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 기업부설연구소 */}
        <section id="research" className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.tag}>CORPORATE R&D CENTER</div>
              <h2 className={styles.sectionTitle}>기업부설연구소</h2>
              <p className={styles.sectionDesc}>
                중소기업과 중견기업의 연구개발을 촉진시키기 위한 제도
              </p>
            </div>

            <div className={styles.contentBlock}>
              <p className={styles.bodyText}>
                여러 설립요건에 충족하여 기업부설연구소를 설립하면
                세금관점에서 여러 혜택을 받을 수 있으며,
                이러한 관점의 컨설팅을 통해 설립 실무를 대행합니다.
              </p>
            </div>

            {/* 세제 혜택 */}
            <div className={styles.researchBenefits}>
              <h3 className={styles.subTitle}>세제 혜택</h3>
              <div className={styles.researchGrid}>
                {[
                  '연구비 세액 공제', '인건비 세액 공제', '인건비 보조금', '정부지원 혜택',
                  '특허관련 세금혜택', '지방세 감면', '감가상각비 혜택', '부가세 환급',
                ].map((title, index) => (
                  <div key={index} className={styles.researchCard}>
                    <span className={styles.researchCardTitle}>{title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 설립 절차 */}
            <div className={styles.processSection}>
              <h3 className={styles.subTitle}>설립 절차</h3>
              <div className={styles.processFlow}>
                {[
                  { step: '01', title: '요건 수립', desc: '연구과제 수립, 연구독립공간 마련' },
                  { step: '02', title: '인력 구성', desc: '전담부서 1인 이상, 중소기업 2인 이상, 중견기업 7명 이상' },
                  { step: '03', title: '실물 제작', desc: '공간 구성, 연구 집기 설치, 현판 제작' },
                  { step: '04', title: '신고/관리', desc: '서류 제출, 실사, 인정서 발급, 사후 관리' },
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
        </section>

        <ServiceCTA
          title="병의원 전문 컨설팅이 필요하신가요?"
          description="스타택스의 전문가가 병원장님의 성공적인 경영을 함께합니다"
        />
      </main>
    </>
  );
}
