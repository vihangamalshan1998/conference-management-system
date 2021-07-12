import React, { Component } from 'react';
import logo from '../images/logo.png';
import cmsService from '../services/ConferenceManagementSystemServices';
import jwt_decord from 'jwt-decode';
import Swal from 'sweetalert2';
class UserLogin extends  Component{
    constructor(props) {
            super(props);
            this.state = {
                email : '',
                password : ''
            }

        this.changeemailHandler = this.changeemailHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);


    }
    changeemailHandler = (event) =>{
        this.setState({email: event.target.value});
    }
    changepasswordHandler = (event) =>{
        this.setState({password: event.target.value});
    }

    login = (e) =>{
        e.preventDefault();
        let user = {email : this.state.email, password : this.state.password};
        console.log('user => ' + JSON.stringify(user));

        if(this.state.email!= "" && this.state.password != "") {
            cmsService.login(user).then( res =>{
                // console.log((res.data.token))
                // console.log(res.data.status)
                localStorage.setItem("token",res.data.token);
                let type = jwt_decord(localStorage.getItem("token")).user_role;

                //check user type and navigate to dash board
                if(type === "Editor"){
                    this.props.history.push('/editor');
                }else if (type === "Admin"){
                    this.props.history.push('/dash');
                }else if(type === "Researcher"){
                    this.props.history.push('/researcherDash');
                }else if(type === "Attendee"){
                    this.props.history.push('/userDash');
                }else if(type === "WorkshopPresenter") {
                    this.props.history.push('/workshopDash');
                }else if(type === "Reviewer") {
                    this.props.history.push('/reviwer');
                }else{

                }

            }).catch((err) =>{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err
                })
            })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please check input details again!'
            })
        }
    }


    render() {
        return(
            <div className="container-fluid">
                <div className="row lg-body">
                    <div className="col-sm-8 lg-body">
                        <div className="row">
                            <div className="col-sm-1">
                                <a href={"/"}>
                                    <img src={logo} width={"100px"}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 bg-dark">
                        <center>
                            <h3 className="mt-3 text-light">Welcome to ICMS</h3>
                            <small className="text-light"> Please sign to your account and start the adventure</small>
                            <div className="card bg-secondary mt-2 loginCard">
                                <i className="fas fa-question-circle"></i>
                                Use your email or Username to login to the system

                            </div>

                        </center>
                        {/*input field for username*/}
                        <form className="form-container">
                            <div className="form-group">
                                <label htmlFor="User_Name" className="text-small text-light mt-2">User Name : </label>
                                <input type="name" className="form-control" id="User_Name"
                                        placeholder="Ex : @John_Wick"
                                       value={this.state.email} onChange={this.changeemailHandler}/>
                            </div>

                            {/*input feild for password*/}
                            <div className="form-group mt-2">
                                <label htmlFor="password" className="text-light">password :
                                </label>
                                <input type="password" className="form-control" id="password"
                                       aria-describedby="emailHelp" placeholder="*********"
                                       value={this.state.password} onChange={this.changepasswordHandler}/>
                                <small id="emailHelp" className="form-text fPass">
                                    <a href={"#"}> Forgot Password ? </a>
                                </small>
                            </div>

                            {/*check box for remember password*/}
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault"/>
                                    <label className="form-check-label text-light" htmlFor="flexCheckDefault">
                                        Remember me
                                    </label>
                            </div>

                            {/*sign in button*/}
                            <div class="btnLogin">
                                <button type="button" className="btn" onClick={this.login}>Sign in</button>
                            </div>
                            {/*create account link*/}
                            <div>
                                <small className="text-light">
                                    New on our platform? <i className="fPass">
                                    <a href={'/signup'}>Create an account</a>
                                </i>
                                </small>
                            </div>
                            <br/>

                            {/*hr and or*/}
                            <div className="flex item-box row">
                                <div className="col-sm-5">
                                    <hr  className="text-light"/>
                                </div>
                                <div className="col-sm-2">
                                    <i className="text-light">or</i>
                                </div>
                                <div className="col-sm-5">
                                    <hr  className="text-light"/>
                                </div>
                            </div>

                            {/*social media links*/}
                            <center>
                                <div className="ulIcons">
                                    <a href={"#"}><i className="fb fab fa-facebook-f"></i></a>
                                    <a href={"#"}><i className="twit fab fa-twitter"></i></a>
                                    <a href={"#"}><i className="fas fa-envelope mail"></i></a>
                                </div>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserLogin;