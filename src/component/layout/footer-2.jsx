import { Component } from "react";


const title = "Follow Us!";
const desc = "If two Heads Area Better Than One, 4000 Heads Should Be Way Better! Join Our Community.";

let socialList = [
    {
        imgUrl: 'assets/images/social/discord.png',
        imgAlt: 'Discord',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/social/twitter.png',
        imgAlt: 'twitter',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/social/instagram.png',
        imgAlt: 'instagram',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/social/twitch.png',
        imgAlt: 'twitch',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/social/youtube.png',
        imgAlt: 'youtube',
        siteLink: '#',
    },
]

class FooterTwo extends Component {
    render() { 
        return (
            <footer className="footer bg--cover" style={{backgroundImage: "url(/assets/images/footer/bg.jpg)"}}>
                <div className="footer__wrapper padding-top padding-bottom aos-animate aos-ini" data-aos="fade-up"
                    data-aos-duration="1000">
                    <div className="container">
                        <div className="footer__content text-center t">
                            <h2 className="color--gradient-y">{title}</h2>
                            <p>{desc}</p>
                            <ul className="social justify-content-center">
                                {socialList.map((val, i) => (
                                    <li className="social__item" key={i}>
                                        <a href={`${val.siteLink}`} className="social__link"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    <div className="container">
                        <div className="text-center py-4">
                            <p className=" mb-0">© 2022 Apes Land | All Rights Reserved <a href="https://www.templatemonster.com/authors/labartisan" className="color--theme-color" target="_blank"> Labartisan</a> </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default FooterTwo;