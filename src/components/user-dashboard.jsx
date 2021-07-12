import React,{Component} from "react";
import sliit from "../images/SLIIT-malabe.jpg";
import Header from "./Header";
import Audi from "../images/Audi.jpg";
import conferenceManagementSystemServices from "../services/ConferenceManagementSystemServices";

class userDashboard extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            events :[]
        }
    }

    componentDidMount(){
        conferenceManagementSystemServices.getEventByStatus("Confirmed").then((res) => {
            this.setState({ events: res.data});
        });
    }
    render() {
        return(
          <div className="container-fluid bg-dark">
              <Header/>
              <div className="row ">
                  <div className="col-sm-2 text-light" >
                      <ul className="sideList">
                          <li className= "p-2">
                              <i className="fas fa-user">&nbsp; &nbsp;<small><a href="/payment">Payment</a></small></i>
                          </li>
                          <li className= "p-2">
                              <i className="fas fa-heartbeat">&nbsp; &nbsp;<small>COVID special notices</small></i>
                          </li>
                          <li className= "p-2">
                              <i className="fas fa-users">&nbsp; &nbsp;<small>New Conferences</small></i>
                          </li>
                          <li className= "p-2">
                              <i className="fas fa-book">&nbsp; &nbsp;<small>Researches</small></i>
                          </li>
                          <li className= "p-2">
                              <i className="fas fa-bookmark">&nbsp; &nbsp;<small>Saved Items</small></i>
                          </li>
                      </ul>
                  </div>
                  <div className="col-sm-7">
                      {
                          this.state.events.map(
                              event =>
                                  <div className="card m-2">
                                      <div>
                                          <small className="lead alignRight text-dark"><b><center>{event.title} <br/>
                                          <small className="text-dark">{event.organizedBy}</small>
                                          </center></b> </small>
                                          <p className="m-0 p-0">{event.eventType}, &nbsp;{event.description} </p>
                                          <small className="m-0 p-0">({event.startDate}-{event.duration}&nbsp;@{event.venue})</small>
                                      </div>
                                      <div>
                                          <img src={Audi} style={{width:"100%"}}/>;
                                      </div>
                                      <div className="row">
                                          <div className="col-sm-6">
                                              <small>100 likes</small>
                                          </div>
                                          <div className="col-sm-6 giftBox">
                                              <small>10 comments</small>
                                          </div>
                                      </div>

                                      <hr className="text-dark m-0"/>

                                      <div className="row block">
                                          <div className="col-sm-4">
                                              <i className="fas fa-thumbs-up">&nbsp; &nbsp;<small>Like</small></i>
                                          </div>
                                          <div className="col-sm-4">
                                              <i className="fas fa-comment">&nbsp; &nbsp;<small>Comment</small></i>
                                          </div>
                                          <div className="col-sm-4">
                                              <i className="fas fa-share-alt">&nbsp; &nbsp;<a href="/payment">Register</a></i>
                                          </div>
                                      </div>

                                      <hr className="text-dark m-0"/>
                                      <br/>
                                      <input type="text" placeholder="Write a comment..." className="mb-1 comment"/>
                                  </div>
                          )
                      }

                  </div>
                  <div className="col-sm-3">
                      <div className="card m-2">
                          <div className="row ">
                              <div className="col-sm-12 giftBox">
                                  <i className="fas fa-window-close"></i>
                              </div>
                              <div className="col-sm-12">
                                  <i className="fas fa-gift p-2"> <small className="giftSen">You have a gift</small></i>
                              </div>
                          </div>
                      </div>

                      <hr className="text-light"/>

                      <div>
                          <small className="text-secondary"> Sponsored</small>
                          <div className="row">
                              <div className="col-sm-4">
                                  <img src={sliit} style={{width:"100%"}}/>
                              </div>
                              <div className="col-sm-6">
                                  <p className="text-light">Sri Lanka Institute of Information Technology</p>
                                  <a href={"#"}><small className="text-secondary">www.sliit.lk</small></a>
                              </div>
                          </div>
                      </div>

                      <hr className="text-light"/>
                      <div>
                        <div className="row">
                            <div className="col-sm-6">
                                <small className="text-light">Live Events</small>
                            </div>
                            <div className="col-sm-6">
                                <small className="text-light">
                                    <i className="p-2 fas fa-search"></i>
                                    <i className=" p-2 fas fa-video"></i>
                                </small>
                            </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}
export default userDashboard;