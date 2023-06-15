import Animation from "../Animation/Animation";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Carousal from "../Slider/Carousal";

 
const Home = () => {
    const arabic = "arabic"
    const mandarin = "mandarin"
    const language = "english";

  return (
    <div>
      <Carousal />
      <PopularInstructors />

      <Animation language={arabic} />
      <Animation language={language} />
      <Animation language={mandarin} />
    </div>
  );
};


export default Home;