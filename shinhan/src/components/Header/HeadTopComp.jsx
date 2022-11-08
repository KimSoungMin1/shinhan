import { Link } from "react-router-dom";
function HeadTopComp() {
  const HeadTopCompLeft = (
    <ul className="flex">
      {/*비구조화 할당 */}
      {title
        .filter(({ id }) => id < 5)
        .map(({ id, title }) => (
          <li key={id} className="list-item">
            <div>{title}</div>
          </li>
        ))}
    </ul>
  );
  const HeadTopCompRight = (
    <ul className="flex">
      <Link to={"/login"}>
        <li className="list-item">
          <div>로그인</div>
        </li>
      </Link>
      {title
        .filter((post) => post.id > 4)
        .map((post) => (
          <li key={post.id} className="list-item">
            <div>{post.title}</div>
          </li>
        ))}
    </ul>
  );
  return (
    <div className="head-top flex">
      {HeadTopCompLeft}
      {HeadTopCompRight}
    </div>
  );
}

const title = [
  {
    id: 1,
    title: "개인",
  },
  {
    id: 2,
    title: "법인",
  },
  {
    id: 3,
    title: "가맹점",
  },
  {
    id: 4,
    title: "마이카",
  },
  {
    id: 5,
    title: "회원가입",
  },
  {
    id: 6,
    title: "아이디찾기",
  },
  {
    id: 7,
    title: "상품공시실",
  },
];

export default HeadTopComp;
