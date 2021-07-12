import React, { Component } from 'react';
import logo from '../images/logo.png';
import CmsSevice from '../services/ConferenceManagementSystemServices';
import jwt_decord from "jwt-decode";
const Imageurl = "http://localhost:8070/uploads/"

class approveproposal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            research: []
        }
    }
    componentDidMount() {
        CmsSevice.getallapproveproposaldoc(jwt_decord(localStorage.getItem("token")).id).then((res => {
            this.setState({ research: res.data });
            console.log(this.state.research)
            { console.log(this.state.research.document) }
        }))

    }
    NavigationPreloadManager(e, researchid) {
        this.props.history.push('/editproposalreview/' + researchid);
    }
    render() {
        return (
            <body>
                <input type="checkbox" id="check"></input>

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
                            <div className="row text-center mb-3">
                                <div className="col-12 mt-5">
                                    <h1>APPROVE PROPOSAL</h1>
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
                        </div>

                        {
                            this.state.research.map(
                                research =>
                                    <div className="glass mt-3">
                                        <div className="row text-center">
                                            <div className="col-md-4 mt-2">
                                                <span>Comment</span><h4>{research.reviwe_comment}</h4>
                                            </div>
                                            <div className="col-md-5 mb-3">
                                                <span>Review Point</span><h4>{research.reviwe_point}</h4>
                                            </div>
                                            <div className="col-md-3 mt-2">
                                                <span>Status</span><h4>{research.status}</h4>
                                            </div>
                                        </div>
                                        <div className="row text-center">
                                            <div className="col-md-9"></div>
                                            <div className="col-md-2 mt-3 content-justify-center">
                                                <button className="btn btn-success btn-block" onClick={e => this.NavigationPreloadManager(e, research.proposal_id)}>Edit</button> <br />
                                            </div>
                                        </div>
                                    </div>
                            )
                        }
                    </div>




                </div>
            </body>
        );
    }
}

export default approveproposal;