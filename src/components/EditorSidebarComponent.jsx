import React, {Component} from 'react';
import calendar2 from "../images/calendar.gif";
import localise from "../images/localise.gif";
import editEvent from "../images/editEvents.gif";
import conferenceManagementSystemServices from "../services/ConferenceManagementSystemServices";

class EditorSidebarComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentDateTime: Date().toLocaleString(),
            events: []
        }
        //this.edititem = this.edititem.bind(this);
    }
    componentDidMount(){
        conferenceManagementSystemServices.getEvents().then((res) => {
            this.setState({ events: res.data});
        });
    }
    /*editEvent(id) {
        this.props.history.push('/editEvent/'+ id);
    }*/
    delete(id){
        conferenceManagementSystemServices.deleteEvent(id).then(res=>{
            this.setState({events : this.state.events.filter(event => event._id !==id)});
        })
    }
    render() {
        return (
            <div className="container-fluid bg-light">
                <div className="row">
                    <div className="col-sm-3 bg-dark text-light">
                        <div className="dropdown">
                            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                Users
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">All Users</a></li>
                                <li><a className="dropdown-item" href="#">Add Users</a></li>
                                <li><a className="dropdown-item" href="#">Search</a></li>
                            </ul>
                        </div>
                        <hr className="text-light"/>
                        <div className="dropdown my-2">
                            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                Researches
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <hr className="text-light"/>
                        <div className="dropdown my-2">
                            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                Events
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <hr className="text-light"/>
                    </div>

                    <div className="col-sm-9">
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
                            <br/>

                            {/*Columns with cards*/}
                            <div className="container">

                                <div className="row align-items-start">
                                    <div className="col">
                                        <div className="card" style={{width: "18rem"}}>
                                            <br/>
                                            <img src={calendar2} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title">Add Event</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.</p>
                                                <a href="/addConferenceEvent" className="btn btn-primary">Go to Add Events
                                                    &nbsp;<i className=" fas fa-calendar-alt"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card" style={{width: "18rem"}}>
                                            <br/>
                                            <img src={localise} className="card-img-top" style={{height:"200"}} alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title">View Upcoming Events</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.</p>
                                                <a href="/eventList" className="btn btn-primary">Go to View Events
                                                    &nbsp;<i className=" fas fa-calendar-alt"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card" style={{width: "18rem"}}>
                                            <br/><br/><br/><br/>
                                            <img src={editEvent} className="card-img-top"alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title">Add Event</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.</p>
                                                <a href="/addConferenceEvent" className="btn btn-primary">Go somewhere
                                                    &nbsp;<i className=" fas fa-calendar-alt"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br/><br/>
                            {/*Display Event Details*/}
                            <div className="container">
                                <div className="row">
                                    {
                                        this.state.events.map(
                                            events =>
                                                <div className="col-md-4">
                                                    <div className="card mt-3 sellercard">
                                                        <div className="product text-center mt-3">
                                                            <h2>Upcoming Events</h2>
                                                            <h5>{events.title}</h5>
                                                            <div className="mt-3 info">
                                                                <span className="text1 d-block mb-3">{events.description}</span>
                                                                <span className="text1 ">Time {events.duration} </span>
                                                            </div>
                                                            <div className="mt-3 info">
                                                                <span className="text1 ">Status {events.eventStatus} </span>
                                                            </div>
                                                            <div className="cost mt-3 text-dark">
                                                                <span>{events.date}</span>
                                                            </div>

                                                        </div>
                                                        <div className="row mt-2">
                                                            <div className="col-md-6">
                                                                <div className="p-3 text-center text-white mt-2 cursor">
                                                                    <button className="btn btn-success btn-block">
                                                                        <i className="fas fa-edit"></i>&nbsp;
                                                                        Edit Event

                                                                    </button>
                                                                    <br/>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="p-3 text-center text-white mt-2 cursor">
                                                                    <button className="btn btn-danger">Delete Item</button>
                                                                    <br/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        )
                                    }
                                </div>
                            </div>
                            <br/>
                            {/*Accordion*/}
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Accordion Item #1
                                        </button>

                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until
                                            the collapse plugin adds the appropriate classes that we use to style each element.
                                            These classes control the overall appearance, as well as the showing and hiding via CSS
                                            transitions. You can modify any of this with custom CSS or overriding our default
                                            variables. It's also worth noting that just about any HTML can go within
                                            the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                            until the collapse plugin adds the appropriate classes that we use to style each
                                            element. These classes control the overall appearance, as well as the showing and hiding
                                            via CSS transitions. You can modify any of this with custom CSS or overriding our
                                            default variables. It's also worth noting that just about any HTML can go within
                                            the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until
                                            the collapse plugin adds the appropriate classes that we use to style each element.
                                            These classes control the overall appearance, as well as the showing and hiding via CSS
                                            transitions. You can modify any of this with custom CSS or overriding our default
                                            variables. It's also worth noting that just about any HTML can go within
                                            the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                        </div>
                        <br/>

                    </div>
                </div>
            </div>
        );
    }
}

export default EditorSidebarComponent;