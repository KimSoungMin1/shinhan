import { useState,useContext } from "react";
import DataContext from "../context/CardContext";
import Compare from "../components/Function/Compare";

const Comps = () => {

    const [drop,setDrop]=useState(false)
    const [count,setCount]=useState(0)
    const data = useContext(DataContext);

    const hide =()=>{ {/*usecallback */}
        if (count>=1) {
            setCount(count-1)
        }return
    }


    const likes = data.state.drop.list;
    //CardContext에서 받아온 card state 값을 drop state 안에들어있는 list 배열에 넣어줌
    const show =(post)=>{

        if (count>=0 && count<2 && likes.find((like)=>(like.id == post.id))==undefined) {
            setCount(count+1)
            const like = {
                id : post.id, 
                img : post.img,
                title:post.title,
                text:post.text,
                data:post.data
            };

            const newList = likes.concat(like);

            data.action.setDrop({list:newList})
            console.log(data.state.drop.list)
        }

        else{
            alert(" 최대 2개까지 담을 수 있습니다.")
        }
    }
    
    const cardList=(
        <>
        {data.state.card.map((post)=>(
            <div className="card-wrap"key={post.id}>
                <img src={post.img} alt="card-img" width={'169px'} height={'270px'}/>
                <div className="rap">
                    <h2>{post.title}</h2>
                    <span onClick={()=>show(post)} key={post.id}>비교함담기</span>
                    <div className="card-text-wrap">
                        <div>{post.text}</div>
                        <div className="dis">{post.data}</div>
                    </div>
                    <button onClick={hide}>상세보기</button>
                </div>
            </div>
        ))}
        </>
    )
    return ( 
        <div className="card-page">
            <div className="case" style={{display : count>0 ? "block":"none"}}>
                <p onClick={()=>{setDrop(!drop)}}>
                    카드 <span>{count}</span>개 비교함 {drop? '닫기':"열기"} 
                    <a href="#"style={{transform :drop? 'rotate(-180deg)':"rotate(0deg)"}}></a>
                </p>
            </div>
            {drop &&<Compare/>}
            <div className="inner">
                <h1>인기/추천카드</h1>
                <p>당신을 위한 우리의 선택</p>
                {cardList}
            </div>
        </div>
    );
}
const Card =()=>{
    return <Comps/>
}

export default Card;