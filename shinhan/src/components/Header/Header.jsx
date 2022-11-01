import HeadBottomComp from './HeadBottomComp';
import HeadTopComp from './HeadTopComp';
const Header = () => {
  return (
    <div className="header">
     <div className="inner">
        <HeadTopComp />
        <HeadBottomComp/>
      </div>
    </div>
  );
};


export default Header;
