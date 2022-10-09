import { Component } from "react";

const title = <h2 className="text--3d"> <span className="color--gradient-y d-block"> Meet</span> Our Team</h2>;
const desc = "Some teams call themselves a family, but we actually are one! all designers with a passion for art";


let teamList = [
    {
        imgUrl: 'assets/images/team/01.png',
        imgAlt: 'team Image',
        name: 'Herouko',
        degi: 'Digital Artist',
    },
    {
        imgUrl: 'assets/images/team/02.png',
        imgAlt: 'team Image',
        name: 'Alexein',
        degi: 'Dev Front',
    },
    {
        imgUrl: 'assets/images/team/03.png',
        imgAlt: 'team Image',
        name: 'Shere Khan',
        degi: 'Community master',
    },
    {
        imgUrl: 'assets/images/team/04.png',
        imgAlt: 'team Image',
        name: 'Vitaly',
        degi: 'Expert Blockchain',
    },
    {
        imgUrl: 'assets/images/team/05.png',
        imgAlt: 'team Image',
        name: 'Rajah',
        degi: 'Marketing',
    },
]


class Team extends Component {
    render() { 
        return (
            <section id="team" className="team padding-top padding-bottom bg--fixed" style={{backgroundImage: "url(/assets/images/team/bg.jpg)"}}>
                <div className="container">
                    <div className="section-header aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                        <div className="section-header__content">
                            {title}
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className="team__wrapper">
                        <div className="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-3">
                            {teamList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="team__item" data-aos="flip-right" data-aos-duration="1000">
                                        <div className="team__inner">
                                            <div className="team__thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="team__content">
                                                <h5><a href="#">{val.name}</a></h5>
                                                <p>{val.degi}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Team;