import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import CarsoulHero from "../CarsoulHero/CarsoulHero";



const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
           <div className="min-h-screen">
           <Outlet></Outlet> 
           </div>

           <CarsoulHero></CarsoulHero>
         
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;