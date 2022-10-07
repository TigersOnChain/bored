import { Component } from "react";

const btnText = "Mint Now";


let mintList = [
    {
        title: 'Project Size',
        count: '4000',
        desc: 'NFT\'s',
    },
    {
        title: 'Mint Price',
        count: '0.7',
        desc: 'EGLD',
    },
    {
        title: 'Mint Date',
        count: 'TBA',
        desc: '',
    },
]

class Mint extends Component {
    render() { 
        return (
            <section id="mint" className="mint padding-top padding-bottom bg--cover" style={{backgroundImage: "url(/assets/images/mint/bg.jpg)"}}>
                <div className="container">
                    <div className="mint__wrapper">
                        <div className="row g-5 align-items-end">
                            <div className="col-lg-6">
                                <div className="mint__content aos-animate aos-init" data-aos="fade-right" data-aos-duration="1000">
                                    <div className="row gy-5 gx-4 align-items-center">
                                        {mintList.map((val, i) => (
                                            <div className="col-6" key={i}>
                                                <div className="mint__item">
                                                    <div className="mint__inner">
                                                        <h6 className="mint__sub-title">{val.title}</h6>
                                                        <h2 className="mint__numbers">{val.count}</h2>
                                                        <h4 className="mint__name text-uppercase">{val.desc}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="col-6">
                                            <div className="text-start">
                                                <a href="#" className="default-btn">{btnText}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mint__thumb aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                    <img src="assets/images/mint/01.png" alt="Minting Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="monkey-icon">
                    <img src="assets/images/mint/monkey.png" alt="Monkey Icon" />
                </div>
            </section>
        );
    }
}
 
export default Mint;