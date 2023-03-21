import React, { useEffect, useState } from 'react'
import axiosCall from '../Axios';

const Banner = ({page}) => {
    const [isLoading, setLoading] = useState(true);
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        axiosCall("page").then((res) => {
            setBanner([...res.data]);
            setLoading(false);
        }
        );
    }, []);

    return (
        <section className="slider bg-gray">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        {
                            isLoading ? <div className="loading"><img src='assets/img/loader.gif' alt='loading' /></div> :

                                <div className="slider-banner">
                                    {
                                        banner.map((item, index) => {
                                            return item.name == page ? (
                                                <div className="item" key={index}>
                                                    <img src={item.banner} alt={item.name} className="img-fluid" />

                                                    <div className="caption">
                                                        {item.heading.split("\n").map((t, key) => {
                                                            return <h1 key={key}>{t}</h1>;
                                                        })}
                                                        <div className="line"></div>
                                                        <h3>{item.subHeading}</h3>
                                                    </div>
                                                </div>
                                            ) : null
                                        })
                                    }

                                </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner