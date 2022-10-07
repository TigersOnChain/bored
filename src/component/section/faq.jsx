import { Component } from "react";

const title = <h2 className="mx-0"> <span className="color--gradient-y d-block"> F.A.Q</span> Questions</h2>;

class Faq extends Component {
    render() { 
        return (
            <section id="faq" className="faq padding-top padding-bottom">
                <div className="container">
                    <div className="faq__wrapper">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6">
                                <div className="section-header">
                                    <div className="section-header__content text-start">
                                        {title}
                                    </div>
                                </div>
                                <div className="accordion" id="faqAccordion2">
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <div className="accordion__item" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="accordion__header" id="faq1">
                                                    <button className="accordion__button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqBody1" aria-expanded="false" aria-controls="faqBody1">
                                                         What is Tigers On Chain? <span className="plus-icon"></span>
                                                    </button>
                                                </div>
                                                <div id="faqBody1" className="accordion-collapse collapse" aria-labelledby="faq1" data-bs-parent="#faqAccordion2">
                                                    <div className="accordion__body">Tigers On Chain is a collection of 4000 unique tigers living on the Elrond blockchain with a host of different traits. Tigers On Chain NFTs are a gateway to an entire ecosystem governed by and for the community. Owning a Tiger will give you access to a multitude of advantages and rewards throughout the roadmap.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="accordion__item" data-aos="fade-up" data-aos-duration="1100">
                                                <div className="accordion__header" id="faq2">
                                                    <button className="accordion__button" type="button" data-bs-toggle="collapse" data-bs-target="#faqBody2" aria-expanded="true" aria-controls="faqBody2">
                                                         What is the Jungleverse? <span className="plus-icon"></span>
                                                    </button>
                                                </div>
                                                <div id="faqBody2" className="accordion-collapse collapse show" aria-labelledby="faq2" data-bs-parent="#faqAccordion2">
                                                    <div className="accordion__body">The Jungleverse is the home of the tigers, it is a 3D environment whose access is, for the moment, reserved for the holders of Tigers. This environment will host all community events as well as all the features planned in the roadmap: Zombification, Staking, Farming and above all a Casino where you can play your $EGLD as well as your $TOC.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="accordion__item" data-aos="fade-up" data-aos-duration="1200">
                                                <div className="accordion__header" id="faq3">
                                                    <button className="accordion__button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqBody3" aria-expanded="false" aria-controls="faqBody3">
                                                         What is Zombification?<span className="plus-icon"></span>
                                                    </button>
                                                </div>
                                                <div id="faqBody3" className="accordion-collapse collapse" aria-labelledby="faq3" data-bs-parent="#faqAccordion2">
                                                    <div className="accordion__body">Zombification is an event with a deflationary mechanism to divide the initial collection of 4000 Tigers into two different collections: Tigers On Chain and ZombiesTOC. During the event, you will be able to claim a Pfeezer syringe for free in order to access the Cemetery map in the Jungleverse and thus return your Tiger to ZombieTOC. Some access may be reserved only for ZombiesTOC.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="accordion__item" data-aos="fade-up" data-aos-duration="1300">
                                                <div className="accordion__header" id="faq4">
                                                    <button className="accordion__button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqBody4" aria-expanded="false" aria-controls="faqBody4">
                                                         When mint? Mint price?<span className="plus-icon"></span>
                                                    </button>
                                                </div>
                                                <div id="faqBody4" className="accordion-collapse collapse" aria-labelledby="faq4" data-bs-parent="#faqAccordion2">
                                                    <div className="accordion__body">The first presales having already taken place, 1050/4000 Tigers On Chain have already been minted. The date of the public sale will be announced very soon, stay connected on our networks to be informed as soon as possible of the official launch date. The mint price for the dirty public will amount to 0.7 EGLD.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="accordion__item" data-aos="fade-up" data-aos-duration="1400">
                                                <div className="accordion__header" id="faq5">
                                                    <button className="accordion__button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#faqBody5"
                                                        aria-expanded="false" aria-controls="faqBody5">
                                                         What utility for my NFT? For my $TOC?<span className="plus-icon"></span>
                                                    </button>
                                                </div>
                                                <div id="faqBody5" className="accordion-collapse collapse" aria-labelledby="faq5" data-bs-parent="#faqAccordion2">
                                                    <div className="accordion__body">Tigers On Chain NFTs will give you access to the Jungleverse and all its features before anyone else, you will also be eligible to receive airdrops and $TOC tokens. The $TOC token will be the utility token of the Jungleverse, you will be able, with your tokens, to play in the casino, consume in the night club, buy cosmetics for your 3D avatar, and above all stake them then farm them in our Defi ecosystem only present in the Jungleverse.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="accordion__item" data-aos="fade-up" data-aos-duration="1500">
                                                <div className="accordion__header" id="faq6">
                                                    <button className="accordion__button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#faqBody6"
                                                        aria-expanded="false" aria-controls="faqBody6">
                                                         How to be eligible for Airdrops?<span className="plus-icon"></span>
                                                    </button>
                                                </div>
                                                <div id="faqBody6" className="accordion-collapse collapse" aria-labelledby="faq6" data-bs-parent="#faqAccordion2">
                                                    <div className="accordion__body">To be eligible for the different airdrops, you will only need to hold a maximum of tigers in your wallet at the time of the snapshot. The next airdrops will take into account the number of tigers present on your wallet. Warning: if your tiger is listed on a marketplace, it means that it will not be on your wallet, so you will not be eligible for airdrops.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="faq__thumb text-center aos-init aos-animate" data-aos-duration="2000" data-aos="zoom-in-right">
                                    <img src="assets/images/faq/01.png" alt="FAQ Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Faq;