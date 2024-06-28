import React , {useRef,useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard, EffectCreative } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import '../styles/carousel.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-creative';

// Import Swiper styles
import 'swiper/css';
export default () => {
  const swiper = useSwiper();
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard,EffectCreative]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      keyboard={{
        enabled: true,
      }}
      speed={500}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="slider-contenu">
          <img src="./images/garage.jpg" alt="" />
          <h3 className='carousel-title'>Ceci est un test</h3>
          <p class="about-description">

              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sequi laborum in, deserunt, vel earum dolorum quisquam dignissimos error quis totam incidunt optio obcaecati ipsa, reiciendis excepturi cumque aliquid! Perspiciatis unde porro repudiandae id quam odit perferendis at delectus accusamus omnis, sapiente tempora? Doloremque voluptatum exercitationem sed harum magni reprehenderit?

              
          </p>
          <div className="about-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque perferendis at delectus eveniet accusamus! In maiores ea minus cupiditate minima, eveniet rerum, ut atque consectetur molestiae repellat? Dolor cumque, dolorem dolorum aspernatur quo, quas molestias reprehenderit quidem suscipit molestiae at, ducimus laudantium numquam soluta alias! Exercitationem optio labore quod et.
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-contenu">
          <img src="./images/garage-face.webp" alt="" />
          <h3>Depuis 78 ans</h3>
          <p class="about-description">

              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sequi laborum in, deserunt, vel earum dolorum quisquam dignissimos error quis totam incidunt optio obcaecati ipsa, reiciendis excepturi cumque aliquid! Perspiciatis unde porro repudiandae id quam odit perferendis at delectus accusamus omnis, sapiente tempora? Doloremque voluptatum exercitationem sed harum magni reprehenderit?


          </p>
          <div className="about-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque perferendis at delectus eveniet accusamus! In maiores ea minus cupiditate minima, eveniet rerum, ut atque consectetur molestiae repellat? Dolor cumque, dolorem dolorum aspernatur quo, quas molestias reprehenderit quidem suscipit molestiae at, ducimus laudantium numquam soluta alias! Exercitationem optio labore quod et.
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-contenu">
          <img src="./images/garage.jpg" alt="" />
          <h3>Ceci est un test</h3>
          <p class="about-description">

              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sequi laborum in, deserunt, vel earum dolorum quisquam dignissimos error quis totam incidunt optio obcaecati ipsa, reiciendis excepturi cumque aliquid! Perspiciatis unde porro repudiandae id quam odit perferendis at delectus accusamus omnis, sapiente tempora? Doloremque voluptatum exercitationem sed harum magni reprehenderit?


          </p>
          <div className="about-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque perferendis at delectus eveniet accusamus! In maiores ea minus cupiditate minima, eveniet rerum, ut atque consectetur molestiae repellat? Dolor cumque, dolorem dolorum aspernatur quo, quas molestias reprehenderit quidem suscipit molestiae at, ducimus laudantium numquam soluta alias! Exercitationem optio labore quod et.
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-contenu">
          <img src="./images/garage-face.webp" alt="" />
          <h3>Ceci est un test</h3>
          <p class="about-description">

              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sequi laborum in, deserunt, vel earum dolorum quisquam dignissimos error quis totam incidunt optio obcaecati ipsa, reiciendis excepturi cumque aliquid! Perspiciatis unde porro repudiandae id quam odit perferendis at delectus accusamus omnis, sapiente tempora? Doloremque voluptatum exercitationem sed harum magni reprehenderit?


          </p>
          <div className="about-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque perferendis at delectus eveniet accusamus! In maiores ea minus cupiditate minima, eveniet rerum, ut atque consectetur molestiae repellat? Dolor cumque, dolorem dolorum aspernatur quo, quas molestias reprehenderit quidem suscipit molestiae at, ducimus laudantium numquam soluta alias! Exercitationem optio labore quod et.
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-contenu">
          <img src="./images/garage.jpg" alt="" />
          <h3>Ceci est un test</h3>
          <p class="about-description">

              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sequi laborum in, deserunt, vel earum dolorum quisquam dignissimos error quis totam incidunt optio obcaecati ipsa, reiciendis excepturi cumque aliquid! Perspiciatis unde porro repudiandae id quam odit perferendis at delectus accusamus omnis, sapiente tempora? Doloremque voluptatum exercitationem sed harum magni reprehenderit?


          </p>
          <div className="about-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque perferendis at delectus eveniet accusamus! In maiores ea minus cupiditate minima, eveniet rerum, ut atque consectetur molestiae repellat? Dolor cumque, dolorem dolorum aspernatur quo, quas molestias reprehenderit quidem suscipit molestiae at, ducimus laudantium numquam soluta alias! Exercitationem optio labore quod et.
          </div>
        </div>
      </SwiperSlide>
      
      ...
    </Swiper>
  );
};