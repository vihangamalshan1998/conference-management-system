import React,{Component} from "react";
import picChart from "../images/Maleesha_PieChart.webp"
import Header from "./Header";
import AdminHeader from "./AdminHeader";
class DashBoardAdminComponent extends Component{

    render() {
        return(
            <div className="container-fluid admin-dash">
                <AdminHeader/>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="firstCard">
                            <div className="row adCard card">
                                <h1>US$ 1000</h1>
                                <i className=" faAtt fas fa-exclamation-circle"></i>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <span className="text-light m-1">Total Users </span>
                                </div>
                                <div className="col-sm-6">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button"
                                                id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            User Details
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="/addUsers">Add Users</a></li>
                                            <li><a className="dropdown-item" href="/allUsers">All Users</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-1"><span className="text-light">10</span></div>
                                <div className="col-sm-10"><hr className="text-light"/></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-1"><span className="text-light">5</span></div>
                                <div className="col-sm-10"><hr className="text-light"/></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-1"><span className="text-light">0</span></div>
                                <div className="col-sm-10"><hr className="bar3"/></div>
                            </div>
                            <span className="values text-light">1000</span>
                            <span className="valuesII text-light">2000</span>
                            <span className="valuesII text-light">3000</span>
                        </div>

                        <div className="secondCard">
                            <div className="row">
                                <div className="col-sm-6">
                                    <span className="text-light m-1">Events for this week </span>
                                </div>
                                <div className="col-sm-6">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button"
                                                id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Events Details
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="/adminAddResearch">Add Research Paper Presentations</a></li>
                                            <li><a className="dropdown-item" href="/adminAddWorkshop">Add Workshops</a></li>
                                            <li><a className="dropdown-item" href="/adminResearch">View Research Paper Presentations</a></li>
                                            <li><a className="dropdown-item" href="/adminWorkshop">View Workshops</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="col-sm-6">
                                    <h1>100+</h1>
                                    <hr className="text-light bar2 m-0"/>
                                    <div className="row">
                                        <div className="col-sm-8"><hr className="bar text-light m-0"/></div>
                                    </div>
                                    <hr className="bar2 text-light m-0"/>

                                    <div className="row">
                                        <div className="col-sm-6 text-light">0 </div>
                                        <div className="col-sm-6 alignRight text-light">1000</div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="firstCard">
                                        <div className="row">
                                            <div className="col-sm-1"><span className="text-light">10</span></div>
                                            <div className="col-sm-10"><hr className="text-light"/></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-1"><span className="text-light">5</span></div>
                                            <div className="col-sm-10"><hr className="text-light"/></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-1"><span className="text-light">0</span></div>
                                            <div className="col-sm-10"><hr className="bar3"/></div>
                                        </div>
                                        <span className="values text-light">1000</span>
                                        <span className="valuesII text-light">2000</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="secondCard">
                            <div className="row">
                                <div className="col-sm-6">
                                    <span className="text-light m-1">Reviewer Documents </span>
                                </div>
                                <div className="col-sm-6">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button"
                                                id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Reviewer Documents
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="/reviwer">Reviewer Documents</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="col-sm-6">
                                    <h1>200+</h1>
                                    <hr className="text-light bar2 m-0"/>
                                    <div className="row">
                                        <div className="col-sm-10"><hr className="bar text-light m-0"/></div>
                                    </div>
                                    <hr className="bar2 text-light m-0"/>

                                    <div className="row">
                                        <div className="col-sm-6 text-light">0 </div>
                                        <div className="col-sm-6 alignRight text-light">1000</div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="firstCard">
                                        <div className="row">
                                            <div className="col-sm-1"><span className="text-light">10</span></div>
                                            <div className="col-sm-10"><hr className="text-light"/></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-1"><span className="text-light">5</span></div>
                                            <div className="col-sm-10"><hr className="text-light"/></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-1"><span className="text-light">0</span></div>
                                            <div className="col-sm-10"><hr className="bar3"/></div>
                                        </div>
                                        <span className="values text-light">1000</span>
                                        <span className="valuesII text-light">2000</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="secondCard">
                            <span className="text-light m-1">Research papers for this week </span>
                            <div className="row m-2">
                                <div className="col-sm-6">
                                    <h1>50+</h1>
                                    <hr className="text-light bar2 m-0"/>
                                    <div className="row">
                                        <div className="col-sm-5"><hr className="bar text-light m-0"/></div>
                                    </div>
                                    <hr className="bar2 text-light m-0"/>

                                    <div className="row">
                                        <div className="col-sm-6 text-light">0 </div>
                                        <div className="col-sm-6 alignRight text-light">1000</div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="firstCard">
                                        <div className="row">
                                            <div className="col-sm-1"><span className="text-light">10</span></div>
                                            <div className="col-sm-10"><hr className="text-light"/></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-1"><span className="text-light">5</span></div>
                                            <div className="col-sm-10"><hr className="text-light"/></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-1"><span className="text-light">0</span></div>
                                            <div className="col-sm-10"><hr className="bar3"/></div>
                                        </div>
                                        <span className="values text-light">1000</span>
                                        <span className="valuesII text-light">2000</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/*right side of the page */}
                    <div className="col-sm-6">
                        <div className="secondCard">
                            <div className="faArrow">
                                <i className="fas m-2 fa-step-backward"></i>
                                <i className="fas m-2 fa-step-forward"></i>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <span className="m-1">System Usage for this week</span>
                                    <br/>
                                    <img src={picChart} width={"100%"}/>
                                </div>
                                <div className="col-sm-6">
                                    <span className="m-1">System Usage for past 30 days</span>
                                    <br/>
                                    <br/>
                                    <div className="row">
                                        <div className="col-sm-1"><span className="text-light">20</span></div>
                                        <div className="col-sm-10"><hr className="text-light"/></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-1"><span className="text-light">15</span></div>
                                        <div className="col-sm-10"><hr className="text-light"/></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-1"><span className="text-light">10</span></div>
                                        <div className="col-sm-10"><hr className="text-light"/></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-1"><span className="text-light">5</span></div>
                                        <div className="col-sm-10"><hr className="text-light"/></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-1"><span className="text-light">0</span></div>
                                        <div className="col-sm-10"><hr className="bar3"/></div>
                                    </div>
                                    <span className="values text-light">1000</span>
                                    <span className="valuesII text-light">2000</span>
                                </div>

                            </div>
                        </div>

                        <div className="secondCard">
                            <div className="form-check form-switch">
                                <center><h4 className="text-muted">Control Panel</h4></center>
                                <div className="row">
                                    <div className="col-sm-6 m-2">
                                        <div>
                                            <input className="form-check-input " type="checkbox" id="flexSwitchCheckChecked" />
                                            <label className="form-check-label " htmlFor="flexSwitchCheckChecked">Enable/Disable - Notifications </label>
                                        </div>

                                        <div>
                                            <input className="form-check-input " type="checkbox" id="flexSwitchCheckChecked" checked/>
                                            <label className="form-check-label " htmlFor="flexSwitchCheckChecked">Enable/Disable - Emails </label>
                                        </div>

                                        <div>
                                            <input className="form-check-input " type="checkbox" id="flexSwitchCheckChecked" />
                                            <label className="form-check-label " htmlFor="flexSwitchCheckChecked">Enable/Disable - SMS </label>
                                        </div>

                                        <div>
                                            <input className="form-check-input " type="checkbox" id="flexSwitchCheckChecked" checked/>
                                            <label className="form-check-label " htmlFor="flexSwitchCheckChecked">Enable/Disable - Advertisements </label>
                                        </div>

                                    </div>
                                    <div className="col-sm-6"></div>
                                </div>

                            </div>
                        </div>

                        <div className="row" className="secondCard">
                            <center><h4 className="text-muted">Important Urls</h4></center>
                            <div className="col-sm-10 m-2">
                                <small>SLIIT : </small><a href={"www.sliit.lk"}>www.sliit.lk</a><br/>
                                <small>IEEE : </small><a href={"www.ieee.com"}>www.ieee.com</a><br/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default DashBoardAdminComponent;