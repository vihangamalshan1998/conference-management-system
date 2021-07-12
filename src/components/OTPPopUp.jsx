import React, {Component} from 'react';
import jwt_decord from 'jwt-decode';
import cmsService from "../services/ConferenceManagementSystemServices";

class OtpPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otp: ''
        }

        this.changeotpHandler = this.changeotpHandler.bind(this);


    }
    changeotpHandler = (event) =>{
        this.setState({otp: event.target.value});
    }

    Auth = (e) =>{
        e.preventDefault();
        let auth = {otp : this.state.otp, email : jwt_decord(localStorage.getItem("token")).email}
        if(this.state.otp != "" && jwt_decord(localStorage.getItem("token")).email != ""){
            cmsService.authPayment(auth).then(()=>{

                //check user type and navigate to dash board
                let type = jwt_decord(localStorage.getItem("token")).user_role;
                if(type === "Editor"){
                    this.props.history.push('/editor');
                }else if (type === "admin"){
                    this.props.history.push('/dash');
                }else if(type === "Researcher"){
                    this.props.history.push('/reviwer');
                }else if(type === "Attendee"){
                    this.props.history.push('/userDash');
                }else{

                }
            })
        }
    }
    render() {
        return (
            <div className="row mt-5">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <div className="row otpBanner" >
                        <div className="col-sm-6">
                            <span className="text-success">Otp has been generated successfully</span>
                        </div>
                        <div className="col-sm-6 alignRight">
                            <span className="text-success">X</span>
                        </div>
                    </div>

                    <div>
                        <h1>Validate OTP</h1>
                    </div>

                    <form>
                        <div>
                            <input type="number" className="form-control" value={this.state.otp} onChange={this.changeotpHandler} placeholder="Insert the OTP code here" aria-label="CardNumber"
                                   aria-describedby="addon-wrapping"/>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-12 alignRight">
                                <button onClick={this.Auth} className='validateButton'>Validate OTP</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-sm-2"></div>
            </div>
        );
    }
}

export default OtpPopUp;