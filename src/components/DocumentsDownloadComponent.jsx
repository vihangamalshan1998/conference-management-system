import React, {Component} from 'react';
import IndexHeader from "./index-header";
import word from "../images/word.jpg"
import ResearchPaper from "../files/ResearchPaper_Template.docx"
import powerpoint from "../files/PowerPointTemplate.pptx"
import powerpointLogo from "../images/PowerPoint.png"
import calendar2 from "../images/calendar.gif";
import localise from "../images/localise.gif";
class DocumentsDownloadComponent extends Component {
    render() {
        return (
            <div className="container-fluid" style={{background:"black"}}>
                <IndexHeader/>
                <div className="container">
                        <h2 style={{color:"white"}}>Template Download Page</h2>
                        <hr style={{color:"white"}}/>
                        <br/>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src={word} style={{width:"100%"}}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <br/>
                                    <button style={{width:"100%"}} className="btn btn-warning">
                                        <a style={{color:"black"}} href={ResearchPaper} download="ResearchTemplate.doc"> Download Research Paper Template </a>
                                    </button>
                                </div>
                            </div>
                            <br/><br/>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src={powerpointLogo} style={{width:"100%"}}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <br/>
                                    <button className="btn btn-warning">
                                        <a  style={{color:"black"}}  href={powerpoint} download="PowerPointTemplate.ppt"> Download PowerPoint Template </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <p style={{color:"white"}}>
                            For Authors:<br/><br/>

                            To be published in the ICAF 2021 Conference Proceedings and to be eligible for publication in IEEE Xplore (Digital Library), at least one author of an accepted paper is required to register for the conference at the FULL (IEEE member or non-IEEE member) rate.
                            One FULL REGISTRATION allows the author to upload one (1) on which he/she is an author or co-author. The deadline for author registration is xxth November 2021.
                            One Full REGISTRATION allows ALL the authors to receive certificate of participation.
                            The paper MUST be presented by an author of that paper at the conference.
                            If an author or co-author is NOT available to present the paper at the conference, will NOT be eligible for publication in IEEE Xplore.
                            The registration fee is non-transferable and non- refundable.<br/><br/>

                            For All Conference Participants: <br/><br/>

                            One Day REGISTRATION allows the participants to access all technical sessions and workshops on a selected day.
                            All Guests who are registered for the conference will be given the access to all technical sessions. All Guests who are registered for the conference will NOT be allowed to attend any workshops. Guest registrants may attend the welcoming reception including keynote speeches.
                            The registration fee is non-transferable and non- refundable.
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}

export default DocumentsDownloadComponent;