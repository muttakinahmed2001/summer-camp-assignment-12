import image from "../../../assets/about.jpg";
const About = () => {
  return (
    <div className="p-5 d-flex gap-5">
      <img className="w-96 h-72" src={image} alt="" />

      <div>
        <h1>About Us</h1>
        <h2>Flexible modern language courses</h2>
        <p>
          {" "}
          Our language courses are split into ability levels from complete
          beginner through to advanced learners. Each language level is divided
          into four six-week modules designed to follow smoothly on from each
          other to give a clear sense of progression. Our modern language
          modules allow you to take language learning as far as you want to -
          from a single 6 week course to as many modules in a level as you need.
        </p>
      </div>
    </div>
  );
};

export default About;
