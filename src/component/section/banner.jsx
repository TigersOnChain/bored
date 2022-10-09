import { Component } from "react";

const title = <h1 className="text--3d text-uppercase"> <span className="color--gradient-y">Tigers</span> <br /> On Chain</h1>
const desc = "4000 Unique tigers on the Elrond Blockchain";
const btnText = "Whitepaper";


let socialList = [
    {
        imgUrl: 'assets/images/social/discord.png',
        imgAlt: 'Social Thumb',
        siteLink: 'https://discord.gg/Nwjk7vAkBv',
    },
    {
        imgUrl: 'assets/images/social/twitter.png',
        imgAlt: 'Social Thumb',
        siteLink: 'https://twitter.com/Tigersonchain?s=20&t=inTt8yo0facnnOGonQv-wQ',
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
                                    <a href="https://drive.google.com/file/d/1xOKO0CIYjMexJP3jsUhK4jfxzuYavorI/view" className="default-btn">{btnText}</a>
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