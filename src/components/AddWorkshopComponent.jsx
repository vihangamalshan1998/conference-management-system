import React, {Component} from 'react';
import logo from "../images/logo.png";
import event from "../images/event.svg";
import ConferenceManagementSystemServices from "../services/ConferenceManagementSystemServices";
import Header from "./Header";
import {Table} from "react-bootstrap";
const Imageurl = "http://localhost:8070/uploads/"

class AddWorkshopComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            workshop: [],
            title: '',
            eventType: '',
            description: '',
            startDate: '',
            duration: '',
            venue: '',
            organizedBy: '',
            eventStatus: '',
        }
        this.changeTitleHandler=this.changeTitleHandler.bind(this);
        this.changeEventTypeHandler=this.changeEventTypeHandler.bind(this);
        this.changeDescriprionHandler=this.changeDescriprionHandler.bind(this);
        this.changeDateHandler=this.changeDateHandler.bind(this);
        this.changeTimeHandler=this.changeTimeHandler.bind(this);
        this.changeVenueHandler=this.changeVenueHandler.bind(this);
        this.changeOrganizerHAndler=this.changeOrganizerHAndler.bind(this);
        this.changeStatusHandler=this.changeStatusHandler.bind(this);
    }
    componentDidMount() {
        ConferenceManagementSystemServices. getallpresentationdoc().then((res => {
            this.setState({workshop: res.data});
            console.log(this.state.workshop)
            {
                console.log(this.state.workshop.document)
            }
        }))
    }
    saveWorkshop = (e) => {
        e.preventDefault();
        let workshop = {
            title: this.state.title,
            eventType: this.state.eventType,
            description: this.state.description,
            startDate: this.state.startDate,
            duration: this.state.duration,
            venue: this.state.venue,
            organizedBy: this.state.organizedBy,
            eventStatus: this.state.eventStatus
        };
        console.log('workshop => ' + JSON.stringify(workshop));
        if(this.state.title !==''&& this.state.eventType!=='' && this.state.description!== '' && this.state.startDate!==''
            && this.state.duration!=='' && this.state.venue!=='' && this.state.organizedBy!=='' && this.state.eventStatus!==''){
            ConferenceManagementSystemServices.addWorkshop(workshop).then(res =>{
                alert("Workshop Added Successfully");
                this.props.history.push('/workshopList');
            });
        }else{
            alert("Please fill each required field");
        }

    }
    changeTitleHandler = (workshop)=> {
        this.setState({title: workshop.target.value});

    }
    changeEventTypeHandler = (workshop)=> {
        this.setState({eventType: workshop.target.value});
    }
    changeDescriprionHandler = (workshop)=> {
        this.setState({description: workshop.target.value});
    }
    changeDateHandler = (workshop)=> {
        this.setState({startDate: workshop.target.value});
    }
    changeTimeHandler = (workshop)=> {
        this.setState({duration: workshop.target.value});
    }
    changeVenueHandler = (workshop)=> {
        this.setState({venue: workshop.target.value});
    }
    changeOrganizerHAndler = (workshop)=> {
        this.setState({organizedBy: workshop.target.value});
    }
    changeStatusHandler = (workshop)=> {
        this.setState({eventStatus: workshop.target.value});
    }
    //cancel button
    cancel(){
        this.props.history.push('/editor');
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
                                <li><a className="dropdown-item" href="/changePassword">Change Password</a></li>
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
                            {/*Add Event*/}
                            <div className="col-sm-4 mt-5">
                                <img src={event} className="bg2 mt-5" alt="" height={"100%"} width={"100%"}/>
                            </div>
                            <div className="col-md-8">
                                <h1 className="text-center mt-4 font-weight-bold">ADD WORKSHOP</h1>
                                <div className="justify-contend-center mt-5">
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8">
                                            <form className="form-container">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="title" className="form-label">Title</label>
                                                            <input type="text" className="form-control" name="title" id="title" placeholder="Event Title"
                                                                   value={this.state.title} onChange={this.changeTitleHandler}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="eventType" className="form-label">Event Type</label>
                                                            <div className="input-group mb-3">
                                                                <select className="custom-select" name="eventType" id="eventType" placeholder="Event Status"
                                                                        style={{height:"45px",width:"100%"}}
                                                                        onChange={this.changeEventTypeHandler}>
                                                                    <option selected>Choose...</option>
                                                                    <option value="Workshop">Workshop</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="description" className="form-label">Description</label>
                                                            <input type="text" className="form-control" name="description" id="description" placeholder="Event Description"
                                                                   onChange={this.changeDescriprionHandler}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="startDate" className="form-label">Start Date</label>
                                                            <input type="date" className="form-control" name="startDate" id="startDate"
                                                                   onChange={this.changeDateHandler}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="duration" className="form-label">Start Time</label>
                                                            <input type="time" className="form-control" name="duration" id="duration" placeholder="Event Duration"
                                                                   onChange={this.changeTimeHandler}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="venue" className="form-label">Venue</label>
                                                            <input type="text" className="form-control" name="venue" id="venue" placeholder="Event Venue"
                                                                   onChange={this.changeVenueHandler}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="organizedBy" className="form-label">Workshop Conductor Email:</label>
                                                            <input type="email" className="form-control" name="organizedBy" id="organizedBy" placeholder="Event Organized By"
                                                                   onChange={this.changeOrganizerHAndler}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="eventStatus" className="form-label">Event Status</label>
                                                            <div className="input-group mb-3">
                                                                <select className="custom-select" name="eventStatus" id="eventStatus" placeholder="Event Status"
                                                                        style={{height:"45px",width:"100%"}}
                                                                        onChange={this.changeStatusHandler}>
                                                                    <option selected>Choose...</option>
                                                                    <option value="Pending">Pending</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row justify-content-center">
                                                    <div className="col-md-6 mt-3">
                                                        <button type="submit" className="btn btn-primary" onClick={this.saveWorkshop}>Submit</button>
                                                        <button className="btn btn-danger"  onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                                    </div>
                                                    <div className="col-md-6 mt-3">
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-3">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="container">
                                <br/>
                                <Table responsive className="table" striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th scope="col"> Proposal Topic</th>
                                        <th scope="col"> Description</th>
                                        <th scope="col"> Document URL</th>
                                        <th scope="col"> Workshop Conductor Email</th>
                                        <th scope="col"> Status: </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.workshop.map(
                                            workshop =>
                                                <tr key = {workshop._id}>
                                                    <td> {workshop.proposal_topic}</td>
                                                    <td> {workshop.proposal_description}</td>
                                                    <td> <a href={Imageurl + workshop.document} target="_blank">View Document</a> </td>
                                                    <td> {workshop.submiteremail}</td>
                                                    <td> {workshop.status}</td>
                                                </tr>
                                        )

                                    }


                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddWorkshopComponent;