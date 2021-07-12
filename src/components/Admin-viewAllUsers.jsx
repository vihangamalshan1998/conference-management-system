import React, {Component} from 'react';
import conferenceManagementSystemServices from "../services/ConferenceManagementSystemServices";
import {Table} from "react-bootstrap";

class AdminViewAllUsers extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],
            StatusType : ''
        }
    }
    componentDidMount(){
        conferenceManagementSystemServices.getAllUsers().then((res) => {
            this.setState({ users: res.data});
        });
    }
    changeStatusHandler = (event)=> {
        this.setState({StatusType: event.target.value});
        if(event.target.value === "All"){
            conferenceManagementSystemServices.getAllUsers().then((res) => {
                this.setState({ users: res.data});
            });
        }else{
            conferenceManagementSystemServices.getUsersByType(event.target.value).then(res=>{
                this.setState({users : res.data});
            })
        }
    }
    render() {
        return (
            <div className="container-fluid bg-dark">
                <h3 className="text-light p-5">All Users Of ICAF</h3>
                <div className="row">
                    <div className="col-sm-6"></div>
                    <div className="col-sm-6 alignRight ">
                        <div className="form-group m-2">
                            <select className="form-control" id="typeSelect" value={this.state.StatusType} onChange={this.changeStatusHandler}>
                                <option value="All">All</option>
                                <option value="Admin">Admin</option>
                                <option value="Editor">Editor</option>
                                <option value="Researcher">Researcher</option>
                                <option value="WorkshopPresenter">WorkshopPresenter</option>
                                <option value="Reviewer">Reviewer</option>
                                <option value="Attendee">Attendee</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row m-2">
                    <table striped bordered hover className="table text-light">
                        <thead>
                            <tr>
                                <th scope="col"> Name</th>
                                <th scope="col"> Type</th>
                                <th scope="col"> Mobile</th>
                                <th scope="col"> Email</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users.map(
                                user =>
                                    <tr key = {user._id}>
                                        <td>{user.first_name + " " + user.last_name}</td>
                                        <td>{user.type}</td>
                                        <td>{user.number}</td>
                                        <td>{user.email}</td>
                                    </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default AdminViewAllUsers;