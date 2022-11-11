import { Link } from "react-router-dom";
import Search from "./Search";
const HeadBottomComp = () => {
  const navList = [
    {
      id: 1,
      list: "마이",
    },
    {
      id: 2,
      list: "혜택",
    },
    {
      id: 3,
      list: "금융",
    },
    {
      id: 4,
      list: "카드",
    },
    {
      id: 5,
      list: "서비스",
    },
    {
      id: 6,
      list: "디지털",
    },
    {
      id: 7,
      list: "TopsClub",
    },
    {
      id: 8,
      list: "고객센터",
    },
  ];

  return (
    <div className="head-bottom flex">
      <Link to={"/"}>
        <div className="logo">
          <div></div>
        </div>
      </Link>
      <div>
        <ul className="flex navbar">
          {navList.map(({ list, id }) => (
            <li key={id}>{list}</li>
          ))}
        </ul>
      </div>
      <div>
        <Link to={"/login"}>
          <button className="login-btn">로그인</button>
        </Link>
        <Search />
        <button className="menu-btn"></button>
      </div>
    </div>
  );
};

export default HeadBottomComp;
