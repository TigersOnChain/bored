import { Component } from "react";


const title = <h2> <span className="color--gradient-y"> Tigers On Chain</span> Roadmap</h2>;
const desc = "This is our roadmap so far, but this is only the beginning we want to build our project around our community, so if you have more ideas we are all ears";

let roadmapList = [
    {
        imgUrl: 'assets/images/roadmap/01.png',
        imgAlt: 'Roadmap Icon',
        title: 'Pre Launch',
        desc: 'Presales 1 & 2: 1050 minted tigers out of 4000. Airdrop surprises for early participants. Reveal, white paper & tokenomics.',
    },
    {
        imgUrl: 'assets/images/roadmap/02.png',
        imgAlt: 'Roadmap Icon',
        title: 'Initial Launch',
        desc: 'Public sale: 0.7 EGLD per tiger. First access to the Jungleverse prototype. Airdrop, partnerships & buyout of the floor price.',
    },
    {
        imgUrl: 'assets/images/roadmap/03.png',
        imgAlt: 'Roadmap Icon',
        title: 'Zombification',
        desc: 'Zombification event: claim your pfeezer vaccine, inject it into your tiger veins and find out what happens. Linsting of Zombies on marketplaces',
    },
    {
        imgUrl: 'assets/images/roadmap/04.png',
        imgAlt: 'Roadmap Icon',
        title: 'Jungleverse',
        desc: 'Opening the Jungleverse for everyone. Benefits for holders. Airdrop, Jungle Lotteries, NFT Staking, Merch, Casino.',
    },
    {
        imgUrl: 'assets/images/roadmap/05.png',
        imgAlt: 'Roadmap Icon',
        title: 'TigersDAO',
        desc: 'Opening of the DAO, Submissions and votes by the community. Rewards program, acquisitions for the DAO.',
    },
    {
        imgUrl: 'assets/images/roadmap/06.png',
        imgAlt: 'Roadmap Icon',
        title: 'Next Roadmap',
        desc: 'From now on the DAO belongs to the community, Submit your ideas and lets determine together the next roadmap. ',
    },
]



class RoadMap extends Component {
    render() { 
        return (
            <section className="roadmap padding-top padding-bottom" id="roadmap">
                <div className="container">
                    <div className="section-header aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                        <div className="section-header__content">
                            {title}
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className="roadmap__wrapper">
                        <div className="row g-4">
                            {roadmapList.map((val, i) => (
                                <div className="col-lg-4 col-md-6" key={i}>
                                    <div className="roadmap__item aos-animate aos-init" data-aos="fade-left" data-aos-duration="1000">
                                        <div className="roadmap__inner">
                                            <div className="roadmap__thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="roadmap__content">
                                                <h4>{val.title}</h4>
                                                <p>{val.desc}</p>
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
 
export default RoadMap;