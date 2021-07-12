import React,{Component} from "react";
import logo from "../images/logo.png";

class indexHeader extends Component{
    render() {
        return(
            <div className="container-fluid">
                <div className="row indexHeader pt-3">
                    <div className="col-sm-6">
                       <a href={"/"}><img src={logo} width={"150px"}/></a>
                    </div>
                    <div className="col-sm-6 dash-head  mt-2 mb-2  text-light">
                        <center>
                            <small className="ULlist"><a className="text-light" href={"/"}>Home</a></small>
                            <small className="ULlist"><a className="text-light" href={"/research"}>Events</a> </small>
                            <small className="ULlist"><a className="text-light" href={"/workshop"}>Workshops</a></small>
                            <small className="ULlist"><a className="text-light" href={"/aboutUs"}>About us</a></small>
                            <small className="ULlist"><a className="text-light" href={"/contact"}>Contact us</a></small>
                            <small className="ULlist"><a className="text-light" href={"/download"}>Downloads</a></small>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
}
export default indexHeader;