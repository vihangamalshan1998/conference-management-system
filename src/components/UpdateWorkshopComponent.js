import React, {Component} from 'react';
import logo from "../images/logo.png";
import event from "../images/call.svg";
import ConferenceManagementSystemServices from "../services/ConferenceManagementSystemServices";
import Header from "./Header";

class UpdateWorkshopComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            title: '',
            eventType: '',
            description: '',
            startDate: '',
            duration: '',
            venue: '',
            organizedBy: '',
            eventStatus: ''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeEventTypeHandler = this.changeEventTypeHandler.bind(this);
        this.changeDescriprionHandler = this.changeDescriprionHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeTimeHandler = this.changeTimeHandler.bind(this);
        this.changeVenueHandler = this.changeVenueHandler.bind(this);
        this.changeOrganizerHAndler = this.changeOrganizerHAndler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.updateWorkshop = this.updateWorkshop.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    componentDidMount(){
        ConferenceManagementSystemServices.getWorkshopByID(this.state.id).then((res)=>{
            let workshop =res.data;
            this.setState({
                title: workshop.title,
                eventType: workshop.eventType,
                description: workshop.description,
                startDate: workshop.startDate,
                duration: workshop.duration,
                venue: workshop.venue,
                organizedBy: workshop.organizedBy,
                eventStatus: workshop.eventStatus
            })
        })
    }
    updateWorkshop = (e) =>{
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
            ConferenceManagementSystemServices.updateWorkshop(workshop, this.state.id).then(res => {
                alert("Workshop Updated Successfully");
                this.props.history.push("/editor");
            })
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
                            <div className="col-sm-4 mt-5">
                                <img src={event} className="bg2 mt-5" alt="" height={"100%"} width={"100%"}/>
                            </div>
                            <div className="col-md-8">
                                <h1 className="text-center mt-4 font-weight-bold">UPDATE EVENT</h1>
                                <div className="justify-contend-center mt-5">
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8">
                                            <form className="form-container">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="title" className="form-label">Title</label>
                                                            <input placeholder="Title" name="title" className="form-control"
                                                                   value={this.state.title} onChange={this.changeTitleHandler}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="eventType" className="form-label">Event Type</label>
                                                            <div className="input-group mb-3">
                                                                <select className="custom-select" name="eventType" placeholder="Event Status"
                                                                        style={{height:"45px",width:"100%"}}
                                                                        value={this.state.eventType} onChange={this.changeEventTypeHandler}>
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
                                                                   value={this.state.description} onChange={this.changeDescriprionHandler}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="startDate" className="form-label">Start Date</label>
                                                            <input type="date" className="form-control" name="startDate" id="startDate"
                                                                   value={this.state.startDate} onChange={this.changeDateHandler}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="duration" className="form-label">Start Time</label>
                                                            <input type="time" className="form-control" name="duration" id="duration" placeholder="Event Duration"
                                                                   value={this.state.duration} onChange={this.changeTimeHandler}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="venue" className="form-label">Venue</label>
                                                            <input type="text" className="form-control" name="venue" id="venue" placeholder="Event Venue"
                                                                   value={this.state.venue} onChange={this.changeVenueHandler}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="organizedBy" className="form-label">Workshop Conductor Email:</label>
                                                            <input type="email" className="form-control" name="organizedBy" id="organizedBy" placeholder="Event Organized By"
                                                                   value={this.state.organizedBy} onChange={this.changeOrganizerHAndler}/>
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
                                                                        value={this.state.eventStatus} onChange={this.changeStatusHandler}>
                                                                    <option selected>Choose...</option>
                                                                    <option value="Pending">Pending</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-center">
                                                    <div className="col-md-6 mt-3">
                                                        <button type="submit" className="btn btn-primary" onClick={this.updateWorkshop}>Update</button>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateWorkshopComponent;