import React, { useEffect, useState } from 'react'
import OwlCarousel from "react-owl-carousel";
import { Link } from 'react-router-dom';
import axiosCall from '../Axios';

const options = {
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  items: 1,
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  smartSpeed: 700,
  mouseDrag: false,
  touchDrag: false
};

const Slider = () => {
  const [isLoading, setLoading] = useState(true);
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    axiosCall("slider").then((res) => {
      setSlider([...res.data]);
      setLoading(false);
    }
    );
  }, []);

  return (
    <section className="slider bg-gray">

      {
        isLoading ? <div className="loading"><img src='assets/img/loader.gif' alt='loading' /></div> :

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">

                {slider.length &&
                  <OwlCarousel className="slider-home" {...options}>

                    {
                      slider.map((item, index) => {
                        return (
                          <div className="item" key={index}>
                            <img src={item.img} alt={item.page} className="img-fluid" />

                            <div className="caption">
                              {item.heading.split("\n").map((t, key) => {
                                return <h1 key={key}>{t}</h1>;
                              })}
                              <div className="line"></div>
                              <h3>{item.content}</h3>

                              {
                                item.pageDec == "" ? '' : <Link to={`/${item.page}`} className="cutsom-btn">{item.pageDec} <i
                                  className="fa-solid fa-arrow-right"></i></Link>
                              }

                            </div>
                          </div>
                        )
                      })
                    }

                  </OwlCarousel>
                }

              </div>
            </div>
          </div>
      }



    </section>
  )
}

export default Slider