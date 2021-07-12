import React, { Component } from 'react';
import logo from '../images/logo.png'
import CmsSevice from '../services/ConferenceManagementSystemServices';
import Swal from 'sweetalert2';


class reviwersettingcomponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id : this.props.match.params.id,
            firstname: '',
            lastname: '',
            number_Of_reviews: '',
            password: '',
            email: '',
            currentpass: ''
        }

        this.changefirstNameHandler = this.changefirstNameHandler.bind(this);
        this.changelastNameHandler = this.changelastNameHandler.bind(this);
        this.changeemailHandler = this.changeemailHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
       
    }
    changefirstNameHandler = (event) =>{
        this.setState({firstname: event.target.value});
    }
    changelastNameHandler = (event) =>{
        this.setState({lastname: event.target.value});
    }
    changeemailHandler = (event) =>{
        this.setState({email: event.target.value});
    }
    changepasswordHandler = (event) =>{
        this.setState({password: event.target.value});
    }
    //get reviwer details
    componentDidMount(){
        CmsSevice.getreviwer(this.state.id).then((res=>{
            let reviwewr =res.data;
            this.setState({firstname: reviwewr.first_name,
                        lastname:reviwewr.last_name,
                        email :reviwewr.email,
                        currentpass : reviwewr.password,
                        number_Of_reviews : reviwewr.number_Of_reviews
             })
             console.log(this.state.currentpass);
        }))
    }
    //UPADATE REVIWER DETAILS
    updatereviwer = (e) =>{
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
            text: "You want to update account",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, update it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                if(this.state.currentpass === this.state.password){
            
                    let reviwer = {first_name: this.state.firstname,last_name: this.state.lastname,email: this.state.email,
                        password: this.state.password,number_Of_reviews: this.state.number_Of_reviews};
                    console.log('reviwer => ' + JSON.stringify(reviwer));
            
                    CmsSevice.updatereviwer(reviwer, this.state.id).then(res => {
                       console.log('success');
                   })
                   swalWithBootstrapButtons.fire(
                    
                    'Your Account has been Updated.',
                    'success'
                  )
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Current Password is wrong!'
                      })
                }
              
            } else if (
              /* Read more about handling dismissals below */
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
    deletereviwer = (e) =>{
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
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                CmsSevice.deletereviwer(this.state.id, this.state.email).then(res =>{
                    console.log('success');
                })
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your Account has been deleted.',
                'success'
              )
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your Account is safe',
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
                            <a href="/" class="logout_btn">Logout</a>
                        </div>
                    </header>
                    
                    <div class="mobile_nav">
                        <div class="nav_bar">
                            <i class="fa fa-bars nav_btn"></i>
                        </div>
                        <div class="mobile_nav_items">
                            <a href="/reviwer"><i class="fas fa-desktop"></i><span>Dashboard</span></a>
                            <a href="/reviwerchangepassword"><i class="fa fa-key"></i><span>Change Password</span></a>
                            <a href="/reviwersettings"><i class="fas fa-sliders-h"></i><span>Account-Settings</span></a>
                        </div>
                    </div>
                    
                    <div class="sidebar">
                            <a href="/reviwer"><i class="fas fa-desktop mt-5 mb-5"></i><span>Dashboard</span></a>
                            <a href="/reviwerchangepassword"><i class="fa fa-key mt-5 mb-5"></i><span>Change Password</span></a>
                            <a className="active" href="/reviwersettings"><i class="fas fa-sliders-h mt-5 mb-5"></i><span>Account-Settings</span></a>
                    </div>
                    

                    <div class="content">
                        <div className="container-fluid">
                            <div className="glass">
                                <div className="row text-center mb-3">
                                    <div className="col-12 mt-3">
                                        <h1>EDIT REVIWER DETAILS</h1>
                                        <div className="row ">
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
                                        <div className="col-md-5 ml-2 mr-2 mt-4">
                                            <div className="form-group names">
                                                <h5>First Name</h5>
                                                <input placeholder="First Name" name="firstname" className="form-control"
                                                value={this.state.firstname} onChange={this.changefirstNameHandler} />
                                            </div>
                                        </div>
                                        <div className="col-md-5 ml-2 mr-2 mt-4">
                                            <div className="form-group names">
                                                <h5>Last Name</h5>
                                                <input placeholder="Last Name" name="lastname" className="form-control"
                                                value={this.state.lastname} onChange={this.changelastNameHandler}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-md-8 ml-2 mr-2 mt-3">
                                            <div className="form-group names">
                                                <h5>Email</h5>
                                                <input placeholder="Email" name="email" className="form-control"
                                                value={this.state.email} onChange={this.changeemailHandler} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-md-8 ml-2 mr-2 mt-3">
                                            <div className="form-group names">
                                                <h5>Current-Password</h5>
                                                <input placeholder="Current-Password" name="password" className="form-control"
                                                value={this.state.password} onChange={this.changepasswordHandler} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                    <div className="row  mb-5">
                                        <div className=""></div>
                                    </div>
                                </div>
                                    <div className="row justify-content-center">
                                                            
                                        <div className="col-md-3 mt-3 mb-5">
                                                <button className="btn btn-success btn-block" onClick={this.updatereviwer}>Update Details</button>
                                        </div>
                                                            
                                        <div className="col-md-3 mt-3 mb-5">
                                            <button className="btn btn-danger btn-block" onClick={this.cancle}>cancle</button> 
                                        </div>

                                        <div className="col-md-3 mt-3 mb-5">
                                            <button className="btn btn-danger btn-block" onClick={this.deletereviwer}>Delete Account</button> 
                                        </div>
                                                            
                                    </div>
                                </form>
                                <div>
                                 <div className="row mb-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
            </body>
        );
    }
}

export default reviwersettingcomponent;