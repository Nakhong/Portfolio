import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import IMG1 from "../../assets/home.jpg";
import IMG2 from "../../assets/todolist.png";
import IMG3 from "../../assets/responsive.JPG";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="Swiper_container">
          <h3>감정일기장</h3>
          <img alt="" src={IMG1} />
          <div className="Swiper_btn">
            <a
              href="https://github.com/Nakhong/emotion_diary"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://hhn-react-diary1.firebaseapp.com/"
              className="btn"
              target="_blank"
            >
              Demo Site
            </a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="Swiper_container">
          <h3>Todolist</h3>
          <img alt="" src={IMG2} />
          <div className="Swiper_btn">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://my-hhn-todolist.firebaseapp.com/"
              className="btn"
              target="_blank"
            >
              Demo Site
            </a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="Swiper_container">
          <h3>반응형 웹사이트</h3>
          <img alt="" src={IMG3} />
          <div className="Swiper_btn">
            <a
              href="https://github.com/Nakhong/HTML-CSS"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/Nakhong/HTML-CSS"
              className="btn"
              target="_blank"
            >
              Demo Site
            </a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
