
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import "swiper/css"; //basic
import "swiper/css/navigation";
import { Link } from "react-router-dom";



const CardComp = (props) => {
    const bullet = ['BEST카드', '  디지털', ' 프리미엄'];
    const cardList=(
        <>
            <SwiperSlide className="flex">
            {props.card.filter((post)=>(post.id<6)).map((post) => (
                <div key={post.id} className="card-item">
                    <a href="#">
                    <img src={post.img} alt="Card-Img" />
                    </a>
                    <div className="card-title">{post.title}</div>
                </div>
                    ))}
            </SwiperSlide>

            <SwiperSlide className="flex">
            {props.card.filter((post)=>(post.id>5&&post.id<=10)).map((post) => (
                <div key={post.id} className="card-item">
                    <a href="#">
                    <img src={post.img} alt="Card-Img"/>
                    </a>
                    <div className="card-title">{post.title}</div>
                </div>
                    ))}
            </SwiperSlide>
            
            <SwiperSlide className="flex">
            {props.card.filter((post)=>(post.id>10&&post.id<=15)).map((post) => (
                <div key={post.id} className="card-item">
                    <a href="#">
                    <img src={post.img} alt="Card-Img" />
                    </a>
                    <div className="card-title">{post.title}</div>
                </div>
                    ))}
            </SwiperSlide>
        </>
    )
                
    return ( 
        <div className="card-section">
            <div className="inner">
                <div className="my-custom-pagination-div" />
                <Swiper
                className="flex card-cont"
                spaceBetween={80}
                slidesPerView={1} 
                pagination={{
                el: '.my-custom-pagination-div',
                clickable: true,
                //swiper pagination접근   el: '.my-custom-pagination-div'
                //아래와 같이 작성
                renderBullet: function (index, className) {
                    return '<div class="' + className + '">' + (bullet[index]) +'</div>';
                    }
                }}
                >
                    {cardList}
                </Swiper>
                <div className="card-banner flex">
                    <Link to={"/c"} >
                        <div className="banner">
                            <img src="/img/추천카드.png" alt="추천카드img" />
                            <span>인기 · 추천카드</span>
                            <div></div>
                        </div>
                    </Link>
                    <Link to={"/"} >
                        <div className="banner"> 
                            <img src="/img/내게맞는카드.png" alt="내게맞는카드찾기img" />
                            <span>내게맞는 카드찾기</span>
                            <div></div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
const CardSection =()=>{
    return <CardComp card={card}/>
}
const card = [
    {
        id: 1,
        img: "/img/신한카드핏.png",
        title: "신한카드 핏 (Fit)",
    },
    {
        id: 2,
        img: "/img/신한카드폴리.png",
        title: "신한카드 폴리",
    },
    {
        id: 3,
        img: "/img/신한카드래플.png",
        title: "신한카드 래플 (Raffle)",
    },
    {
        id: 4,
        img: "/img/루피.gif",
        title: `신한카드 On 체크${'\n'}(잔망루피)`,
    },
    {
        id: 5,
        img: "/img/gs포인트.png",
        title: "GSprime 신한카드",
    },
    {
        id: 6,
        img: "/img/신한카드퍼즐.gif",
        title: "신한카드 Puzzle",
    },
    {
        id: 7,
        img: "/img/신한카드 deep.png",
        title: "신한카드 Deep Making",
    },
    {
        id: 8,
        img: "/img/신한카드 d-day.png",
        title: "신한카드 D-day",
    },
    {
        id: 9,
        img: "/img/zepeto.gif",
        title: "ZEPETO 신한카드",
    },
    {
        id: 10,
        img: "/img/페이신한카드.png",
        title: "#Pay 신한카드",
    },
    {
        id: 11,
        img: "/img/메리어트 베스트 신한.png",
        title: `메리어트 본보이™ 더${'\n'}베스트 신한카드`,
    },
    {
        id: 12,
        img: "/img/메리어트 클래식 신한.png",
        title: `메리어트 본보이™  더${'\n'}클래식 신한카드`,
    },
    {
        id: 13,
        img: "/img/label.png",
        title:  `신한카드 The ACE BLUE ${'\n'}LABEL `,
    },
    {
        id: 14,
        img: "/img/the best.png",
        title: "신한카드 The BEST+",
    },
    {
        id: 15,
        img: "/img/card.png",
        title: "신한카드 LABE",
    }
]

export default CardSection;