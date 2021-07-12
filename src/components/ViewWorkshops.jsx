import React, {Component} from 'react';
import conferenceManagementSystemServices from "../services/ConferenceManagementSystemServices";
import logo from "../images/logo.png";
import wallpaper from "../images/Workshop.jpg";
import Header from "./Header";
import wallpaper2 from "../images/wallpaper2.png";
import notice from "../images/notice.png"
import conference from "../images/Conference.png"
import conference2 from "../images/Conference2.png"
import IndexHeader from "./index-header";
import banner from "../images/banner.png"
class ViewWorkshops extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentDateTime: Date().toLocaleString(),
            workshops: []
        }
    }
    componentDidMount(){
            conferenceManagementSystemServices.getConfirmedWorkshop().then((res) => {
                this.setState({ workshops: res.data});
            });
    }
    render() {
        return (
            <div className="bg" style={{background:"#010101"}}>
                <IndexHeader/>
                <div className="row">
                    <hr style={{border:"5px solid white"}}/>
                                <center>
                                    <h2 style={{color:"white"}}>Research Paper Presentations</h2>
                                </center>
                            <div className="row">
                                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={wallpaper} className="d-block w-100" alt="..."/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={wallpaper2}  className="d-block w-100" alt="..."/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={banner}  className="d-block w-100" alt="..."/>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button"
                                            data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button"
                                            data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                            {/*Display Event Details*/}
                            <div className="container">
                                <div className="row">
                                    {
                                        this.state.workshops.map(
                                            workshops =>
                                                <div className="col-md-4">
                                                    <div className="card mt-3 sellercard">
                                                        <div className="product text-center mt-3">
                                                            <h2>Upcoming Workshops</h2>
                                                            <h5>{workshops.title}</h5>
                                                            <div className="mt-3 info">
                                                                <span className="text1 d-block mb-3">{workshops.description}</span>
                                                                <span className="text1 ">Venue: {workshops.venue} </span>
                                                            </div>
                                                            <div className="mt-3 info">
                                                                <span className="text1 ">Date: {workshops.startDate} </span>
                                                            </div>
                                                            <div className="mt-3 info">
                                                                <span className="text1 ">Time: {workshops.duration} </span>
                                                            </div>
                                                            <div className="cost mt-3 text-dark">
                                                                <span>Status: {workshops.eventStatus}</span>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-8">
                                                            <div className="col-md-6">
                                                                <div className="p-3 text-center text-white mt-2 cursor">
                                                                    <a href={"/login"}>
                                                                    <button className="btn btn-warning btn-block">
                                                                        <i className="fas fa-edit"></i>&nbsp;
                                                                        Attend Workshop
                                                                    </button></a>
                                                                    <br/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        )
                                    }
                                </div>
                                <br/><br/>
                                {/*Accordion*/}
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                CALL FOR PAPERS:
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                             data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>The 2021 International Conference on Advancements in Computing (ICAF 2021) will
                                                    be held in Sri Lanka from 9th to 11th December 2021. The ICAF 2021 is themed “Empowering
                                                    the society through innovation and invention.” The conference organizers invite contributions
                                                    from diverse computing areas including Computer Engineering, Computer Science, Information Systems, Information
                                                    Technology and Software Engineering, but not limited to. ICAF 2021 will include attractive workshops and industry
                                                    programs aimed at practitioners, with keynotes and panels from both local and international researchers. </strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                SUBMISSIONS:
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                             data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>
                                                    To be published in the ICAF2021 Conference Proceedings and to be eligible for
                                                    publication in IEEE Xplore®, an author of an accepted paper is required to
                                                    register for the conference and the paper must be presented by an author of that
                                                    paper at the conference. During the initial paper submission process via Microsoft
                                                    Conference Management tool. Only PDF files will be accepted for the review process,
                                                    and all submissions must be done through Microsoft CMT. Author List and their affiliations
                                                    should be removed from the initial PDF File. Please note that IEEE Plagiarism Policies will
                                                    be applied upon the submission.
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                IMPORTANT:
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                             data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>The page length limit for all initial submissions for review is SIX (6) printed pages (10-point font)
                                                    and must be written in English.
                                                    Initial submissions longer than SIX (6) pages will be rejected without review.
                                                    Paper selection is subjected to the contribution, originality, relevance, technical strength, and
                                                    the overall quality. Upon selection of the paper, at least one author is expected to register for
                                                    the conference before the deadline and present the paper.
                                                    Only papers that have been presented by the respective authors during the conference will be published
                                                    in the IEEE Proceedings which will be available in IEEE Xplore digital library, provided that they meet
                                                    the IEEE quality review standards.
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/><br/>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <img style={{height:"100%",width:"100%"}} src={notice}/>
                                        </div>
                                        <div className="col-sm-4">
                                            <img style={{height:"100%",width:"100%"}} src={conference}/>
                                        </div>
                                        <div className="col-sm-4">
                                            <img style={{height:"100%",width:"100%"}} src={conference2}/>
                                        </div>
                                    </div>
                                </div>

                            </div>

                </div>
            </div>
        );
    }
}

export default ViewWorkshops;