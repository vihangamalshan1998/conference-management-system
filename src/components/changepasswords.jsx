import React, { Component } from 'react';
import logo from '../images/logo.png'
import CmsSevice from '../services/ConferenceManagementSystemServices';
import Swal from 'sweetalert2';
import jwt_decord from "jwt-decode";


class changepasswords extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: jwt_decord(localStorage.getItem("token")).id,
            firstname: jwt_decord(localStorage.getItem("token")).name,
            email: jwt_decord(localStorage.getItem("token")).email,
            password: jwt_decord(localStorage.getItem("token")).password,
            mobile_number: jwt_decord(localStorage.getItem("token")).mobile,
            currentpassword: '',
            newpassword: '',
            reenterpassword: ''

        }

        this.changepasswordHandler = this.changepasswordHandler.bind(this);
        this.changenewpassHandler = this.changenewpassHandler.bind(this);
        this.changereenterpassHandler = this.changereenterpassHandler.bind(this);
    }
    changepasswordHandler = (event) => {
        this.setState({ currentpassword: event.target.value });
    }
    changenewpassHandler = (event) => {
        this.setState({ newpassword: event.target.value });
    }
    changereenterpassHandler = (event) => {
        this.setState({ reenterpassword: event.target.value });
    }

    //UPADATE REVIWER DETAILS
    updatereviwer = (e) => {
        e.preventDefault();
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success ml-5',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "Do you want to Update Password?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, update it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                if (this.state.currentpassword === this.state.password && this.state.newpassword === this.state.reenterpassword) {

                    let reviwer = {
                        first_name: this.state.firstname, email: this.state.email,
                        password: this.state.newpassword
                    };
                    console.log('reviwer => ' + JSON.stringify(reviwer));
                    CmsSevice.updatereviwer(reviwer, this.state.id).then(res => {
                        this.props.history.push('/login');
                    })
                    swalWithBootstrapButtons.fire(
                        'Updated!',
                        'Your Password has been Updated.',
                        'success'
                    )
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Current Password is wrong!'
                    })
                }

            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your Update is cancelled',
                    'error'
                )
            }
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

               
                <div className="container-fluid mt-5 mb-5" style={{ backgroundColor: "#404040", height: "90vh" }}>
                    <div className="container mt-5" style={{  height: "80vh" }}>
                        <div className="glass mt-5" style={{ height: "80vh" }}>
                            <div className="row text-center  mt-5">
                                <div className="col-12  mt-5">
                                    <h1>EDIT PASSWORD</h1>
                                    <div className="row mt-5">
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4 d-flex justify-content-center">
                                            <div className="breake">
                                            </div>
                                        </div>
                                        <div className="col-md-4"></div>
                                    </div>
                                </div>
                            </div>
                            <form className="form-container">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-8 ml-2 mr-2 mt-5">
                                        <div className="form-group names">
                                            <h5>Current-Password</h5>
                                            <input type="password" placeholder="Current-Password" name="password" className="form-control"
                                                value={this.state.currentpassword} onChange={this.changepasswordHandler} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-8 ml-2 mr-2 mt-4">
                                        <div className="form-group names">
                                            <h5>New-Password</h5>
                                            <input type="password" placeholder="New-Password" name="newpassword" className="form-control"
                                                value={this.state.newpassword} onChange={this.changenewpassHandler} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-8 ml-2 mr-2 mt-4">
                                        <div className="form-group names">
                                            <h5>Reenter-Password</h5>
                                            <input type="password" placeholder="Reenter-Password" name="reenternewpassword" className="form-control"
                                                value={this.state.reenterpassword} onChange={this.changereenterpassHandler} />
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center">

                                    <div className="col-md-3 mb-5 ">
                                        <button className="btn btn-success btn-block" onClick={this.updatereviwer}>Update Password</button>
                                    </div>

                                    <div className="col-md-3 mb-5 ">
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

export default changepasswords;