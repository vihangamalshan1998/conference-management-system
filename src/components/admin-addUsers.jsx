import React,{Component} from "react";
import cmsService from '../services/ConferenceManagementSystemServices';

class AdminAddUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name : '',
            last_name : '',
            password : '',
            confirmPassword : '',
            type : 'Admin',
            number : '',
            email : ''
        }

        // this.changeemailHandler = this.changeemailHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeConfirmPassowrdHandler = this.changeConfirmPassowrdHandler.bind(this);
        this.changeUserRoleHandler = this.changeUserRoleHandler.bind(this);
        this.changeMobileNumberHandler = this.changeMobileNumberHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);


    }
    changeFirstNameHandler = (event) =>{
        this.setState({first_name: event.target.value});
    }

    changeLastNameHandler = (event) =>{
        this.setState({last_name: event.target.value});
    }

    changePasswordHandler = (event) =>{
        this.setState({password: event.target.value});
    }

    changeConfirmPassowrdHandler = (event) =>{
        this.setState({confirmPassword: event.target.value});
    }

    changeUserRoleHandler = (event) =>{

        this.setState({type: event.target.value});
        console.log(this.state.type)
    }

    changeMobileNumberHandler = (event) =>{
        this.setState({number: event.target.value});
    }

    changeEmailHandler = (event) =>{
        this.setState({email: event.target.value});
    }

    addUser = (e) =>{
        e.preventDefault();
        if(this.state.password === this.state.confirmPassword){
            let user = {

                first_name : this.state.first_name,
                last_name: this.state.last_name,
                password: this.state.password,
                type : this.state.type,
                number : this.state.number,
                email: this.state.email
            }
            if(this.state.first_name != "" && this.state.last_name != "" && this.state.password != "" && this.state.number != "" && this.state.email != ""){
                console.log(user)
                cmsService.addStaff(user).then(() =>{
                    this.props.history.push('/dash');
                })
            }else{
                alert("Input fields can not be empty!")
            }
        }else{
            alert("Password is mismatched!!")
        }

    }

    render() {
        return (
            <div className="container-fluid adduserBody">
                <div className="row">
                    <div className="col-sm-6"></div>
                    <div className="col-sm-6 mt-3">
                        <h3 className="text-light">Add User</h3>
                        <form>
                            <div className="row m-2">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="firstName" className="text-light">First Name : </label>
                                        <input type="text" className="form-control" id="firstName"
                                               aria-describedby="emailHelp" placeholder="First Name"
                                               value={this.state.first_name} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="LastName" className="text-light">Last Name : </label>
                                        <input type="text" className="form-control" id="LastName" placeholder="Last Name"
                                               value={this.state.last_name} onChange={this.changeLastNameHandler}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row m-2">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="password" className="text-light">Password : </label>
                                        <input type="password" className="form-control" id="Password"
                                               aria-describedby="passwordHelp" placeholder="Password"
                                               value={this.state.password} onChange={this.changePasswordHandler}/>
                                        <small id="passwordHelp" className="form-text text-muted">Password must be contained more than 8 characters</small>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword" className="text-light">Confirm Password : </label>
                                        <input type="Password" className="form-control" id="confirmPassword" placeholder="Confirm Password"
                                               value={this.state.confirmPassword} onChange={this.changeConfirmPassowrdHandler}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row m-2">
                                <div className="col-sm-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="Radios"
                                               id="Radios" value="Admin"
                                               checked={this.state.type === "Admin"} onChange={this.changeUserRoleHandler}/>
                                        <label className="form-check-label text-light" htmlFor="Radios">
                                            Admin
                                        </label>
                                    </div>
                                    <div className="form-check ml-3">
                                        <input className="form-check-input" type="radio" name="Radios"
                                               id="Radios" value=" Reviewer"
                                               checked={this.state.type === " Reviewer"} onChange={this.changeUserRoleHandler}/>
                                        <label className="form-check-label text-light" htmlFor="Radios">
                                            Reviewer
                                        </label>
                                    </div>
                                    <div className="form-check ml-3">
                                        <input className="form-check-input" type="radio" name="Radios"
                                               id="Radios" value="Editor"
                                               checked={this.state.type === "Editor"} onChange={this.changeUserRoleHandler}/>
                                        <label className="form-check-label text-light" htmlFor="Radios">
                                            Editor
                                        </label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="mobileNumber" className="text-light">Mobile Number : </label>
                                        <input type="number" className="form-control" id="mobileNumber" placeholder="Mobile Number"
                                               value={this.state.number} onChange={this.changeMobileNumberHandler}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row m-2">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" className="text-light">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.changeEmailHandler}/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                        anyone else.</small>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6"></div>
                                <div className="col-sm-6">
                                    <button  className="saveChangesBtn" onClick={this.addUser} style={{width:"100%"}}>Save changes</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminAddUsers;