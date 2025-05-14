import Header from "../Commons/header";
import HeaderNavbar from "./home-navbar";
import HomeTopBar from "./home-topbar";
import HomeFindByProduct from "./home-find-by-product";
import HomeFeaturedProducts from "./home-view-featured-products";
import HomeFooter from "./home-footer";
import HomeStats from "./home-stats";
import HomeInterface from "./home-interface";
import { Box } from "@mui/material";
const HomePage = () => {
	return(
        <>
          
            <HomeInterface/>
            <HomeTopBar/>
            <HomeStats/>
            <HomeFindByProduct/>
            <HomeFeaturedProducts/>
            <HomeFooter/>
        </>

    ); 

};

export default HomePage;
