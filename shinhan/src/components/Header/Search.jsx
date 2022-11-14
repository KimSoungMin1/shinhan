import { useState, useEffect } from "react";

const Search = () => {
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 90) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    //클린업
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  return <button className={BtnStatus ? "search-show" : "search-hid"}></button>;
};

export default Search;
