import { useContext } from "react";
import DataContext from "../context/CardContext";
import Compare from "../components/Function/Compare";

const Card = () => {
  const data = useContext(DataContext);
  const { count, drop } = data.state;
  const { setCount, setDrop } = data.action;
  const likes = data.state.dropList.list;

  //CardContext에서 받아온 card state 값을 drop state 안에들어있는 list 배열에 넣어줌
  const show = (post) => {
    const cardToCompare =
      count >= 0 &&
      count < 2 &&
      likes.find((like) => like.id === post.id) === undefined;

    if (cardToCompare) {
      setCount(count + 1);
      const like = {
        id: post.id,
        img: post.img,
        title: post.title,
        text: post.text,
        data: post.data,
      };

      const newList = likes.concat(like);

      data.action.setDropList({ list: newList });
    } else if (likes.find((like) => like.id === post.id)) {
      alert("카드비교함에 이미 담겨 있습니다.");
    } else {
      alert(" 최대 2개까지 담을 수 있습니다.");
    }
  };

  const cardList = (
    <>
      {data.state.card.map((post) => (
        <div className="card-wrap" key={post.id}>
          <img
            src={process.env.PUBLIC_URL + post.img}
            alt="card-img"
            width={"169px"}
            height={"270px"}
          />
          <div className="rap">
            <h2>{post.title}</h2>

            <span
              onClick={
                //()=>show(post)를 show(post)로 넣을시 무한실행이 일어난다
                //매개변수를 넣어야 할경우 아래와 같이 작성하여 무한 실행을 막아준다
                () => show(post)
              }
              key={post.id}
            >
              비교함담기
              <span className="compare-nav"></span>
            </span>
            <div className="card-text-wrap">
              <div>{post.text}</div>
              <div className="dis">{post.data}</div>
            </div>
            <button>상세보기</button>
          </div>
        </div>
      ))}
    </>
  );
  return (
    <div className="card-page">
      <div className="case" style={{ display: count > 0 ? "block" : "none" }}>
        <p
          onClick={() => {
            setDrop(!drop);
          }}
        >
          카드 <span>{count}</span>개 비교함 {drop ? "닫기" : "열기"}
          <a
            href="#"
            style={{ transform: drop ? "rotate(-180deg)" : "rotate(0deg)" }}
          ></a>
        </p>
      </div>
      {drop && <Compare />}
      <div className="inner">
        <h1>인기/추천카드</h1>
        <p>당신을 위한 우리의 선택</p>
        {cardList}
      </div>
    </div>
  );
};

export default Card;
