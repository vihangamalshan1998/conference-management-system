import React, {Component} from 'react';
import "./App.css";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

import Header from "./components/Header";

import ListEvents from "./components/ListEventsComponent";
import EditorDashboardComponent from "./components/EditorDashboardComponent";
import AddConferenceEvent from "./components/AddConferenceEvent";
import UpdateEventsComponent from "./components/UpdateEventsComponent";
import ListWorkshops from "./components/ListWorkshopComponent";
import AddWorkshop from "./components/AddWorkshopComponent";
import UpdateWorkshopComponent from "./components/UpdateWorkshopComponent";
import ViewResearchEvents from "./components/ViewResearchEvents";
import ViewWorkshops from "./components/ViewWorkshops";
import AdminViewResearchEvents from "./components/AdminViewResearchEvents";
import AdminUpdateEvents from "./components/AdminUpdateEvents";
import AdminViewWorkshops from "./components/AdminViewWorkshops";
import AdminAddResearchComponent from "./components/AdminAddResearchComponent";
import AdminAddWorkshopComponent from "./components/AdminAddWorkshopComponent";
import AdminUpdateWorkshopsComponent from "./components/AdminUpdateWorkshopsComponent";
import AboutUsComponent from "./components/AboutUsComponent";
import ContactUsComponent from "./components/ContactUsComponent";
import DocumentsDownloadComponent from "./components/DocumentsDownloadComponent";
import footer from "./components/Footer"
import sidebar from "./components/EditorSidebarComponent";

import reviwerdash from './components/ReviwerDashcomponent';
import reviwerchangepassword from './components/changePasswordcomponent';
import allresearch from './components/allresearch';
import allproposal from './components/allproposal';
import newresearch from './components/newResearch';
import newproposal from './components/newproposal';
import signup from './components/UserSignUpComponent';
import addresearchdoc from './components/Addresearchpapers';
import addproposaldoc from './components/Addproposalpapers';
import addreviw from './components/addreview';
import addproposalreviw from './components/addreviewproposal';
import approveresearch from './components/approveresearch'
import approveproposal from './components/approveproposal';
import declinereviw from './components/declinereserch';
import declinproposal from './components/declineproposal';
import editresearchreview from './components/editresearchreview';
import editproposalreview from './components/editproposalreview';

import Index from "./components/indexpage"
import dash from './components/DashBoard-AdminComponent';
import  dash2 from './components/user-dashboard';
import userProfileComponent from './components/user-profile-component';
import UserLogin from "./components/UserLogin";

import payment from "./components/payment";
import OtpPopUp from "./components/OTPPopUp";
import addUsersAdmin from "./components/admin-addUsers";
import AllUsers from "./components/Admin-viewAllUsers"
import ResearcherDash from "./components/Researcher-dashboard"
import WorkshopDash from "./components/workshop-dashboard"
import changePasswordcomponent from "./components/changepasswords";


function App(){
    return(
        <Router>
        <div>
            <Route path="/header" exact component={Header} />
            <div className="container">
            <Switch>

            </Switch>
            </div>
            <Route path = "/" exact component = {Index}></Route>
            <Route path = "/login" component = {UserLogin}></Route>
            <Route path = "/researcherDash" component = {ResearcherDash}></Route>
            <Route path = "/workshopDash" component = {WorkshopDash}></Route>
            <Route path = "/addUsers" component = {addUsersAdmin}></Route>
            <Route path = "/allUsers" component = {AllUsers}></Route>
            <Route path = "/dash" component = {dash}></Route>
            <Route path = "/userDash" component = {dash2}></Route>
            <Route path = "/profile" component = {userProfileComponent}></Route>
            <Route path = "/payment" component = {payment}></Route>
            <Route path = "/auth" component = {OtpPopUp}></Route>

            <Route path = "/aboutUs" component = {AboutUsComponent}></Route>
            <Route path = "/contact" component = {ContactUsComponent}></Route>
            <Route path = "/download" component = {DocumentsDownloadComponent}></Route>



            <Route path = "/side" component = {sidebar}></Route>
            <Route path = "/eventList" component = {ListEvents}></Route>
            <Route path = "/addConferenceEvent" component = {AddConferenceEvent}></Route>
            <Route path = "/editor" component = {EditorDashboardComponent}></Route>
            <Route path = "/updateEvent/:id" component = {UpdateEventsComponent}></Route>
            <Route path = "/workshopList" component = {ListWorkshops}></Route>
            <Route path = "/addWorkshop" component = {AddWorkshop}></Route>
            <Route path = "/updateWorkshop/:id" component = {UpdateWorkshopComponent}></Route>
            <Route path = "/research" component = {ViewResearchEvents}></Route>
            <Route path = "/workshop" component = {ViewWorkshops}></Route>
            <Route path = "/adminResearch" component = {AdminViewResearchEvents}></Route>
            <Route path = "/adminUpdateResearch/:id" component = {AdminUpdateEvents}></Route>
            <Route path = "/adminWorkshop" component = {AdminViewWorkshops}></Route>
            <Route path = "/adminAddResearch" component = {AdminAddResearchComponent}></Route>
            <Route path = "/adminAddWorkshop" component = {AdminAddWorkshopComponent}></Route>
            <Route path = "/adminUpdateWorkshop/:id" component = {AdminUpdateWorkshopsComponent}></Route>
            <Route path = "/changePassword" component = {changePasswordcomponent}></Route>


            <Route path = "/reviwer/" component = {reviwerdash}></Route>
            <Route path = "/reviwerchangepassword/" component = {reviwerchangepassword}></Route>
            <Route path= "/allproposal" component={allproposal}></Route>
            <Route path= "/allresearch" component={allresearch}></Route>
            <Route path= "/newresearch" component={newresearch}></Route>
            <Route path= "/newproposal" component={newproposal}></Route>
            <Route path = "/signup" component={signup}></Route>
            <Route path = "/addresearchdoc" component={addresearchdoc}></Route>
            <Route path = "/addproposalhdoc" component={addproposaldoc}></Route>
            <Route path= "/addreviw/:id" component={addreviw}></Route>
            <Route path= "/addproposalreview/:id" component={addproposalreviw}></Route>
            <Route path= "/approveresearch" component={approveresearch}></Route>
            <Route path= "/approveproposal" component={approveproposal}></Route>
            <Route path="/declinreviw" component={declinereviw}></Route>
            <Route path="/declinproposal" component={declinproposal}></Route>
            <Route path = "/editresearchreview/:id" component={editresearchreview}></Route>
            <Route path="/editproposalreview/:id" component={editproposalreview}></Route>

            <Route path = "/footer" component = {footer}></Route>
        </div>
        </Router>
    );
}

export default App;