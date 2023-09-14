import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../../Asset/Image/s1.jpg";
import s2 from "../../Asset/Image/s2.jpg";
import s3 from "../../Asset/Image/s3.jpg";
import "../../Asset/Style/Hero.css";
function IndividualIntervalsExample() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={10000}>
          <div className="gradient-overlay">
            <img
              className="d-block w-100"
              src={ExampleCarouselImage}
              alt="First slide"
            />
          </div>
          <Carousel.Caption className="first">
            <h3 className=" fs-1 fw-bold text-uppercase f1">
              say goodbye to cluttred closets,
              <span className="d-block">hello to organized eleganced</span>
            </h3>
            <button className="hide">Call us: +61 452 393 213</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <div className="gradient-overlay">
            <img className="d-block w-100" src={s2} alt="First slide" />
          </div>
          <Carousel.Caption className="first2">
            <h3 className="fs-1 fw-bold text-uppercase f1">
              CraftsManShip you can count on,
              <span className="d-block">quality you'll love!"</span>
            </h3>
            <button className="hide">Contact us</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <div className="gradient-overlay">
            <img className="d-block w-100" src={s3} alt="First slide" />
          </div>
          <Carousel.Caption className="first3">
            <h3 className=" fs-1 fw-bold text-uppercase f2">
              "Spot On Flooring: Your flooring experts!"
            </h3>
            <button className="hide">Contact us</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;
