import EventSection from "./EventSection";
import CardSection from "./CardSection";
import NavSection from "./NavSection";
import NewsComp from "./NewsComp";
import MenuItemComp from "./MenuItemComp";
const Main = () => {
  return ( 
    <div className="Main">
      <MenuItemComp/>
      <EventSection/>
      <CardSection/>
      <NavSection/>
      <NewsComp/>
    </div>
    
  );
}


export default Main;
