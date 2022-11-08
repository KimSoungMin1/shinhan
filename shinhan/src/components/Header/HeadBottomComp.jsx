import { Link } from "react-router-dom";
import Search from "./Search";
const HeadBottomComp = () => {
  return (
    <div className="head-bottom flex">
      <Link to={"/"}>
        <div className="logo">
          <div></div>
        </div>
      </Link>
      <div>
        <ul className="flex navbar">
          <li>마이</li>
          <li>혜택</li>
          <li>금융</li>
          <li>카드</li>
          <li>서비스</li>
          <li>디지털</li>
          <li>TopsClub</li>
          <li>고객센터</li>
        </ul>
      </div>
      <div>
        <Search />
        <button className="menu-btn"></button>
      </div>
    </div>
  );
};

export default HeadBottomComp;
