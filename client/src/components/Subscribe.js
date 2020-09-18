import React, {Component} from 'react';

import { Button, Form, FormGroup, Label, Input, Formtext, Container, Row, Col } from 'reactstrap';

import '../styles/Subscribe.css';

class Subscribe extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <div className="bottom-page">
                <Container> 
                    <Row>
                        <Col>
                            <h1>Just Graduated</h1>
                        </Col>
                        <Col>
                            <p>Be first to read the latest blog or hear about the lastest updates! </p>
                            <Form>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input type="text" id="name" placeholder="Full Name" required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" id="email" placeholder="Email" required />
                                </FormGroup>
                            </Form>
                            <Button>Subscribe!</Button>
                        </Col>
                    </Row>
                    <hr></hr>
                    <p style={{textAlign: 'center'}}>&copy; 2020, JustGraduated.</p>
                </Container>
            </div>
        );
    }
}

export default Subscribe;