import React, {Component} from 'react';
import conferenceManagementSystemServices from "../services/ConferenceManagementSystemServices";
import Header from "./Header";
import logo from "../images/logo.png";
import wallpaper from "../images/Research.jpg";
import {Table} from "react-bootstrap";
import calendar2 from "../images/calendar.gif";
import editEvent from "../images/editEvents.gif";
import localise from "../images/localise.gif";
import chart from "../images/chart.gif"
import chart2 from "../images/chart2.gif"
import chart3 from "../images/chart3.gif"
const options = [
    {
        label : "Confirmed",
        value : "Confirmed"
    },
    {
        label : "Pending",
        value : "Pending"
    },
    {
        label : "Rejected",
        value : "Rejected"
    }
]
class AdminViewWorkshops extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentDateTime: Date().toLocaleString(),
            workshops: [],
            StatusType : ''
        }
        this.changeStatusHandler=this.changeStatusHandler.bind(this);
    }
    componentDidMount(){
        conferenceManagementSystemServices.getWorkshop().then((res) => {
            this.setState({ workshops: res.data});
        });
    }
    delete(id){
        conferenceManagementSystemServices.deleteWorkshop(id).then(res=>{
            this.setState({workshops : this.state.workshops.filter(workshop => workshop._id !==id)});
        })
    }
    editEvent(id){
        console.log('workshop id'+id);
        this.props.history.push('/adminUpdateWorkshop/'+ id);
    }
    changeStatusHandler = (workshop)=> {
        this.setState({StatusType: workshop.target.value});
        conferenceManagementSystemServices.getWorkshopByStatus(workshop.target.value).then(res=>{
            this.setState({workshops : res.data});
        })
    }
    render() {
        return (
            <div className="bg-light">
                <Header/>
                {/*Editor sidebar*/}
                <div className="row">
                    <div className="col-sm-2 bg-dark text-light">
                        <div className="dropdown">
                            <img src={logo} height={"150px"} width={"150px"}/>
                            <br/>
                            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-calendar-alt"></i> &nbsp;
                                Home Page
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href={"/dash"}>Home Page</a></li>
                            </ul>
                        </div>
                        <hr className="text-light"/>
                        <div className="dropdown my-2">
                            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-calendar-alt"></i> &nbsp;
                                Add Event
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="/adminAddResearch">Add Research Paper Presentation</a></li>
                                <li><a className="dropdown-item" href="/adminAddWorkshop">Add a Workshop</a></li>
                            </ul>
                        </div>
                        <hr className="text-light"/>
                        <div className="dropdown my-2">
                            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-calendar-alt"></i> &nbsp;
                                View Upcoming Events
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="/adminResearch">View Research Paper Presentations</a></li>
                                <li><a className="dropdown-item" href="/adminWorkshop">View Workshops</a></li>
                            </ul>
                        </div>
                        <hr className="text-light"/>
                        <div className="dropdown my-2">
                            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-calendar-alt"></i> &nbsp;
                                Change Password
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Change Password</a></li>
                            </ul>
                        </div>
                        <hr className="text-light"/>
                    </div>
                    <div className="col-sm-10">
                        <div className="row">
                            <div className="collapse" id="navbarToggleExternalContent">
                                <div className="bg-dark p-4">
                                    <h5 className="text-white h4">Admin Dashboard</h5>
                                    <span className="text-muted">{this.state.currentDateTime}</span>
                                </div>
                            </div>
                            <nav className="navbar navbar-dark bg-dark">
                                <div className="container-fluid">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarToggleExternalContent"
                                            aria-controls="navbarToggleExternalContent" aria-expanded="false"
                                            aria-label="Toggle navigation">
                                        <span className="fas fa-angle-down"></span>
                                    </button>
                                </div>
                            </nav>
                        </div>
                        <br/>
                        <div className="row" >
                            <center>
                                <h2>Workshops</h2>
                            </center>
                        </div>
                        <hr/>
                        {/*Columns with cards*/}
                        <div className="container m-2">
                            <div className="row align-items-start">
                                <div className="col">
                                    <div className="card" style={{width: "17rem"}}>
                                        <img src={chart} className="card-img-top" alt="..." style={{height:"250px"}}/>
                                        <div className="card-body" style={{background:"#FFCD01"}}>
                                            <h5 className="card-title">Add Research Paper Presentation</h5>
                                            <p className="card-text">Please click to Add a new Research Paper Presentation based on the submitted research papers</p>

                                            <a href="/adminAddResearch" className="btn btn-dark">Go to Add Research Paper Presentation
                                                &nbsp;<i className=" fas fa-calendar-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card" style={{width: "17rem"}}>
                                        <img src={chart2} className="card-img-top" style={{height:"250px"}} alt="..."/>
                                        <div className="card-body" style={{background:"#FFCD01"}}>
                                            <h5 className="card-title">Add a Workshop</h5>
                                            <br/>
                                            <p className="card-text">Please click to Add a new Workshop based on the submitted workshop presentations</p>
                                            <br/>
                                            <a href="/adminAddWorkshop" className="btn btn-dark">Go to Add a Workshop
                                                &nbsp;&nbsp;<i className=" fas fa-calendar-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card" style={{width: "17rem"}}>
                                        <img src={chart3} className="card-img-top"alt="..." style={{height:"250px"}}/>
                                        <div className="card-body" style={{background:"#FFCD01"}}>
                                            <h5 className="card-title">View upcoming Research Paper Presentations</h5>
                                            <p className="card-text">Please click to view Upcoming Research Paper Presentations' details</p>
                                            <br/>
                                            <a href="/adminResearch" className="btn btn-dark">View upcoming Research Paper Presentations
                                                &nbsp;<i className=" fas fa-calendar-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/><br/>
                        <br/>
                        <div className="row">
                            <button className="btn btn-dark"><br/></button>
                            <nav className="navbar navbar-light bg-light">
                                <div className="container-fluid">
                                    <select className="custom-select" style={{height:"45px",width:"200px"}} value={this.state.StatusType} onChange={this.changeStatusHandler}>
                                        <option selected>Search</option>
                                        {
                                            options.map((option) =>(
                                                <option value={option.value}>{option.label}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </nav>
                        </div>
                        <br/>
                        <div className="container">
                            <div className="row">
                                <Table responsive className="table" striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Event Type</th>
                                        <th scope="col"> Description</th>
                                        <th scope="col"> Start Date</th>
                                        <th scope="col"> Event Status</th>
                                        <th scope="col"> View More Info:</th>
                                        <th scope="col"> Delete:</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.workshops.map(
                                            workshop =>
                                                <tr key = {workshop._id}>
                                                    <td> {workshop.title}</td>
                                                    <td> {workshop.eventType}</td>
                                                    <td> {workshop.description} </td>
                                                    <td> {workshop.startDate}</td>
                                                    <td> {workshop.eventStatus}</td>
                                                    <td>
                                                        <button style={{marginLeft: "10px",background:"orange"}}  className="btn btn-warning" onClick={ () => this.editEvent(workshop._id)}>
                                                            More Info:
                                                            <i className="fas fa-edit"></i>
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button style={{marginLeft: "10px",background: "red"}}  className="btn btn-danger" onClick={ () => this.delete(workshop._id)}>
                                                            Delete
                                                            &nbsp;&nbsp;
                                                            <i className="fas fa-trash-alt"></i>
                                                        </button>
                                                    </td>
                                                    <br/><br/><br/>
                                                </tr>
                                        )
                                    }
                                    </tbody>
                                </Table>
                            </div>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminViewWorkshops;