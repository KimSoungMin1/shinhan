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

export default Layout;