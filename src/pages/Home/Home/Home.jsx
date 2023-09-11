import { Helmet } from "react-helmet-async";
import Animation from "../Animation/Animation";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Carousal from "../Slider/Carousal";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
  const arabic = "arabic";
  const mandarin = "mandarin";
  const language = "english";

  return (
    <div>
      <Helmet>
        <title>Home | Language Class</title>
      </Helmet>

      <div>
        <Carousal />
        <PopularClasses></PopularClasses>
        <PopularInstructors />

        <Animation language={arabic} />
        <Animation language={language} />
        <Animation language={mandarin} />
      </div>
    </div>
  );
};

export default Home;
