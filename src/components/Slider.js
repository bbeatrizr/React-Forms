import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img01 from '../image/img01.jpeg'; 
import img02 from '../image/img02.jpeg'; 
import img03 from '../image/img03.jpeg'; 

const settings = {
  dots: false,
  fade: true,
 
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Carousel = () => {
  return(
    <div>
      <Slider {...settings}>
        <div className="wrapper-image">
          <img src={img01} alt="img 01"/>
        </div>
        <div className="wrapper-image">
          <img src={img02} alt="img 02"/>
        </div>
        <div className="wrapper-image">
          <img src={img03} alt="img 03"/>
        </div>
      </Slider>
    </div>
  )
}

export default Carousel;
