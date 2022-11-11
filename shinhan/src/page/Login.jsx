const Login = () => {
  return (
    <div className="Main inner">
      <div className="login">
        <div className="login-cont flex">
          <div className="login-box">
            <h2>
              Hello <br />
              {"신한카드 :)"}
            </h2>
            <span>
              조금 더 밝은 내일을 기원하며 <br />
              오늘도 건강한 하루 보내세요.
            </span>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/img/page2img/star.png"}
            alt=""
            width={"30px"}
            height={"30px"}
            className="star"
          />
          <img
            src={process.env.PUBLIC_URL + "/img/page2img/star.png"}
            alt=""
            width={"30px"}
            height={"30px"}
            className="star2"
          />
          <img
            src={process.env.PUBLIC_URL + "/img/page2img/로그인.png"}
            alt="icon"
            width={"140px"}
            height={"240px"}
          />
        </div>
        <div className="login-inner">
          <div className="login-wrap">
            <div>
              <input type="text" placeholder="아이디" />
            </div>
            <div>
              <input type="password" placeholder="비밀번호" />
            </div>
            <button>로그인</button>
            <ul className="login-nav">
              <li>회원가입/</li>
              <li>아이디찾기</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
