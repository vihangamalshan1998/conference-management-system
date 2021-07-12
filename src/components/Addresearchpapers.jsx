import React, { Component } from 'react';
import Swal from 'sweetalert2';
import Header from "./Header";
import axios from 'axios';
import jwt_decord from "jwt-decode";

class Addresearchpapers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            researchTopic: '',
            email: jwt_decord(localStorage.getItem("token")).email,
            researchDescription: '',
            doc: ''

        }
        this.changereseartopic = this.changereseartopic.bind(this);
        this.changeresearchDescription = this.changeresearchDescription.bind(this);
        this.changedocHandler = this.changedocHandler.bind(this);
    }
    changedocHandler = (event) => {
        this.setState({ doc: event.target.files[0] });
    }
    changereseartopic = (event) => {
        this.setState({ researchTopic: event.target.value });
    }
    changeresearchDescription = (event) => {
        this.setState({ researchDescription: event.target.value });
    }
    addresearchdoc = (e) => {
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
            text: "Do you want to add Research?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Add it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                const formData = new FormData();
                formData.append('submiteremail', this.state.email);
                formData.append('research_topic', this.state.researchTopic);
                formData.append('reseach_description', this.state.researchDescription);
                formData.append('document', this.state.doc);
                console.log(this.state.doc)
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                };

                axios.post("http://localhost:8070/researchdoc/addreseardoc", formData, config)

                swalWithBootstrapButtons.fire(
                    'Added!',
                    'Your Research has been Added.',
                    'success'
                ).then(
                    this.props.history.push("/researcherDash")
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
        this.props.history.push("/researcherDash")
    }
    render() {
        return (
            <body>

                
            <div className="container-fluid" style={{ backgroundColor: "#404040", height: "100vh" }}>
                <div className="row text-center">
                    <div className="col-12 mt-5">
                        <h1 style={{ color: "#FFF"}}>Add Research Papers</h1>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="card" style={{ backgroundColor: "#999999"}}>
                        <form className="form-container">
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-8 ml-2 mr-2 mt-3">
                                    <div className="form-group">
                                        <h5>Research Topic</h5>
                                        <input placeholder="Research Topic" name="researchTopic" className="form-control"
                                            value={this.state.researchTopic} onChange={this.changereseartopic} />
                                    </div>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-8 ml-2 mr-2 mt-3">
                                    <div className="form-group">
                                        <h5>Research Description</h5>
                                        <textarea placeholder="Reserch Description" class="form-control" name="researchDescription"
                                            rows="3" value={this.state.researchDescription} onChange={this.changeresearchDescription} />
                                    </div>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-8 ml-2 mr-2 mt-3">
                                    <div className="form-group">
                                        <h5>Research Papers</h5>
                                        <input className="form-control bg-success mt-2 mb-3" type="file" name="doc"
                                            onChange={this.changedocHandler} />{console.log(this.state.doc)}
                                    </div>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-3 mt-3 mb-5">
                                    <button className="btn btn-success btn-block" onClick={this.addresearchdoc}>Add Researchpapers</button>
                                </div>

                                <div className="col-md-3 mt-3 mb-5">
                                    <button className="btn btn-danger btn-block" onClick={this.cancle}>cancle</button>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
            </body >
        );
    }
}


export default Addresearchpapers;