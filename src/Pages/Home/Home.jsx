import Banner from "../../Components/Banner/Banner";
import CraftItem from "../../Components/CraftItem/CraftItem";
import Services from "../../Components/Services/Services";
import States from "../../Components/States/States";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Paper_craft || Home</title>
      </Helmet>
      <Banner></Banner>
      <CraftItem></CraftItem>
      <Services></Services>
      <States></States>

    </div>
  );
};

export default Home;