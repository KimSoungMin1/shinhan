import { useState } from "react";
import DropdownComp from "./DropdownComp";
const FooterComp = () => {
  const [drop, setDrop] = useState(false);

  function dropDown() {
    setDrop(!drop);
    drop && <DropdownComp />;
  }

  const text = (
    <>
      <ul className="text-cont">
        {textList.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
      <div className="foot-bottom-cont">
        <ul className="icon-cont">
          {iconList.map(({ id, img }) => (
            <li key={id}>
              <img
                src={process.env.PUBLIC_URL + img}
                alt="iconImg"
                width={"28px"}
              />
            </li>
          ))}
        </ul>
        <div className="dropdown">
          {drop && <DropdownComp />}
          <button className="drop-btn" onClick={dropDown}>
            전용회원
            <span
              className="drop-nav"
              style={{ transform: drop ? "rotate(-180deg)" : "rotate(0deg)" }}
            ></span>
          </button>
        </div>
      </div>
    </>
  );
  return (
    <div className="footer">
      <div className="inner">
        <ul className="text-cont-top">
          <li>고객센터 1544-7000 (해외 82-2-3420-7000)</li>
          <li>카드분실신고 1544-7200</li>
          <li>카드신청 1661-8599</li>
          <li>금융신청 1588-0303</li>
          <li>할부금융 1544-7100ß</li>
        </ul>
        {text}
      </div>
    </div>
  );
};

const textList = [
  {
    id: 1,
    title: "회사소개",
  },
  {
    id: 2,
    title: "지배구좀",
  },
  {
    id: 3,
    title: "투자정보",
  },
  {
    id: 4,
    title: "이용약관",
  },
  {
    id: 5,
    title: "고객관리 안내문",
  },
  {
    id: 6,
    title: "개인정보처리방침",
  },
  {
    id: 7,
    title: "위치기반서비스이용약관",
  },
  {
    id: 8,
    title: "유료상품이용현황",
  },
  {
    id: 9,
    title: "금융소비자보호포털",
  },
  {
    id: 10,
    title: "전자민원 접수",
  },
  {
    id: 11,
    title: "내부자제보",
  },
];
const iconList = [
  {
    id: 1,
    img: "/img/ficon.png",
  },
  {
    id: 2,
    img: "/img/bicon.png",
  },
  {
    id: 3,
    img: "/img/picon.png",
  },
  {
    id: 4,
    img: "/img/ticon.png",
  },
  {
    id: 5,
    img: "/img/uicon.png",
  },
  {
    id: 6,
    img: "/img/트위터.png",
  },
];
export default FooterComp;
