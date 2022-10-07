import { Component } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";


const title = <h2> <span className="color--gradient-y">The</span> Collection</h2>;
const desc = "4000 Unique Digital Tigers ready to pounce in the Jungleverse of Elrond Network.";
const btnText = "View On Frameit";


let collectionSlider = [
    {
        imgUrl: 'assets/images/collection/01.jpg',
        imgAlt: 'NFT Image',
    },
    {
        imgUrl: 'assets/images/collection/02.jpg',
        imgAlt: 'NFT Image',
    },
    {
        imgUrl: 'assets/images/collection/03.jpg',
        imgAlt: 'NFT Image',
    },
    {
        imgUrl: 'assets/images/collection/04.jpg',
        imgAlt: 'NFT Image',
    },
    {
        imgUrl: 'assets/images/collection/05.jpg',
        imgAlt: 'NFT Image',
    },
    {
        imgUrl: 'assets/images/collection/06.jpg',
        imgAlt: 'NFT Image',
    },
]


let collectionSliderTwo = [
    {
        imgUrl: 'assets/images/collection/07.jpg',
        imgAlt: 'NFT Image',
    },
    {
        imgUrl: 'assets/images/collection/08.jpg',
        imgAlt: 'NFT Image',
    },
    {
        imgUrl: 'assets/images/collection/09.jpg',
        imgAlt: 'NFT Image',
    },
    {
        imgUrl: 'assets/images/collection/10.jpg',
        imgAlt: 'NFT Image',
    },
    {
        imgUrl: 'assets/images/collection/11.jpg',
        imgAlt: 'NFT Image',
    },
    {
        imgUrl: 'assets/images/collection/12.jpg',
        imgAlt: 'NFT Image',
    },
]

class Collection extends Component {
    render() { 
        return (
            <section className="collection padding-top padding-bottom" id="collection">
                <div className="container">
                    <div className="section-header aos-animate aos-init" data-aos="fade-up" data-aos-duration="1000">
                        <div className="section-header__content">
                            {title}
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className="collection__wrapper">
                        <div className="collection__thumb">
                            <div className="swiper collection__thumb-slider-1 mb-3">
                                <Swiper
                                    spaceBetween={15}
                                    slidesPerView={6}
                                    loop={'true'}
                                    autoplay={{
                                        delay: 1,
                                        disableOnInteraction: false,
                                    }}
                                    speed={4000}
                                    modules={[Autoplay]}
                                    >
                                    {collectionSlider.map((val, i) => (
                                        <SwiperSlide key={i}>
                                            <div className="collection__thumb-item">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="swiper collection__thumb-slider-2">
                                <Swiper
                                    spaceBetween={15}
                                    slidesPerView={6}
                                    loop={'true'}
                                    autoplay={{
                                        delay: 1,
                                        reverseDirection: true,
                                    }}
                                    speed={3000}
                                    modules={[Autoplay]}
                                    >
                                    {collectionSliderTwo.map((val, i) => (
                                        <SwiperSlide key={i}>
                                            <div className="collection__thumb-item">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="text-center mt-5">
                                <a href="https://www.frameit.gg/marketplace/TOC-eea288/items" className="default-btn">{btnText}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Collection;