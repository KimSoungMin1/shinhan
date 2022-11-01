import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const HeadBottomComp = () => {
  const Top=()=>{

    const [ScrollY, setScrollY] = useState(0);
    const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태
  
    const handleFollow = () => {
      setScrollY(window.pageYOffset);
      if(ScrollY > 90) {
        // 100 이상이면 버튼이 보이게
        setBtnStatus(true);
      } else {
        // 100 이하면 버튼이 사라지게
        setBtnStatus(false);
      }
    }

    useEffect(() => {
      const watch = () => {
        window.addEventListener('scroll', handleFollow)
      }
      watch();
      return () => {
        window.removeEventListener('scroll', handleFollow)
      }
    })

    return (
      <button 
      className={BtnStatus ? "search" : "search-hid"}
    ></button>
    )
  }
  
  return (
    <div className="head-bottom flex">
        <Link to={'/'}>
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
          <Top/>
          <button className="menu-btn"></button>  
        </div>
    </div>
  );
};


export default HeadBottomComp;
