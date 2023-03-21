import React, { useEffect, useState } from 'react'
import OwlCarousel from "react-owl-carousel";
import { Link } from 'react-router-dom';
import axiosCall from '../Axios';

const options = {
    items: 1,
    loop: false,
    nav: true,
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
    dots: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    smartSpeed: 700,
};

const Bewertungen = ({clr}) => {
    const [isLoading, setLoading] = useState(true);
    const [review, setReview] = useState([]);

    useEffect(() => {
        axiosCall("review").then((res) => {
            setReview([...res.data]);
            setLoading(false);
        }
        );
    }, []);

    return (
        <section className={`review ${clr ? 'bg-white' : 'bg-gray'}`}>
            <div className="container-fluid container-custom">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title text-center wow slideInUp">
                            <p>Bewertungen</p>
                            <h2>Was man über uns sagt</h2>
                        </div>
                    </div>
                </div>
                {
                    isLoading ? <div className="loading"><img src='assets/img/loader.gif' alt='loading' /></div> :
                        <div className="row">
                            <div className="col-md-12">
                                {
                                    review.length && <OwlCarousel className="review-carousel" {...options}>

                                        {
                                            review.map((item, index) => {
                                                return (
                                                    <div className="item" key={index}>
                                                        <div className="img-style wow slideInUp">
                                                            <img src={item.img} alt={item.name} className="img-fluid" />
                                                        </div>

                                                        <div className="review-content">
                                                            <div className="review-content-say wow slideInUp">
                                                                <p>{item.desc}</p>

                                                                <img src="assets/img/double-quote.png" alt="quote" className="img-fluid img-quote" />
                                                            </div>

                                                            <div className="designation wow slideInUp">
                                                                <p><strong>{item.name}</strong></p>
                                                                <p>{item.designation}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </OwlCarousel>
                                }
                            </div>
                        </div>
                }
            </div>
        </section>
    )
}

export default Bewertungen