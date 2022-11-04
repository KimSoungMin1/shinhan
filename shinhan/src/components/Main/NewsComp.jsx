
import { useState  } from "react";
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
        
    const [tab,setTab]=useState(false)
        const hide=()=>{
            setTab(!tab)
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
    return ( 
        <div className="news-section">
            {news}
        </div>
    );
}
const NewsComp=()=>{
    return (
    <Comps newslist={newslist} newslist2={newslist2}/>
    )
}
const newslist=[
    {
        id:1,
        text:"신한큼융투자 사명변경 안내"
    },
    {
        id:2,
        text:"일부결제금액이월약정(리볼빙)신청서 개정 안내"
    },
    {
        id:3,
        text:"LADY/2030 카드 영화서비스(메가박스 창원점) 변경 안내"
    }
]
const newslist2=[
    {
        id:1,
        text:"지인 사칭 및 정부지원을 방자한 보이스피싱 경보"
    },
    {
        id:2,
        text:"불법금융광고에 현혹되면 나도 모르게 범죄자가 될 수 있습니다"
    },
    {
        id:3,
        text:"대리입금 광고에 현혹되면 고금리,불법 채권추심,협박 등의 위험에 노출되..."
    }
]
export default NewsComp;