import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import FunctionNav from "../Function/FunctionNav";
SwiperCore.use([Navigation, Pagination, Autoplay]); // 추가

const MenuItemComp = () => {
  const menu1 = (
    <ul className="list-row flex">
      {menuList
        .filter(({ id }) => id < 9)
        .map(({ id, img, title }) => (
          <li key={id} className="menu-item">
            <a href="#">
              <img src={process.env.PUBLIC_URL + img} alt={title} />
            </a>
            <span>{title}</span>
          </li>
        ))}
    </ul>
  );

  const menu2 = (
    <ul className="list-row flex">
      {menuList
        .filter(({ id }) => id > 8)
        .map(({ id, img, title }) => (
          <li key={id} className="menu-item">
            <a href="#">
              <img src={process.env.PUBLIC_URL + img} alt={title} />
            </a>
            <span>{title}</span>
          </li>
        ))}
    </ul>
  );
  return (
    <div className="input-section">
      <div className="inner">
        <div className="search-inner">
          <div className="search">
            <input type="text" placeholder="'신한플레이'를검색해보세요" />
            <img
              src={process.env.PUBLIC_URL + "/img/검색아이콘.png"}
              alt="search-icon"
            />
          </div>
        </div>
        <div className="align-box"></div>
        <Swiper
          className="banner my-swiper"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="slide-container">{menu1}</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-container">{menu2}</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

const menuList = [
  {
    id: 1,
    img: "/img/icon-150-type2-1.png",
    title: "월별명세서",
  },
  {
    id: 2,
    img: "/img/이용내역.png",
    title: "이용내역",
  },
  {
    id: 3,
    img: "/img/대출금액상환.png",
    title: "대출금액상환",
  },
  {
    id: 4,
    img: "/img/이용한도.png",
    title: "이용한도",
  },
  {
    id: 5,
    img: "/img/즉시결제.png",
    title: "즉시결제",
  },
  {
    id: 6,
    img: "/img/포인트조회.png",
    title: "포인트조회",
  },
  {
    id: 7,
    img: "/img/실적충족현황.png",
    title: "실적충족현황",
  },
  {
    id: 8,
    img: "/img/내가받은해택.png",
    title: "내가받은혜택",
  },
  {
    id: 9,
    img: "/img/내카드관리.png",
    title: "내카드관리",
  },
  {
    id: 10,
    img: "/img/마이샾쿠폰.png",
    title: "마이샵쿠폰",
  },
  {
    id: 11,
    img: "/img/카드별한도이용.png",
    title: "카드별이용한도",
  },
  {
    id: 12,
    img: "/img/이용한도상환.png",
    title: "이용한도상향",
  },
  {
    id: 13,
    img: "/img/카드재발급.png",
    title: "카드재발급",
  },
  {
    id: 14,
    img: "/img/카드사용등록.png",
    title: "카드사용등록",
  },
  {
    id: 15,
    img: "/img/전자민원접수.png",
    title: "전자민원접수",
  },
  {
    id: 16,
    img: "/img/진행중인이벤트.png",
    title: "진행중인이벤드",
  },
];

export default MenuItemComp;
