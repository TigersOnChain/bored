import { Component } from "react";


const title = <h2 className="text--3d"><span className="color--gradient-y d-block">Join </span> Tigers On Chain</h2>;
const desc = "Join our community!";
const btnText = "Join Our Discord";


class Community extends Component {
    render() { 
        return (
            <section className="community padding-top padding-bottom" style={{backgroundImage: "url(/assets/images/community/bg.jpg)"}}>
                <div className="container">
                    <div className="comminity__wrapper">
                        <div className="community__content text-center" data-aos="zoom-in" data-aos-duration="1000">
                            {title}
                            <p>{desc}</p>
                            <a href="#" className="default-btn"><span>{btnText}</span></a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Community;