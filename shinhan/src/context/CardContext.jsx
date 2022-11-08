import { useState } from "react";
import { createContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [dropList, setDropList] = useState({ list: [] });
  const [drop, setDrop] = useState(false);
  const [count, setCount] = useState(0);
  const [card, setCard] = useState([
    {
      id: 1,
      img: "/page2img/위버스.png",
      title: "위버스 신한카드(BTS)",
      text: `위버스샵/생활영역${"\n"}하이브 인사이트${"\n"}Gift서비스`,
      data: `4%/10%캐시적립${"\n"}50% 할인${"\n"}연 1회 제공`,
    },
    {
      id: 2,
      img: "/img/신한카드퍼즐.gif",
      title: "신한카드 Puzzle",
      text: `국내/외 이용금액${"\n"}전월 이용금액${"\n"}선택 서비스팩6종`,
      data: `최대1.1%포인트 적립${"\n"}20만원 이월 서비스${"\n"}최대2개 선택 이용(유료)`,
    },
    {
      id: 3,
      img: "/img/페이신한카드.png",
      title: "#Pay 신한카드",
      text: `7개 칸편결제${"\n"}온/오프라인`,
      data: `5%적립${"\n"}어디서나 적립`,
    },
    {
      id: 4,
      img: "/page2img/마카롱.png",
      title: "신한카드 My TeenS",
      text: `GS25${"\n"}GS25${"\n"}GS&POINT`,
      data: `행사 상품 할인${"\n"}기프티콘 서비스${"\n"}적립`,
    },
    {
      id: 5,
      img: "/page2img/신한카드야야.gif",
      title: "신한카드 YaY",
      text: `밀딜리버리 ${"\n"} 온라인 쇼핑몰${"\n"}홈DIY`,
      data: `최대30%적립${"\n"}최대12.500P 적립${"\n"}최대 3만P 적립`,
    },
    {
      id: 6,
      img: "/page2img/투썸.gif",
      title: "투썸플레이스 신한카드",
      text: `투썸플레이스 결제${"\n"}투썸플레이스 혜택${"\n"}생활서비스`,
      data: `30%할인${"\n"}모바일쿠폰 제공${"\n"}최대 1만4천원 할인`,
    },
    {
      id: 7,
      img: "/img/gs포인트.png",
      title: "GS Prime 신한카드",
      text: `GS리테일 점내${"\n"}일반 가맹점${"\n"}전월실적 적립한도`,
      data: `2%적립${"\n"}0.3% 적립${"\n"}제한없음`,
    },
    {
      id: 8,
      img: "/page2img/언박싱.png",
      title: "신한카드 Unboxing",
      text: `10% ${"\n"}언박싱`,
      data: `캐시백${"\n"}스페셜 할인`,
    },
    {
      id: 9,
      img: "/img/신한카드 d-day.png",
      title: "신한카드 D-day",
      text: `포이트${"\n"}스타벅스${"\n"}더러운지맴버스`,
      data: `5%적립${"\n"}최대 2천원 할인${"\n"}동반자 무료입장`,
    },
    {
      id: 10,
      img: "/page2img/마이리스트.png",
      title: "신한카드 Mr.Life",
      text: `월납요금${"\n"}Time${"\n"}주말 주유소`,
      data: `10% 할인${"\n"}10% 할인${"\n"}60원/ℓ 할인`,
    },
    {
      id: 11,
      img: "/page2img/딥오일.png",
      title: "신한카드 Deep Oil",
      text: `직접고른 주유소${"\n"}정비소/주차장${"\n"}편의점/커피/택시`,
      data: `10% 할인${"\n"}10% 할인${"\n"}5%할인`,
    },
    {
      id: 12,
      img: "/page2img/욜로.png",
      title: "신한카드 YOLO ⓘ",
      text: `6개선택처${"\n"}카드 디자인${"\n"}분기별 Bonus`,
      data: `20/15/10%할인${"\n"}6개 중 선택${"\n"}스타벅스 쿠폰`,
    },
    {
      id: 13,
      img: "/page2img/deepdream.png",
      title: "신한카드 Deep Dream Platinum+",
      text: `전월실적 한도없이${"\n"}주유적립${"\n"}Platinum+ 서비스`,
      data: `포인트 적립${"\n"}택시할인${"\n"}(항공할인,해외 캐시백)`,
    },
    {
      id: 14,
      img: "/page2img/thelady.png",
      title: "신한카드 The LADY CLASSIC",
      text: `Gift Option${"\n"}쇼핑/육아/웰빙${"\n"}요식업종`,
      data: `옵션품목 중 택1${"\n"}3~7% 캐시백${"\n"}브런치 5% 할인`,
    },
    {
      id: 15,
      img: "/page2img/삑.png",
      title: "신한카드 B.Big(삑)",
      text: `대중교통${"\n"}택시/KTX${"\n"}생활/쇼핑`,
      data: `최대600원 할인${"\n"}10% 할인${"\n"}5~10%할인`,
    },
    {
      id: 16,
      img: "/page2img/deepon.png",
      title: "신한카드 Deep On Platinum+",
      text: `간편결제(Pay)${"\n"}생활서비스${"\n"}Platinum+`,
      data: `최대20%할인${"\n"}20% 할인${"\n"}서비스`,
    },
    {
      id: 17,
      img: "/page2img/mycar.png",
      title: "신한카드 MY CAR",
      text: `자동차 신용결제${"\n"}오토금융 이용구매${"\n"}주유/충전/전기차`,
      data: `0.2%캐시백${"\n"}월 최대 1만원 할인${"\n"}월 최대 1만원 할일`,
    },
    {
      id: 18,
      img: "/page2img/airone.png",
      title: "신한카드 Air One",
      text: `국내/해외${"\n"}항공/면제${"\n"}해외`,
      data: `1천원당 1마일 적립${"\n"}2배 적립${"\n"}2배 적립`,
    },
    {
      id: 19,
      img: "/page2img/모베럴웍스.png",
      title: "신한카드 Deep Dream(모베러웍스)",
      text: `전월실적 한도없이${"\n"}주유적립${"\n"}신한금융그룹`,
      data: `포인트적립${"\n"}택시할인${"\n"}서비스 수수료 우대`,
    },
    {
      id: 20,
      img: "/page2img/심플.png",
      title: "신한카드 Simple+",
      text: `전가맹점${"\n"}이동통신 자동이체${"\n"}잔돈할인`,
      data: `0.7%캐시백${"\n"}추가0.7%캐시백${"\n"}월10회`,
    },
    {
      id: 21,
      img: "/page2img/아모레퍼.png",
      title: "아모레퍼시픽 신한카드",
      text: `아모레퍼시픽 가맹점${"\n"}특별 가맹점`,
      data: `12%적립${"\n"}5% 적립`,
    },
    {
      id: 22,
      img: "/page2img/이케아.png",
      title: "IKEA Family with 신한카드",
      text: `INEA매장${"\n"}백화점/할인점${"\n"}편의점`,
      data: `10%결제일 할인${"\n"}5% 결제일 할인${"\n"}5% 결제일 할인`,
    },
  ]);
  const value = {
    state: { card, drop, count, dropList },
    action: { setCard, setDrop, setCount, setDropList },
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
const { Consumer: DataConsumer } = DataContext;
export { DataConsumer, DataProvider };
export default DataContext;
