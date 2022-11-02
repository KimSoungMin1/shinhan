import { useContext } from "react";
import DataContext from "../../context/CardContext";



    const DropComp =()=>{
    const data =useContext(DataContext)
    const DropMenu=(
        <ul className="compare-cont">{/* X 버튼 누르면 카운드 내려가고 드롭 없어짐 (유즈 콜백?)추가하기 추가 박스에 카드 추가되면 추가박스랑 카드 추가 바껴서 나오게 (온체인지?) */}
            { data.state.drop.list.map((like)=>(
            <li key={like.id}>
                <img src={like.img} alt="" width={'138px'} height={'220px'}/>
                <p></p>
                <div></div>
            </li>
            ))}
        </ul> 
    )
    return(
        <>
            {DropMenu}
        </>
    ); 

}
const Compare = () => {

    return ( 
        <div className="compare">
            <div className="inner">
                <p>카드는 2개를 담았을 경우 비교가 가능하며, 최대 2개까지 담을 수 있습니다.</p>
                <p>※ 담겨진 카드가 없는 경우 비교함이 표시되지 않습니다.</p>
                        <DropComp/>
            </div>
        </div>
    );
}

export default Compare;