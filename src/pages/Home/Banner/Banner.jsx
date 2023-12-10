import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import slider1 from '../../../assets/images/banner/1.jpg'
import slider2 from '../../../assets/images/banner/2.jpg'
import slider3 from '../../../assets/images/banner/3.jpg'
import slider4 from '../../../assets/images/banner/4.jpg'
import slider5 from '../../../assets/images/banner/5.jpg'
import slider6 from '../../../assets/images/banner/6.jpg'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './Banner.css'

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper rounded-2xl'
      >
        <SwiperSlide>
          <div
            className='hero min-h-screen'
            style={{
              backgroundImage:
                `url(${slider1})`
            }}
          >
            <div className='hero-overlay bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'></div>
            <div className='hero-content w-full left-0 flex justify-start text-neutral-content'>
              <div className='max-w-md'>
                <h1 className='mb-5 text-6xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                <p className='mb-5 text-lg'>
                There are many variations of passages of available, but the majority have suffered alteration in some form
                </p>
                <div className='gap-5 flex'>
                <button className='btn bg-[#FF3811] text-lg font-semibold hover:bg-transparent border-[#FF3811] px-8 text-white'>Discover More</button>
                <button className='btn bg-transparent hover:text-black text-lg font-semibold text-white px-8'>Latest Project</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div
            className='hero min-h-screen'
            style={{
              backgroundImage:
                `url(${slider2})`
            }}
          >
            <div className='hero-overlay bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'></div>
            <div className='hero-content w-full left-0 flex justify-start text-neutral-content'>
              <div className='max-w-md'>
                <h1 className='mb-5 text-6xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                <p className='mb-5 text-lg'>
                There are many variations of passages of available, but the majority have suffered alteration in some form
                </p>
                <div className='gap-5 flex'>
                <button className='btn bg-[#FF3811] text-lg font-semibold hover:bg-transparent border-[#FF3811] px-8 text-white'>Discover More</button>
                <button className='btn bg-transparent hover:text-black text-lg font-semibold text-white px-8'>Latest Project</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div
            className='hero min-h-screen'
            style={{
              backgroundImage:
                `url(${slider3})`
            }}
          >
            <div className='hero-overlay bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'></div>
            <div className='hero-content w-full left-0 flex justify-start text-neutral-content'>
              <div className='max-w-md'>
                <h1 className='mb-5 text-6xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                <p className='mb-5 text-lg'>
                There are many variations of passages of available, but the majority have suffered alteration in some form
                </p>
                <div className='gap-5 flex'>
                <button className='btn bg-[#FF3811] text-lg font-semibold hover:bg-transparent border-[#FF3811] px-8 text-white'>Discover More</button>
                <button className='btn bg-transparent hover:text-black text-lg font-semibold text-white px-8'>Latest Project</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div
            className='hero min-h-screen'
            style={{
              backgroundImage:
                `url(${slider4})`
            }}
          >
            <div className='hero-overlay bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'></div>
            <div className='hero-content w-full left-0 flex justify-start text-neutral-content'>
              <div className='max-w-md'>
                <h1 className='mb-5 text-6xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                <p className='mb-5 text-lg'>
                There are many variations of passages of available, but the majority have suffered alteration in some form
                </p>
                <div className='gap-5 flex'>
                <button className='btn bg-[#FF3811] text-lg font-semibold hover:bg-transparent border-[#FF3811] px-8 text-white'>Discover More</button>
                <button className='btn bg-transparent hover:text-black text-lg font-semibold text-white px-8'>Latest Project</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div
            className='hero min-h-screen'
            style={{
              backgroundImage:
                `url(${slider5})`
            }}
          >
            <div className='hero-overlay bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'></div>
            <div className='hero-content w-full left-0 flex justify-start text-neutral-content'>
              <div className='max-w-md'>
                <h1 className='mb-5 text-6xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                <p className='mb-5 text-lg'>
                There are many variations of passages of available, but the majority have suffered alteration in some form
                </p>
                <div className='gap-5 flex'>
                <button className='btn bg-[#FF3811] text-lg font-semibold hover:bg-transparent border-[#FF3811]  px-8 text-white'>Discover More</button>
                <button className='btn bg-transparent hover:text-black text-lg font-semibold text-white px-8'>Latest Project</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div
            className='hero min-h-screen'
            style={{
              backgroundImage:
                `url(${slider6})`
            }}
          >
            <div className='hero-overlay bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'></div>
            <div className='hero-content w-full left-0 flex justify-start text-neutral-content'>
              <div className='max-w-md'>
                <h1 className='mb-5 text-6xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                <p className='mb-5 text-lg'>
                There are many variations of passages of available, but the majority have suffered alteration in some form
                </p>
                <div className='gap-5 flex'>
                <button className='btn bg-[#FF3811] text-lg font-semibold hover:bg-transparent border-[#FF3811] px-8 text-white'>Discover More</button>
                <button className='btn bg-transparent hover:text-black text-lg font-semibold text-white px-8'>Latest Project</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner
