import React, {Component} from 'react';
import logo from "../images/logo.png";
import calendar2 from "../images/calendar.gif";
import localise from "../images/localise.gif";
import Header from "../components/Header";
import {Table} from "react-bootstrap";
import conferenceManagementSystemServices from "../services/ConferenceManagementSystemServices";
import icon1 from "../images/analytics.png";
import author2 from "../images/author2.jpg";
import author3 from "../images/author3.jpg";
import wallpaper from "../images/Research.jpg"
import graph from "../images/graph.gif";
import graph2 from "../images/graph2.gif";
import graph3 from "../images/graph3.gif";
import chart2 from "../images/chart2.gif";
import chart3 from "../images/chart3.gif";
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
class AdminViewResearchEvents extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentDateTime: Date().toLocaleString(),
            events: [],
            StatusType : ''
        }
        this.changeStatusHandler=this.changeStatusHandler.bind(this);
    }
    componentDidMount(){
        conferenceManagementSystemServices.getEvents().then((res) => {
            //events2: this.state.events.filter(event => event.type !=="Workshop")
            this.setState({ events: res.data});
        });
    }
    delete(id){
        conferenceManagementSystemServices.deleteEvent(id).then(res=>{
            this.setState({events : this.state.events.filter(event => event._id !==id)});
        })
    }
    editEvent(id){
        console.log('event id'+id);
        this.props.history.push('/adminUpdateResearch/'+ id);
    }
    changeStatusHandler = (event)=> {
        this.setState({StatusType: event.target.value});
        conferenceManagementSystemServices.getEventByStatus(event.target.value).then(res=>{
            this.setState({events : res.data});
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

                        <div className="row">
                            <center>
                                <h2>Research Paper Presentations</h2>
                            </center>
                        </div>
                        <hr/>
                        {/*Columns with cards*/}
                        <div className="container m-2">
                            <div className="row align-items-start">
                                <div className="col">
                                    <div className="card" style={{width: "17rem"}}>
                                        <img src={graph} className="card-img-top" alt="..." style={{height:"200px"}}/>
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
                                        <img src={graph3} className="card-img-top" style={{height:"200px"}} alt="..."/>
                                        <div className="card-body" style={{background:"#FFCD01"}}>
                                            <h5 className="card-title">Add a Workshop</h5>
                                            <p className="card-text">Please click to Add a new Workshop based on the submitted workshop presentations</p>
                                            <br/><br/>
                                            <a href="/adminAddWorkshop" className="btn btn-dark">Go to Add a Workshop
                                                &nbsp;<i className=" fas fa-calendar-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card" style={{width: "17rem"}}>
                                        <img src={graph2} className="card-img-top" style={{height:"200px"}} alt="..."/>
                                        <div className="card-body" style={{background:"#FFCD01"}}>
                                            <h5 className="card-title">View upcoming Workshops</h5>
                                            <p className="card-text">Please click to view Upcoming Workshops' details</p>
                                            <br/><br/>
                                            <a href="/adminWorkshop" className="btn btn-dark">View upcoming Workshops
                                                &nbsp;<i className=" fas fa-calendar-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                        this.state.events.map(
                                            event =>
                                                <tr key = {event._id}>
                                                    <td> {event.title}</td>
                                                    <td> {event.eventType}</td>
                                                    <td> {event.description} </td>
                                                    <td> {event.startDate}</td>
                                                    <td> {event.eventStatus}</td>
                                                    <td>
                                                        <button style={{marginLeft: "10px"}}  className="btn btn-warning" onClick={ () => this.editEvent(event._id)}>
                                                            More Info
                                                            <i className="fas fa-edit"></i>
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button style={{marginLeft: "10px"}}  className="btn btn-danger" onClick={ () => this.delete(event._id)}>
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

export default AdminViewResearchEvents;