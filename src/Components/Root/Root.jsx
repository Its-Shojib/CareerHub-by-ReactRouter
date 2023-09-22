import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header.jsx/Header";


const Root = () => {
    return (
        <div className="text-center">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;