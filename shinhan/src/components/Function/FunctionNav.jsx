import { useState, useEffect } from "react";
const FunctionNav = () => {
  const [ScrollY, setScrollY] = useState(0);

  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 1220,
      behavior: "smooth",
    });
    setScrollY(); // ScrollY 의 값을 초기화
  };

  return (
    <button
      className="function-nav-btn"
      onClick={handleTop} // 버튼 클릭시 함수 호출
    >
      기능 페이지 이동 버튼
    </button>
  );
};

export default FunctionNav;
