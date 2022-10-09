import { Component } from "react";

const title = "Follow Us!";
const desc = "If two Heads Area Better Than One, 4000 Heads Should Be Way Better! Join Our Community.";

let socialList = [
    {
        imgUrl: 'assets/images/social/discord.png',
        imgAlt: 'Discord',
        siteLink: 'https://discord.gg/Nwjk7vAkBv',
    },
    {
        imgUrl: 'assets/images/social/twitter.png',
        imgAlt: 'twitter',
        siteLink: 'https://twitter.com/Tigersonchain?s=20&t=inTt8yo0facnnOGonQv-wQ',
    },
   
]

class Footer extends Component {
    render() { 
        return (
            <footer className="footer">
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
                
            </footer>
        );
    }
}
 
export default Footer;