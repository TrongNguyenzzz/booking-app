import "./featured.css";
import tucson from "../../assets/cityImg/tucson.png";
import hanoi from "../../assets/cityImg/hanoi.png";
import dongha from "../../assets/cityImg/dongha.png";
import nyc from "../../assets/cityImg/nyc.png";
import la from "../../assets/cityImg/la.png";
import seattle from "../../assets/cityImg/seattle.png";
import berlin from "../../assets/cityImg/berlin.png";
import budapest from "../../assets/cityImg/budapest.png";
import london from "../../assets/cityImg/london.png";

import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Featured = () => {
    
    const navigate = useNavigate();

    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide>
            <div className="featureItem">
                <img className = "featuredImg1" src = { hanoi } alt = "hanoi" onClick={() => navigate("/hanoi")}/>
                <div className="featureTitle">
                    <h1> Hà Nội </h1>
                </div>
            </div> 
        </SwiperSlide>

        <SwiperSlide>
            <div className="featureItem">
                <img className = "featuredImg1" src = { budapest } alt = "" onClick={() => navigate("/budapest")}/>
                <div className="featureTitle">
                    <h1> Budapest </h1>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="featureItem">
                <img className = "featuredImg1" src = { tucson } alt = "tucson" onClick={() => navigate("/tucson")}/>
                <div className="featureTitle">
                    <h1> Tucson </h1>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="featureItem">
                <img className = "featuredImg1" src = { dongha } alt = "dongha" onClick={() => navigate("/dongha")}/>
                <div className="featureTitle">
                    <h1> Đông Hà </h1>
                </div>
            </div> 
        </SwiperSlide>

        <SwiperSlide>
            <div className="featureItem">
                <img className = "featuredImg1" src = { nyc } alt = "" onClick={() => navigate("/newyork")}/>
                <div className="featureTitle">
                    <h1> New York </h1>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="featureItem">
                <img className = "featuredImg1" src = { la } alt = "" onClick={() => navigate("/la")}/>
                <div className="featureTitle">
                    <h1> Los Angeles </h1>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="featureItem">
                <img className = "featuredImg1" src = { seattle } alt = "" onClick={() => navigate("/Seattle")}/>
                <div className="featureTitle">
                    <h1> Seattle </h1>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="featureItem">
                <img className = "featuredImg1" src = { berlin } alt = "" onClick={() => navigate("/berlin")}/>
                <div className="featureTitle">
                    <h1> Berlin </h1>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="featureItem">
                <img className = "featuredImg1" src = { london } alt = "" onClick={() => navigate("/london")}/>
                <div className="featureTitle">
                    <h1> London </h1>
                </div>
            </div>
        </SwiperSlide>

        </Swiper>
    )
}

export default Featured;