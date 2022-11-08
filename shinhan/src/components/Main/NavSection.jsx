const NavSection = () => {
  const base = (
    <div className="base-cont">
      {baseList.map((post) => (
        <div className="base-row" key={post.id}>
          <a href="#">
            <img src={post.img} alt={post.text} />
          </a>
          <div className="base-text">{post.text}</div>
          <div className="base-btn">신청하기</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="nav-section">
      <div className="inner">
        <div className="wrap">
          <h2>금융</h2>
          <div className="link-box">
            똑똑한금융생활
            <u>
              <b>나만의 금융혜택보기</b>
            </u>
            <a href="#" className="link"></a>
          </div>
          {base}
        </div>
      </div>
    </div>
  );
};

const baseList = [
  {
    id: 1,
    img: "/img/단기카드대출.png",
    text: `단기카드대출${"\n"}(현금서비스)`,
  },
  {
    id: 2,
    img: "/img/장기카드대출론.png",
    text: `장기카드대출${"\n"}(카드론)`,
  },
  {
    id: 3,
    img: "/img/일부결제금액.png",
    text: `일부결제금액 이월약정${"\n"}(리볼빙)`,
  },
  {
    // css  white-space: pre-wrap를 사용하여 공백을 사용한 줄바꿈
    id: 4,
    img: "/img/맞춤대출.png",
    text: `맞춤대출${"\n"}(즉시대출)`,
  },
];

export default NavSection;
