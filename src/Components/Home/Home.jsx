import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturesJobs from './../FeaturesJobs/FeaturesJobs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturesJobs></FeaturesJobs>
            <h2>This is Home</h2>
        </div>
    );
};

export default Home;