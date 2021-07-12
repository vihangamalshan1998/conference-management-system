import React, {Component} from 'react';
import IndexHeader from "./index-header";

class ContactUsComponent extends Component {
    render() {
        return (
            <div className="container-fluid contact" style={{color:"black"}}>
                <IndexHeader/>
                <div className="row container">
                    <div className="col-sm-6">
                        <form>
                            <div className="mb-4">
                                <br/>
                                <br/>
                                <h5 htmlFor="exampleInputEmail1" className="form-label" style={{color:"white"}}>Email address</h5>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" style={{height:"60px"}}/>
                                    <div id="emailHelp" style={{color:"#FCD12A"}} className="form-text">We'll never share your email with anyone
                                        else.
                                    </div>
                            </div>
                            <div className="mb-4">
                                <h5 htmlFor="exampleInputPassword1" className="form-label" style={{color:"white"}}>Feedback</h5>
                                <input type="text" className="form-control" id="exampleInputPassword1" style={{height:"60px"}}/>
                            </div>
                            <button type="submit" className="btn btn-warning">Submit</button>
                        </form>
                    </div>
                    <div className="col-sm-5 bodyText" style={{color:"black"}}>
                        <h4 style={{color:"white"}}>We would like to hear from you</h4>
                        <br/>
                        <h1 className="text" style={{color:"#FCD12A"}}>Contact Us</h1>
                        <br/>
                        <h6 style={{color:"white"}}>Whether you have questions or you would just like to know more information about us, contact us.
                            “International Conference on Application Frameworks” – ICAF is a <br/>
                            Conference management tool that manages academic conferences organized by
                            SLIIT where researchers <br/>present results, workshops, and perform other activities.</h6>
                        <br/>
                        <h7 style={{color:"white"}}>SLIIT, New Kandy Road, Malabe, Sri Lanka</h7>
                        <br/>
                        <h7 style={{color:"white"}}>T: +94 11 7544806</h7>
                    </div>
                </div>

            </div>

        );
    }
}

export default ContactUsComponent;