import Slider from "react-slick";
import imgproyecto1 from "../../../assets/gifz.gif";
import imgproyecto2 from "../../../assets/gifz.gif";
import imgproyecto3 from "../../../assets/gifz.gif";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";


function SlideZ() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 0,
    cssEase: "linear",
    swipeToSlide: true,
  };
  return (
    <div className="slide-container">
      <Slider {...settings} className="custom-slider">
        <div>
          <div className="slide-item">
            <img
              src={imgproyecto1}
              alt="Portafolio"
              className="slide-image"
            />
          </div>
        </div>
        <div>
          <div className="slide-item">
            <img
              src={imgproyecto2}
              alt="Portafolio"
              className="slide-image"
            />
          </div>
        </div>
        <div>
          <div className="slide-item">
            <img
              src={imgproyecto3}
              alt="Portafolio"
              className="slide-image"
            />
          </div>
        </div>
        <div>
          <div className="slide-item">
            <img
              src={imgproyecto1}
              alt="Portafolio"
              className="slide-image"
            />
          </div>
        </div>
        <div>
          <div className="slide-item">
            <img
              src={imgproyecto2}
              alt="Portafolio"
              className="slide-image"
            />
          </div>
        </div>
        <div>
          <div className="slide-item">
            <img
              src={imgproyecto3}
              alt="Portafolio"
              className="slide-image"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SlideZ;
