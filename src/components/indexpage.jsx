import React, { Component } from 'react';
import homeBack from "../images/homeBack.png";
import IndexHeader from "../components/index-header";
class indexpage extends Component{
    render() {
        return(
            <div className="container-fluid index">
                <IndexHeader/>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10 bodyText">
                        <h1 className="text-light heddingText">Conference Management</h1>
                        <small className="smallText">CREATIVE MIND, CREATIVE WORKS</small>
                        <div className="row">
                            <div className="col-sm-4 mt-3 text-light">
                                <small >ICMS is the only all-in-one event platform built with the mission to drive deep engagement – first and foremost – yielding greater business results.

                                    Engagement, paired with a proactive and full-time customer support team ensures your events execute perfectly every time.</small>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-sm-3">
                                <h3 className="getStarted"><a className="text-success" href="/login">Get Started</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default indexpage;