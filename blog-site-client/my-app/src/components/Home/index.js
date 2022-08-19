import React,{useLayoutEffect, useState} from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

//components
import Header from '../globals/Header';
import Section1 from './Section1';

import './style.css';
import '../globals/styles/main.css';
import Section2 from './Section2';
import Section3 from './Section3';
import Footer from './Footer';

function Home() {

    const [slides,setSlides] = useState(3);
    const [slideGap,setSlideGap] = useState(50);
    const [padding,setPadding] = useState(3);

    useLayoutEffect(()=>{
        function updateSize() {
            setSlides(window.innerWidth/300);

            if(window.innerWidth < 500){
                setPadding(1);
                setSlideGap(20);
            }else if(window.innerWidth < 800){
                setPadding(2);
                setSlideGap(30);
            }else{
                setPadding(3);
                setSlideGap(50);
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    },[]);

    return (
        <div className='layout'>
            <Header />
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={100}
                slidesPerView={1}
                //navigation={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}          
                //pagination={{ clickable: true }}
                className='carousel box-100 flex-row bg-dark'
            >
                <SwiperSlide className='slide box-100 flex-row'>
                    <h1 className='title big ft-poppins ft-bg center-text'
                        style={{backgroundImage: 'url("./media/font-bgwebp.webp")'}}
                    >Write Blogs</h1>
                </SwiperSlide>
                <SwiperSlide className='slide box-100 flex-row'>
                    <h1 className='title big ft-poppins ft-bg center-text'
                        style={{backgroundImage: 'url("./media/font-bgwebp.webp")'}}
                    >In Your</h1>
                </SwiperSlide>
                <SwiperSlide className='slide box-100 flex-row'>
                    <h1 className='title big ft-poppins ft-bg center-text'
                        style={{backgroundImage: 'url("./media/font-bgwebp.webp")'}}
                    >Own Way</h1>
                </SwiperSlide>
            </Swiper>
            <Section1 padding={padding}/>
            <div className='box-100 flex-row'>
                <div className='box-95 flex-column hide-flow'>
                    <h4 className='dashed mg-tp-3 mg-bt-1'>Categories</h4>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={slideGap}
                        slidesPerView={slides}
                        navigation={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}          
                        className='carousel-small box-100 flex-row mg-1 mg-tp-1 mg-bt-2'
                    >
                        <SwiperSlide className='slide-small flex-row flex-end bg-primary' 
                            style={{backgroundImage:'url("./media/categs/business.webp")'}}
                        >Business</SwiperSlide>
                        <SwiperSlide className='slide-small flex-row flex-end bg-primary' 
                            style={{backgroundImage:'url("./media/categs/tech.webp")'}}
                        >Technology</SwiperSlide>
                        <SwiperSlide className='slide-small flex-row flex-end bg-primary' 
                            style={{backgroundImage:'url("./media/categs/fashion.webp")'}}
                        >Fashion</SwiperSlide>
                        <SwiperSlide className='slide-small flex-row flex-end bg-primary' 
                            style={{backgroundImage:'url("./media/categs/food.webp")'}}
                        >Food</SwiperSlide>
                        <SwiperSlide className='slide-small flex-row flex-end bg-primary' 
                            style={{backgroundImage:'url("./media/categs/travel.webp")'}}
                        >Travel</SwiperSlide>
                        <SwiperSlide className='slide-small flex-row flex-end bg-primary' 
                            style={{backgroundImage:'url("./media/categs/movie.webp")'}}
                        >Entertainment</SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <Section2 padding={padding}/>
            <Section3 padding={padding}/>
            <Footer padding={padding}/>
        </div>
    )
}

export default Home