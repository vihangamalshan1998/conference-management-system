import React, { Component } from 'react';
import jwt_decord from "jwt-decode";
import logo from '../images/logo.png';
import CmsSevice from '../services/ConferenceManagementSystemServices';
const Imageurl = "http://localhost:8070/uploads/"

class addreview extends Component {
    constructor(props) {
        super(props)

        this.state = {
            researchid: this.props.match.params.id,
            researchTopic: '',
            email: '',
            researchDescription: '',
            doc: '',
            currentstatus: '',
            total_reviwe_point: '',
            researchcomment: '',
            status: '',
            point: '',
            finalpoint : ''

        }
        this.changerpointhander = this.changerpointhander.bind(this);
        this.changestatusHandler = this.changestatusHandler.bind(this);
        this.changecommenthander = this.changecommenthander.bind(this);
    }
    changestatusHandler = (event) => {
        this.setState({ status: event.target.value });
    }
    changerpointhander = (event) => {
        this.setState({ point: event.target.value });
    }
    changecommenthander = (event) => {
        this.setState({ researchcomment: event.target.value });
    }
    componentDidMount() {
        CmsSevice.getresearch(this.state.researchid).then((res => {
            let research = res.data;
            this.setState({
                researchTopic: research.research_topic,
                researchDescription: research.reseach_description,
                doc: research.document,
                email: research.submiteremail,
                currentstatus: research.status,
                total_reviwe_point: research.total_reviwe_point
            });
            console.log(this.state.email)
        }))
    }
    addreview = (e) => {
        e.preventDefault();
        let research = { reviwer_id: jwt_decord(localStorage.getItem("token")).id, research_id: this.state.researchid, reviwe_comment: this.state.researchcomment, status: this.state.status, reviwe_point: this.state.point, email: this.state.email, researchTopic: this.state.researchTopic};
        console.log('research => ' + JSON.stringify(research));

        CmsSevice.addresearch(research).then(res => {
            
        })
        this.setState({
            finalpoint : this.state.total_reviwe_point + this.state.point
        })
        this.state.finalpoint = (this.state.total_reviwe_point) + (this.state.point);
        let researchdetails = { research_topic: this.state.researchTopic, submiteremail: this.state.email, reseach_description: this.state.researchDescription, document: this.state.doc, status: this.state.status, total_reviwe_point: this.state.point};
        
        CmsSevice.updateresearch(researchdetails, this.state.researchid).then(res => {
            this.props.history.push('/reviwer');
        })
        
    }
    cancle = (e) => {
        e.preventDefault();
        this.props.history.push("/reviwer")
    }
    render() {
        return (
            
            <body>
                <input type="checkbox" id="check"></input>
                {console.log(this.state.finalpoint)}
                <header>
                    <label for="check">
                        <i class="fas fa-bars" id="sidebar_btn"></i>
                    </label>
                    <div class="left_area">
                        <img src={logo} alt="" />
                    </div>
                    <div class="right_area">
                        <a href="/profile" class="logout_btn">Profile</a>
                    </div>
                </header>

                <div class="mobile_nav">
                    <div class="nav_bar">
                        <i class="fa fa-bars nav_btn"></i>
                    </div>
                    <div class="mobile_nav_items">
                        <a href="/reviwer"><i class="fas fa-desktop"></i><span>Dashboard</span></a>
                        <a href="/reviwerchangepassword"><i class="fa fa-key"></i><span>Change Password</span></a>

                    </div>
                </div>

                <div class="sidebar">
                    <a href="/reviwer"><i class="fas fa-desktop mt-5 mb-5"></i><span>Dashboard</span></a>
                    <a href="/reviwerchangepassword"><i class="fa fa-key mt-5 mb-5"></i><span>Change Password</span></a>

                </div>


                <div class="content">
                    <div className="container-fluid">
                        <div className="glass">
                            <div className="row text-center">
                                <div className="col-12 mt-5">
                                    <h1>ADD REVIEW</h1>
                                    <div className="row ">
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4 d-flex justify-content-center mb-5">
                                            <div className="breake">
                                            </div>
                                        </div>
                                        <div className="col-md-4"></div>
                                    </div>
                                </div>
                            </div>
                            <form className="form-container">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-3 ml-2 mr-2 mt-3">
                                        <div className="form-group">
                                            <h5>Topic</h5>
                                            <input placeholder="Research Topic" name="researchTopic" className="form-control"
                                                value={this.state.researchTopic} disabled />
                                        </div>
                                    </div>
                                    <div className="col-md-3 ml-2 mr-2 mt-3">
                                        <div className="form-group">
                                            <h5>Current Status</h5>
                                            <input placeholder="Research Topic" name="researchTopic" className="form-control"
                                                value={this.state.currentstatus} disabled />
                                        </div>
                                    </div>
                                    <div className="col-md-2 ml-2 mr-2 mt-3">
                                        <div className="form-group">
                                            <h5>Points</h5>
                                            <input placeholder="Research Topic" name="researchTopic" className="form-control"
                                                value={this.state.total_reviwe_point} disabled />
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-6 ml-2 mr-2 mt-3">
                                        <div className="form-group">
                                            <h5>Description</h5>
                                            <textarea placeholder="Reserch Description" class="form-control" name="researchDescription"
                                                rows="3" value={this.state.researchDescription} disabled />
                                        </div>
                                    </div>
                                    <div className="col-md-2 ml-4 mr-2 mt-3">
                                        <div className="form-group">
                                            <h5>View Papers</h5>
                                            <button className="btn btn-light"><a href={Imageurl + this.state.doc} target="_blank">View Document</a></button>
                                        </div>
                                    </div>
                                </div>


                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-6 ml-2 mr-2 mt-3">
                                        <div className="form-group">
                                            <h5>Comment</h5>
                                            <textarea placeholder="Comment" class="form-control" name="researchcomment"
                                                rows="5" value={this.state.researchcomment} onChange={this.changecommenthander} />
                                        </div>
                                        {console.log(this.state.researchcomment)}
                                    </div>
                                    <div className="col-md-2 ml-4 mr-2 mt-3">
                                        <div className="form-group">
                                            <h5>Status</h5>
                                            <div className="input-group mb-3">
                                                <select className="custom-select" name="status" placeholder={"Event Status"}
                                                    onChange={this.changestatusHandler}>
                                                    <option selected>Choose...</option>
                                                    <option value="Approved">Approved</option>
                                                    <option value="Decline">Decline</option>
                                                </select>
                                                { console.log(this.state.status)}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <h5>Point</h5>
                                            <div className="input-group mb-3">
                                                <select className="custom-select" name="point" type="number" placeholder={"Event Status"}
                                                    onChange={this.changerpointhander}>
                                                    <option selected>Choose...</option>
                                                    <option value="0">0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                                {console.log(this.state.point)}
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-3 mt-3 mb-5">
                                        <button className="btn btn-success btn-block" onClick={this.addreview}>Add Review</button>
                                    </div>

                                    <div className="col-md-3 mt-3 mb-5">
                                        <button className="btn btn-danger btn-block" onClick={this.cancle}>cancle</button>
                                    </div>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </body>
        );
    }
}

export default addreview;