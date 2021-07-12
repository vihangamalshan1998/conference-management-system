import React, { Component } from 'react';
import logo from '../images/logo.png';
import research from '../images/research.png';
import proposal from '../images/proposal.png';
import jwt_decord from "jwt-decode";

class ReviwerDashcomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: jwt_decord(localStorage.getItem("token")).id,
            firstname: jwt_decord(localStorage.getItem("token")).name,
            Lastname: '',
            email: jwt_decord(localStorage.getItem("token")).email,
            number_of_reviwes: ''
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
    }
    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    //Get Reviwer details

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

                    <a className="active" href="/reviwer"><i class="fas fa-desktop mt-5 mb-5"></i><span>Dashboard</span></a>
                    <a href="/reviwerchangepassword"><i class="fa fa-key mt-5 mb-5"></i><span>Change Password</span></a>
                </div>


                <div class="content">
                    <div className="container-fluid">
                        <div className="glass">
                            <div className="row">
                                    <div className="col-md-6 mt-2">
                                        <div className="form-group names mb-3">
                                            <h5>Email : {this.state.email} </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-2">
                                        <div className="form-group names mb-3">
                                            <h5>Name : {this.state.firstname} </h5>
                                        </div>
                                    </div>
                            </div>
                            <div className="row text-center mb-3">
                                <div className="col-12 mt-2">
                                    <h1>RESEARCH</h1>
                                    <div className="row ">
                                        <div className="col-md-5"></div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div className="breake">
                                            </div>
                                        </div>
                                        <div className="col-md-5"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div class="col-md-2 box boody mt-1 mb-2"><a href="/newresearch/">
                                    <h2 class="skillname text-center">NEW RESEARCH</h2>
                                    <div class="cricle"></div>
                                    <img src={research} alt="" class="skills" /></a>
                                </div>
                                <div class="col-md-2 box boody mt-1 mb-2"><a href="/allresearch">
                                    <h2 class="skillname text-center">ALL RESEARCH</h2>
                                    <div class="cricle"></div>
                                    <img src={research} alt="" class="skills" /></a>
                                </div>
                                <div class="col-md-2 box boody mt-1 mb-2"><a href="/approveresearch">
                                    <h2 class="skillname text-center">ACCEPTED RESEARCH</h2>
                                    <div class="cricle"></div>
                                    <img src={research} alt="" class="skills" /></a>
                                </div>
                                <div class="col-md-2 box boody mt-1 mb-2"><a href="/declinreviw">
                                    <h2 class="skillname">REJECTED RESEARCH</h2>
                                    <div class="cricle"></div>
                                    <img src={research} alt="" class="skills" /></a>
                                </div>
                            </div>
                            <div className="row text-center mt-3">
                                <div className="col-12 mt-2 mb-3">
                                    <h1>PROPOSAL</h1>
                                    <div className="row ">
                                        <div className="col-md-5"></div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div className="breake">
                                            </div>
                                        </div>
                                        <div className="col-md-5"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2 mb-5">
                                <div class="col-md-2 box boody mt-1 mb-2"><a href="/newproposal">
                                    <h2 class="skillname text-center">NEW PROPOSALS</h2>
                                    <div class="cricle"></div>
                                    <img src={proposal} alt="" class="skills" /></a>
                                </div>
                                <div class="col-md-2 box boody mt-1 mb-2"><a href="/allproposal">
                                    <h2 class="skillname text-center">ALL PROPOSALS</h2>
                                    <div class="cricle"></div>
                                    <img src={proposal} alt="" class="skills" /></a>
                                </div>
                                <div class="col-md-2 box boody mt-1 mb-2"><a href="/approveproposal">
                                    <h2 class="skillname text-center">ACCEPTED PROPOSALS</h2>
                                    <div class="cricle"></div>
                                    <img src={proposal} alt="" class="skills" /></a>
                                </div>
                                <div class="col-md-2 box boody mt-1 mb-2"><a href="/declinproposal">
                                    <h2 class="skillname">REJECTED PROPOSALS</h2>
                                    <div class="cricle"></div>
                                    <img src={proposal} alt="" class="skills" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        );
    }
}

export default ReviwerDashcomponent;