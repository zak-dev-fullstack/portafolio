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
    slidesToScroll: 1, 
    autoplay: true,
    speed: 1000, 
    autoplaySpeed: 2500, 
    cssEase: "linear",
    swipeToSlide: true,
  };

  const slideItems = [imgproyecto1, imgproyecto2, imgproyecto3];

  return (
    <div className="slide-container">
      <Slider {...settings} className="custom-slider">
        {slideItems.map((img, index) => (
          <div key={index} className="slide-item">
            <img
              src={img}
              alt={`Portafolio ${index + 1}`}
              className="slide-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlideZ;
