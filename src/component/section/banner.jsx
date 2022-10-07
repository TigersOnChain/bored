import { Component } from "react";

const title = <h1 className="text--3d text-uppercase"> <span className="color--gradient-y">Tigers</span> <br /> On Chain</h1>
const desc = "4000 Unique tigers on the Elrond Blockchain";
const btnText = "View On Frameit";


let socialList = [
    {
        imgUrl: 'assets/images/social/discord.png',
        imgAlt: 'Social Thumb',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/social/twitter.png',
        imgAlt: 'Social Thumb',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/social/instagram.png',
        imgAlt: 'Social Thumb',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/social/twitch.png',
        imgAlt: 'Social Thumb',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/social/youtube.png',
        imgAlt: 'Social Thumb',
        siteLink: '#',
    },
]

let bannerAppsImageList = [
    {
        imgUrl: 'assets/images/banner/apes/01.png',
        imgAlt: 'Banner Apps',
        duration: '1500',
    },
    {
        imgUrl: 'assets/images/banner/apes/02.png',
        imgAlt: 'Banner Apps',
        duration: '1000',
    },
    {
        imgUrl: 'assets/images/banner/apes/03.png',
        imgAlt: 'Banner Apps',
        duration: '1500',
    },
    {
        imgUrl: 'assets/images/banner/apes/04.png',
        imgAlt: 'Banner Apps',
        duration: '1000',
    },
]

class Banner extends Component {
    render() { 
        return (
            <section id="home" className="banner" style={{backgroundImage: "url(/assets/images/banner/banner-bg.jpg)"}}>
                <div className="container">
                    <div className="banner__wrapper">
                        <div className="row g-5 align-items-center justify-content-center">
                            <div className="col">
                                <div className="banner__content text-center" data-aos="fade-up" data-aos-duration="2000">
                                    {title}
                                    <p>{desc}</p>
                                    <ul className="social justify-content-center mb-5">
                                        {socialList.map((val, i) => (
                                            <li className="social__item" key={i}>
                                                <a href={val.siteLink} className="social__link"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></a>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="https://www.frameit.gg/marketplace/TOC-eea288/items" className="default-btn">{btnText}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="banner__apes">
                    {bannerAppsImageList.map((val, i) => (
                        <li className="banner__apes-item" key={i}>
                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
}
 
export default Banner;