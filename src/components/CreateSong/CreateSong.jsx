import React, { Component } from 'react';
import './CreateSong.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class CreateSong extends Component {
    notify = () => toast("Job Application Successfully Submitted");
    constructor(props) {
        super(props);
        this.state = { 
            company: '',
            about: '',
            link: '',
            status: '',
            date_applied: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createSong(this.state)
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // options = [
    //     {label: "status", value: 1, className: 'custom-class'},
    //     {label: "two", value: 2, className: 'awesome-class'}
    //     // more options...
    // ];
    
   

   
    render() { 
        return ( 
            <div class="addsong">
                <h3>Add Application</h3>
                <form class="form" onSubmit={(event) => this.handleSubmit(event)}>
                    <label> Company: </label>
                    <input type="text" name="company" onChange={this.handleChange} value={this.state.company}/>
                    <label> About: </label>
                    <input type="text" name="about" onChange={this.handleChange} value={this.state.about}/>
                    <label> Link: </label>
                    <input type="url" id="link" name="link" onChange={this.handleChange} value={this.state.link}/>
                    <label> Date Applied: </label>
                    <input type="date" name="date_applied" onChange={this.handleChange} value={this.state.date_applied}/>
                    <label> Status: </label>
                    <select id="status" name="status" onChange={this.handleChange} value={this.state.status}>
                        <option value="Select Response" >Select Status</option>
                        <option value="Awaiting Response" style={{color: "purple"}}>Awaiting Response</option>
                        <option value="Under Consideration" style={{color: "blueviolet"}}>Under Consideration</option>
                        <option value="Interview" style={{color: "green"}}>Interview</option>
                        <option value="Job Offer" style={{color: "gold"}}>Job Offer</option>
                        <option value="Rejected" style={{color: "red"}}>Rejected</option></select>
                    <button type="submit" onClick={this.notify}>Submit New Application</button>
                    <ToastContainer/>
             </form>
            </div>
        );
    }
}
 
export default CreateSong;