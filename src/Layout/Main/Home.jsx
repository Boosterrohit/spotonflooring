import React from "react";
import Slider from "../../Component/Home/Slider.jsx";
import ImageSlider from "../../Component/Home/ImageSlider.jsx";
import OurService from "../../Component/Home/OurService.jsx";
import Project from "../../Component/Home/Project.jsx";
import FeedBack from "../../Component/Home/FeedBack.jsx";
import Contact from "../../Component/Home/Contact.jsx";
const Home = () => {
  return (
    <main>
      <Slider />
      <ImageSlider />
      <OurService />
      <Project />
      <FeedBack />
      <Contact />
    </main>
  );
};

export default Home;
