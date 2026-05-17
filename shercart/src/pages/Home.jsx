import Hero from "../components/Hero";
import Collection from "../components/Collection";
import BestSeller from "../components/BestSeller";

const Home = ({step}) => {
  return (
    <div>
      {step>=2 && <Hero/>}
      {step>=3 && <Collection/>}
      {step>=4 && <BestSeller/>}
    </div>
  );
};

export default Home;