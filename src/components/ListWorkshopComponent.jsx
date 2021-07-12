import React, { Component } from 'react';
import conferenceManagementSystemServices from "../services/ConferenceManagementSystemServices";
import {Table} from "react-bootstrap";
import logo from "../images/logo.png";
import Header from "./Header";

class ListWorkshopComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            workshops: []
        }
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
    editWorkshop(id){
        console.log('event id'+id);
        this.props.history.push('/updateWorkshop/'+ id);
    }
    changeStatusHandler = (workshop)=> {
        this.setState({StatusType: workshop.target.value});
        conferenceManagementSystemServices.getWorkshopByStatus(workshop.target.value).then(res=>{
            this.setState({workshops : res.data});
        })
    }
    render() {
        return (
            <div className="container-fluid bg-light">
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
                                <li><a className="dropdown-item" href="/editor">Home Page</a></li>
                            </ul>
                        </div>
                        <hr className="text-light"/>
                        <div className="dropdown my-2">
                            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-calendar-alt"></i> &nbsp;
                                View Events
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="/eventList">View Research Presentations</a></li>
                                <li><a className="dropdown-item" href="/workshopList">View Workshops</a></li>
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
                                <li><a className="dropdown-item" href="/addConferenceEvent">Add Research Paper Presentation</a></li>
                                <li><a className="dropdown-item" href="/addWorkshop">Add a Workshop</a></li>
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
                                    <h5 className="text-white h4">Editor Dashboard</h5>
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
                            <div className="row">
                                <nav className="navbar navbar-light bg-light">
                                    <div className="container-fluid">
                                        <form className="d-flex">
                                            <input className="form-control me-2" type="search" placeholder="Search"
                                                   name="searchQuery"aria-label="Search" value={this.state.StatusType} onChange={this.changeStatusHandler}/>
                                        </form>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="row">
                            <center>
                                <h2>Workshops List</h2>
                            </center>
                        </div>
                        <hr/>
                        {/*Add Event*/}
                        <div className="row">

                            <div className="container">
                                <br/>
                                <Table responsive className="table" striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th scope="col"> Title</th>
                                        <th scope="col"> Event Type</th>
                                        <th scope="col"> Description</th>
                                        <th scope="col"> Start Date</th>
                                        <th scope="col"> Time</th>
                                        <th scope="col"> Venue</th>
                                        <th scope="col"> Organized By</th>
                                        <th scope="col"> Event Status</th>
                                        <th scope="col"> Update</th>
                                        <th scope="col"> Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.workshops.map(
                                            workshop =>
                                                <tr key = {workshop._id}>
                                                    <td>{workshop.title}</td>
                                                    <td>{workshop.eventType}</td>
                                                    <td> {workshop.description} </td>
                                                    <td> {workshop.startDate}</td>
                                                    <td> {workshop.duration}</td>
                                                    <td> {workshop.venue}</td>
                                                    <td> {workshop.organizedBy}</td>
                                                    <td> {workshop.eventStatus}</td>
                                                    <td>
                                                        <button style={{marginLeft: "10px"}}  className="btn btn-warning" onClick={ () => this.editWorkshop(workshop._id)}>
                                                            Update
                                                            <i className="fas fa-edit"></i>
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button style={{marginLeft: "10px"}}  className="btn btn-danger"onClick={ () => this.delete(workshop._id)}>
                                                            Delete
                                                            <i className="fas fa-trash-alt"></i>
                                                        </button>
                                                    </td>
                                                    <br/>
                                                </tr>
                                        )
                                    }
                                    </tbody>
                                </Table>
                                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ListWorkshopComponent;