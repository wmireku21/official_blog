import React, {Component} from 'react';
import axios from 'axios';

import { 
    
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input,
    Container 
} 
from 'reactstrap';

import '../styles/Contact.css';

class Contact extends Component {

    constructor(props) {
        super(props); 
        
        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const {name, email, message} = this.state;

        axios.post('/api/form', {
            name, 
            email, 
            message
        })

        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }

    render() {
        return (
            <div>
                <div className="background">
                </div>
                <div className="bg-text">
                    <h1>Get In Touch</h1>
                    <p>Looking for advice, need help, want to know about a new topic. Shoot us an email. </p>
                </div>
                <div className="contact-background">
                    <Container className="contact">
                            <Form onSubmit={this.handleSubmit.bind(this)} method="POST">
                                <FormGroup for="email">
                                    <Label><b>Name</b></Label>
                                    <Input type="text" name="name" id="contact-name" placeholder="Full Name" value={this.state.name} onChange={this.handleChange} required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label><b>Email</b></Label>
                                    <Input type="email" name="email" id="contact-email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label><b>Message</b></Label>
                                    <Input type="textarea" name="message" id="contact-message" placeholder="Type your message here" value={this.state.message} onChange={this.handleChange} required/>
                                </FormGroup>
                                <Button> Send Message</Button>
                            </Form>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Contact;