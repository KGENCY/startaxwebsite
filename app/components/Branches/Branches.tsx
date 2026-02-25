import styles from './Branches.module.css';

export default function Branches() {
  const branches = [
    {
      name: '강남',
      cpa: '세무사 조준섭',
      address: '서울 강남구 강남대로84길 23',
      phone: '02-567-2395',
    },
    {
      name: '남양주',
      cpa: '세무사 김명학',
      address: '경기 남양주시 다산지금로 202',
      phone: '0507-0464-2178',
    },
    {
      name: '부천',
      cpa: '세무사 김형선',
      address: '경기 부천시 중동 1111',
      phone: '032-1899-2395',
    },
    {
      name: '부천남',
      cpa: '세무사 이하윤',
      address: '경기 부천시 목감동 745-5',
      phone: '032-342-2395',
    },
    {
      name: '여의도',
      cpa: '세무사 감연지',
      address: '서울 영등포구 당산로 171-173',
      phone: '0507-1378-2360',
    },
    {
      name: '수원',
      cpa: '세무사 김동현',
      address: '경기 수원시 영통로 41-1',
      phone: '0507-1425-3369',
    },
  ];

  return (
    <section id="contact" className={styles.branches}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.tag}>BRANCHES</div>
          <h2 className={styles.headline}>지점 안내</h2>
        </div>

        <div className={styles.grid}>
          {branches.map((branch, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.name}>{branch.name}</div>
                <div className={styles.cpa}>{branch.cpa}</div>
              </div>
              <div className={styles.address}>{branch.address}</div>
              <a href={`tel:${branch.phone.replace(/[^0-9]/g, '')}`} className={styles.phone}>
                {branch.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}