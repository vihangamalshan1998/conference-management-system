import React, { Component } from 'react';
import Swal from 'sweetalert2';
import Header from "./Header";
import axios from 'axios';
import jwt_decord from "jwt-decode";

class Addproposalpapers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            proposal_topic: '',
            submiteremail: jwt_decord(localStorage.getItem("token")).email,
            proposal_description: '',
            doc: ''

        }
        this.changeproposaltopic = this.changeproposaltopic.bind(this);
        this.changeproposalDescription = this.changeproposalDescription.bind(this);
        this.changedocHandler = this.changedocHandler.bind(this);
    }
    changedocHandler = (event) => {
        this.setState({ doc: event.target.files[0] });
    }
    changeproposaltopic = (event) => {
        this.setState({ proposal_topic: event.target.value });
    }
    changeproposalDescription = (event) => {
        this.setState({ proposal_description: event.target.value });
    }
    addrproposaldoc = (e) => {
        e.preventDefault();
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success ml-5',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "Do you want to Add Proposal?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Add it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                const formData = new FormData();
                formData.append('submiteremail', this.state.submiteremail);
                formData.append('proposal_topic', this.state.proposal_topic);
                formData.append('proposal_description', this.state.proposal_description);
                formData.append('document', this.state.doc);
                console.log(this.state.doc)
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                };

                axios.post("http://localhost:8070/proposaldoc/addproposaldoc", formData, config)

                swalWithBootstrapButtons.fire(
                    'Added!',
                    'Your Proposal has been Added.',
                    'success'
                ).then(
                    this.props.history.push("/workshopDash")
                )
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Process is cancelled',
                    'error'
                )
            }
        })
    }
    cancle = (e) => {
        e.preventDefault();
        this.props.history.push("/workshopDash")
    }
    render() {
        return (
            <body>
                <Header />

                <div className="container-fluid" style={{ backgroundColor: "#404040", height: "100vh" }}>
                    <div className="row text-center">
                        <div className="col-12 mt-5">
                            <h1 style={{ color: "#FFF" }}>Add Proposal Papers</h1>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="card" style={{ backgroundColor: "#999999" }}>
                            <form className="form-container">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-8 ml-2 mr-2 mt-3">
                                        <div className="form-group">
                                            <h5>Proposal Topic</h5>
                                            <input placeholder="Proposal Topic" name="proposal_topic" className="form-control"
                                                value={this.state.proposal_topic} onChange={this.changeproposaltopic} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-8 ml-2 mr-2 mt-3">
                                        <div className="form-group">
                                            <h5>Proposal Description</h5>
                                            <textarea placeholder="Proposal Description" class="form-control" name="researchDescription"
                                                rows="3" value={this.state.proposal_description} onChange={this.changeproposalDescription} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-8 ml-2 mr-2 mt-3">
                                        <div className="form-group">
                                            <h5>Proposal Papers</h5>
                                            <input className="form-control bg-success mt-2 mb-3" type="file" name="doc"
                                                onChange={this.changedocHandler} />{console.log(this.state.doc)}
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-3 mt-3 mb-5">
                                        <button className="btn btn-success btn-block" onClick={this.addrproposaldoc}>Add Proposalpapers</button>
                                    </div>

                                    <div className="col-md-3 mt-3 mb-5">
                                        <button className="btn btn-danger btn-block" onClick={this.cancle}>cancle</button>
                                    </div>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </body>
        );
    }
}

export default Addproposalpapers;