import React, {Component} from 'react';
import IndexHeader from "./index-header";
import author1 from "../images/author1.jpg";
import author2 from "../images/author2.jpg";
import author3 from "../images/author3.jpg";
class AboutUsComponent extends Component {
    render() {
        return (
            <div className="container-fluid about">
                <IndexHeader/>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10 bodyText">
                        <h1 className="text-light heddingText">About Us</h1>
                        <small className="smallText">International Conference on Application Frameworks.</small>
                        <div className="row">
                            <div className="col-sm-4 mt-3 text-light">
                                <small >“International Conference on Application Frameworks” – ICAF
                                    is a Conference management tool that manages academic conferences organized by
                                    SLIIT where researchers present results, workshops, and perform other activities.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/> <br/><br/><br/><br/> <br/><br/>
                <div className="row">
                    <div className="col-sm-2 bodyText"></div>
                    <div className="col-sm-8 bodyText">
                        <br/>
                        <h3 className="text-dark aboutText">Meet Our Team</h3>
                        <hr/>
                        <br/>
                        <div className="row align-items-start">
                            <div className="col">
                                <div className="card" style={{width: "18rem"}}>
                                    <div className="flip-box">
                                        <div className="flip-box-inner">
                                            <div className="flip-box-front">
                                                <img src={author1} className="card-img-top flip"  alt="..."/>
                                            </div>
                                            <div className="flip-box-back">
                                                <h2>Maleesha Wickramarathna</h2>
                                                <p>Software Engineering Undergraduate</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <br/><br/><br/><br/>
                                        <a href="https://www.linkedin.com/in/maleesha-suraj-wickramarathna-779077193/" className="btn btn-dark">Follow Us on Linkedin
                                            &nbsp;<i className="fab fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card" style={{width: "18rem"}}>
                                    <div className="flip-box">
                                        <div className="flip-box-inner">
                                            <div className="flip-box-front">
                                                <img src={author2} className="card-img-top flip"  alt="..."/>
                                            </div>
                                            <div className="flip-box-back">
                                                <h2>Kithmini De Silva</h2>
                                                <p>Software Engineering Undergraduate</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <br/><br/><br/><br/>
                                        <a href="https://www.linkedin.com/in/kithmini-de-silva-3084761b8/" className="btn btn-dark">Follow Us on Linkedin
                                            &nbsp;<i className="fab fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card" style={{width: "18rem"}}>
                                    <div className="flip-box">
                                        <div className="flip-box-inner">
                                            <div className="flip-box-front">
                                                <img src={author3} className="card-img-top flip"  alt="..."/>
                                            </div>
                                            <div className="flip-box-back">
                                                <h2>Vihanga Lekamalage</h2>
                                                <p>Software Engineering Undergraduate</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <br/><br/><br/><br/>
                                        <a href="https://www.linkedin.com/in/vihanga-malshan-jontyrulz1998/" className="btn btn-dark">Follow Us on Linkedin
                                            &nbsp;<i className="fab fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUsComponent;