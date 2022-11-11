import { useContext } from "react";
import DataContext from "../../context/CardContext";

const Compare = () => {
  const data = useContext(DataContext);
  const { count, drop } = data.state;
  const { setCount, setDrop } = data.action;
  const likes = data.state.dropList.list;

  const hide = (post) => {
    if (count >= 1) {
      setCount(count - 1);
      const newLikeList = likes.filter((like) => like.id != post.id);

      data.action.setDropList({
        ...data.state.dropList,
        list: newLikeList,
      });
    }
    return;
  };
  const DropMenu = (
    <div className="compare" style={{ display: count > 0 ? "block" : "none" }}>
      <div className="inner">
        <p>
          카드는 2개를 담았을 경우 비교가 가능하며, 최대 2개까지 담을 수
          있습니다.
        </p>
        <p>※ 담겨진 카드가 없는 경우 비교함이 표시되지 않습니다.</p>
        <ul className="compare-cont">
          {data.state.dropList.list.map((post) => (
            <li key={post.id}>
              <button onClick={() => hide(post)}></button>
              <img
                src={post.img}
                alt={post.title}
                width={"138px"}
                height={"220px"}
              />
              <p className="card-name">{post.title}</p>
              <div className="data-box">
                <div>{post.text}</div>
                <div>{post.data}</div>
              </div>
            </li>
          ))}
          <div
            className="add-card"
            style={{ display: count === 2 ? "none" : "block" }}
            onClick={() => {
              setDrop(!drop);
            }}
          >
            <span>카드추가하기</span>
          </div>
        </ul>
      </div>
    </div>
  );
  return <>{DropMenu}</>;
};

export default Compare;
