import React, {Component} from 'react';
import notice from "../images/notice.png";
import conference from "../images/Conference.png";
import conference2 from "../images/Conference2.png";
import logo from "../images/logo.png"
class Footer extends Component {
    render() {
        return (
            <div className="footer">
            <div className="footer row" >
                Footer
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-4">
                            <img style={{height:"100%",width:"50%"}} src={logo}/>
                        </div>
                        <div className="col-sm-4">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="col-sm-4">
                           Hello
                        </div>
                    </div>
                </div>
            </div>
            </div>

        );
    }
}

export default Footer;