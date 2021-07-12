import React,{Component} from "react";
import img from "../images/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png";
import jwt_decord from 'jwt-decode';
import cmsService from '../services/ConferenceManagementSystemServices';

class payment extends Component{
    constructor(props) {
        super(props);
        this.state = {
            amount: ''
        }

        this.changeamountHandler = this.changeamountHandler.bind(this);


    }
    changeamountHandler = (event) =>{
        this.setState({amount: event.target.value});
    }

    pay = (e) =>{
        e.preventDefault();
        let payment = {amount : this.state.amount, email : jwt_decord(localStorage.getItem("token")).email}
        if(this.state.amount != "" && jwt_decord(localStorage.getItem("token")).email != ""){
            cmsService.addPayment(payment).then(()=>{
                this.props.history.push('/auth');
            })
        }
    }

    render() {
        return(
            <div className="container-fluid text-light" >
                <center>
                    <div className="paymentForm m-4">
                        <h3 className="text-dark"><b>Card Payment</b></h3>
                        <hr className="text-dark m-2"/>

                        <form className="form-control">
                            <div className="input-group m-2 flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping">
                                    <i className="far fa-credit-card"></i>
                                </span>
                                <input type="number " className="form-control" placeholder="Card Number" aria-label="CardNumber"
                                       aria-describedby="addon-wrapping"/>

                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="input-group m-2 flex-nowrap">
                                        <input type="date" className="form-control" aria-label="CardNumber"
                                               aria-describedby="addon-wrapping"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-group m-2 flex-nowrap">
                                        <span className="input-group-text" id="addon-wrapping">
                                            cvc
                                        </span>
                                        <input type="number" className="form-control" placeholder="ex : 123" aria-label="CardNumber"
                                               aria-describedby="addon-wrapping"/>
                                    </div>
                                </div>
                            </div>

                            <div className="input-group m-2">
                                <span className="input-group-text">Rs.</span>
                                <input type="number"  value={this.state.amount} onChange={this.changeamountHandler}className="form-control" placeholder="Amount"/>
                                    <span className="input-group-text">.00</span>
                            </div>

                            <div className="row">
                                <div className="col-sm-6"> <button  className="bg-secondary text-light" style={{width:"100%"}}>Cancel</button></div>
                                <div className="col-sm-6">  <button className="bg-success text-light" onClick={this.pay} style={{width:"100%"}}>Pay</button></div>


                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <img src={img} className="mt-3" width={"100%"}/>
                                </div>
                            </div>

                        </form>

                    </div>
                </center>
            </div>
        )
    }
}
export default payment;