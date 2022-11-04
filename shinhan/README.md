# JavaScript 라이브러리 React를 사용하여 만든 신한카드 반응형 Web-App입니다

본 페이지는 포트폴리오용으로 제작된 페이지 입니다  
꼭 ⬇ 아래 내용 모두 읽어 보시고, ⬆ 완성된 코드도 확인해 보세요!

[main(master) 브랜치로 이동](https://github.com/KimSoungMin1/shinhan)  

![ShinHan](./public/README%20IMG/Screenshot_1.png)

## React
React는 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리입니다.  홈페이지나 자습서에서 React에 대한 모든 것을 알아보세요.

[React 공식홈페이지 이동](https://ko.reactjs.org/) 
``` html
npm create-react-app my-app
```
## React Router
React Router는 "클라이언트 측 라우팅"을 활성화합니다.

```html
npm i react-router-dom@6
```

 dom 구성
```js
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Main/>}></Route>
              <Route path='/c' element={<Card/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
            </Route>
        </Routes>
      </DataProvider> 
    </BrowserRouter>
  )
}
```
 Layout 페이지
```js
import Header from "../components/Header/Header";
import FooterComp from "../components/Footer/FooterComp";
import Top from "../components/Function/Top";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return ( 
        <div>
            <Header/>
            <div>
                <Outlet />
            </div>
            <FooterComp/>
            <Top/>
        </div>
    );
}
```

## Swiper
[Swiper](https://swiperjs.com/react)는 하드웨어 가속 전환과 여러 기본 동작을 갖춘 현대적인 슬라이드 라이브러리입니다.
```html
npm i swiper
```
swiperAPI 옵션과 커스텀API 옵션을 확인하세요!

```js
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
```

## Page
react-router-dom을 이용한 페이지
```js
import { Link } from "react-router-dom";


  <Link to={"/c"} >
    <div className="banner">
      <img src="/img/추천카드.png" alt="추천카드img" />
     <span>인기 · 추천카드</span>
      <div></div>
      </div>
  </Link>
```
로그인 페이지 링크
![ShinHan](./public/README%20IMG/Screenshot_3.png)
로그인 페이지
![ShinHan](./public/README%20IMG/Screenshot_4.png)

인기/추천카드 페이지 링크
![ShinHan](./public/README%20IMG/Screenshot_2.png)
인기/추천 카드 페이지 
![ShinHan](./public/README%20IMG/Screenshot_5.png)

## 기능
카드 비교 기능 구현  
비교할 카드 옆 비교함담기 클릭
![ShinHan](./public/README%20IMG/Screenshot_7.png)
  위 드롭다운 버튼 클릭
![ShinHan](./public/README%20IMG/Screenshot_8.png)

![ShinHan](./public/README%20IMG/Screenshot_6.png)

## 반응형
본 페이지는 반응형페이지입니다  
React 반응형 라이브러리 react-responsive와  
css Media Query를 사용하였습니다
 ```js
npm i react-responsive
 ```
 ```js
import { useMediaQuery } from 'react-responsive'

const Comps = (props) => {
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 1100 })
        return isDesktop ? children : null
    }
    const Tablet = ({ children }) => {
        const isTablet = useMediaQuery({ maxWidth: 1100 })
        return isTablet ? children : null
    }

     const news=(    
        <>
            <Desktop>
            <div className="news-cont">
                <div className="news-box">
                    <h3>공지</h3>
                    <ul className="news-menu" >
                    {props.newslist.map((post)=>(
                        <li key={post.id}>{post.text}<span>New</span></li>
                    ))}
                    </ul>
                </div>
                <div className="news-box news-box2">
                    <h3 >금융소비자주의경보</h3>
                    <ul className="news-menu">
                    {props.newslist2.map((post)=>(
                        <li key={post.id}>{post.text}</li>
                    ))}
                    </ul>
                </div>
            </div>
            </Desktop>
            <Tablet>
            <div className="news-cont">
                <div className="news-box">
                    <div className="title-cont">
                        <h3 onClick={hide} style={{color:tab?"#888":"black"}}>공지</h3> 
                        <h3 onClick={hide} style={{color:tab?"black":"#888"}}>금융소비자주의경보</h3>
                    </div>
                    <ul className="news-menu" style={{display:tab?"none":"block"}} >
                    {props.newslist.map((post)=>(
                        <li key={post.id}>{post.text}<span>New</span></li>
                    ))}
                    </ul>
                    <ul className="news-menu" style={{display:tab?"block":"none"}} >
                    {props.newslist2.map((post)=>(
                        <li key={post.id}>{post.text}</li>
                    ))}
                    </ul>
                </div>
            </div>
            </Tablet>
        </>
    )
 ```
 ```css
  @media only screen and (max-width:1100px)
 ```

![ShinHan](./public/README%20IMG/Screenshot_10.png)

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

