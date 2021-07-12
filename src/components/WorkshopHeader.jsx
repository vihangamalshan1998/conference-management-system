import React, {Component} from 'react';
import jwt_decord from "jwt-decode";

class WorkshopHeader extends Component {
    render() {
        return (
            <div>
                <div className="bg-dark">
                    <div className="row dash-1st ">
                        <div className="col-sm-6 text-light mt-2 mb-2">
                            <a className="text-light" href="/workshopDash"><i className="fas fa-home m-2"></i></a>
                            <a className="text-light" href="/addproposalhdoc"><i className="fas fa-folder-plus"></i></a>
                            <a className="text-light" href="#"><i className="fas fa-calendar-week m-2"></i></a>
                            <a className="text-light" href="#"><i className="far fa-comment-alt m-2"></i></a>
                            <i className="far fa-envelope m-2"></i>
                            <i className="fas fa-calendar-check m-2"></i>
                            <i className="text-warning far fa-star"></i>
                        </div>
                        <div className="col-sm-6 dash-head mt-2 mb-2  text-light">
                            <i className="far fa-lightbulb m-2"></i>
                            <i className="fas fa-search m-2"></i>
                            <i className="fas fa-bell m-2"></i>

                            {<a href={"/profile"}> <i className="m-2">
                                {    jwt_decord(localStorage.getItem("token")).email}

                            </i></a>}
                            <i className="fas fa-user m-2"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkshopHeader;