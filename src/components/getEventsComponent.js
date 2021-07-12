import React, {Component} from 'react';
import axios from "axios";

class GetEventsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            event:[]
        };
    }
    componentDidMount() {
        this.getEvents();
    }

    getEvents(){
        axios.get('http://localhost:8000/event').then(res=>{
            this.setState({
                event:res.data
            });
            console.log(this.state.event);
        });
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default GetEventsComponent;