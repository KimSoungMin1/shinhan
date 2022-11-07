import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";




SwiperCore.use([Navigation, Pagination, Autoplay]); // 추가
    
    
const EventSection = () => {
    //swiper autoplay 정지 시작 
    const [swiperRef ,setSwiperRef]=useState(null)
    const [ready,setReady]=useState(false)

    const playHero = () => {
        swiperRef.autoplay.start()
    }
    
    const pauseHero = () => {
        swiperRef.autoplay.stop()
    }
    
    const autoplay =()=> {
        setReady(!ready)
        ready ? playHero():pauseHero()
    }

    
    

    const event = (
        <div className="inner">
            <Swiper
                onSwiper={setSwiperRef}
                className="event-swipers"
                spaceBetween={60}//간격
                slidesPerView={3}//보여질 슬라이드 수
                style={{'--swiper-pagination-bullet-width':' 38px'}}
                //pagination
                pagination={{
                    //paginationcustom
                    el: '.custom-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<div class="' + className + '">' + ("") +'</div>';
                        }
                }}
                //autoplay
                autoplay= {{
                    "delay": 2000,//autoplay시간
                    'disableOnInteraction': false //버튼클릭후 autoplay정지 (true,false)
                }}
                breakpoints={{//반응형
                    500 :{
                        slidesPerView:1 //screen width500이상일떄 보여질 슬라이드 갯수
                    },
                    1100 : {
                        slidesPerView:3//screen width 1100이상일떄 보여질 슬라이드 갯수
                    }
                }}
                >
            {eventMenu.map((post) => (
            <SwiperSlide className="event-slide" key={post.id}>
                <a href="#">
                    <img src={post.img} alt="" />
                </a>
                <div className="text-box">{post.text}</div>
            </SwiperSlide>
            ))}
        </Swiper>
            <div className="pag-cont">
                <button className="paly-btn">
                    <img onClick={autoplay} src={ready?"/img/stop.png":"/img/run.png"} alt="" width={'16px'}/>
                </button>  
                <div className="custom-pagination" />
            </div>
        </div>
    );
    
    return<div className="event-section">
            {event}
        </div> 
};


const eventMenu = [
    {
        id: 1,
        img: "/img/맞춤전용알림.png",
        text: `고객님만을위한${'\n'}맞춤정보알림${'\n'}챙겨드려요`,
    },
    {
        id: 2,
        img: "/img/6천원캐시백.png",
        text: `신한은행으로${'\n'}결제계좌변경하면${'\n'}6천원캐시백!`,
    },
    {
        id: 3,
        img: "/img/사인앨범까지.png",
        text: `Stray Kids,ITZY${'\n'}한정판포토카드에${'\n'}사인앨범까지!`,
    },
    {// css  white-space: pre-wrap를 사용하여 공백을 사용한 줄바꿈
        id: 4,
        img: "/img/티켓1플1.png",
        text: `신한카드${'\n'}The Moment${'\n'}티켓1+1혜택!`,
    },
    {
        id: 5,
        img: "/img/엘지10월.png",
        text: `LG베스트샵10월${'\n'}웨딩가전페스타${'\n'}1.5%추가캐시백!`,
    },
    {
        id: 6,
        img: "/img/나이성별불문.png",
        text: `나이성별불문${'\n'}플레이어모집중!${'\n'}신규가입5천P`,
    },
    {
        id: 7,
        img: "/img/최대1만p지급.png",
        text: `체크카드 웰컴백${'\n'}매월이용하면${'\n'}최대 1만P지급`,
    },
    {
        id: 8,
        img: "/img/포인트받으세요.png",
        text: `신한pLay에 숨겨진${'\n'}10개의 보물을 찾고${'\n'}포인트 받으세요`,
    },
    {
        id: 9,
        img: "/img/특급호텔.png",
        text: `신한카드 x뛰놀자${'\n'}제주호캉스${'\n'}특급호텔 단독특가!`,
    },
    {
        id: 10,
        img: "/img/정기구독.png",
        text: `여행도 정기구독!${'\n'}트래블ON${'\n'}런칭 기념 이벤트`,
    },
    {
        id: 11,
        img: "/img/최대3잔.png",
        text: `풀바셋${'\n'}무료 Size-up${'\n'}최대3잔까지`,
    },
    {
        id: 12,
        img: "/img/문안공모전.png",
        text: `참신한글판${'\n'}문안공모전${'\n'}(2022년 겨울)`,
    },
];
export default EventSection;
