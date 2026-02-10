import React from "react";
import { motion } from "framer-motion";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../assets/image/banner1.png";
import banner2 from "../assets/image/banner2.png";
import banner3 from "../assets/image/banner3.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const banners = [
  { id: 1, src: banner1, alt: "Peaceful" },
  { id: 2, src: banner2, alt: "Peaceful" },
  { id: 3, src: banner3, alt: "Peaceful" },
  
];

const Hero = () => {
  return (
    <section className="block relative w-full overflow-hidden">
      {/* Container with max height to prevent excessive height on desktop */}
      <div className="relative w-full max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px]">
        {/* Aspect ratio wrapper */}
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          <div className="absolute inset-0">
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              effect="fade"
              loop={true}
              pagination={{ 
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              className="w-full h-full"
            >
              {banners.map((banner) => (
                <SwiperSlide key={banner.id}>
                  <div className="relative w-full h-full">
                    <motion.img
                      src={banner.src}
                      alt={`${banner.alt}`}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1.05, opacity: 1 }}
                      transition={{ duration: 2.5, ease: "easeOut" }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Responsive pagination styling */}
      <style>{`
        .swiper-pagination {
          bottom: 12px !important;
        }
        
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.6);
          opacity: 1;
          width: 8px;
          height: 8px;
          margin: 0 4px !important;
        }
        
        .swiper-pagination-bullet-active {
          background: rgba(255, 255, 255, 1);
          width: 10px;
          height: 10px;
        }
        
        /* Mobile optimizations */
        @media (max-width: 640px) {
          .swiper-pagination {
            bottom: 8px !important;
          }
          
          .swiper-pagination-bullet {
            width: 6px;
            height: 6px;
            margin: 0 3px !important;
          }
          
          .swiper-pagination-bullet-active {
            width: 8px;
            height: 8px;
          }
        }
        
        /* Tablet optimizations */
        @media (min-width: 641px) and (max-width: 1024px) {
          .swiper-pagination {
            bottom: 10px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;