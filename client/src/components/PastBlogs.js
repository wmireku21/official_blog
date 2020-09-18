import React, {Component} from 'react';

import {Container, Col, Row, Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class PastBlogs extends Component {

    state = {
        modal: false
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {
        return (
            <div className="mb-5">
                <Container>
                    <h3>Previous Posts</h3>
                    <Row>
                        <Col lg="4">
                            <Card>
                                <CardBody>
                                    <CardTitle>The Importance of Finance</CardTitle>
                                    <CardText>
                                        <small className="text-muted">Published April, 21, 2020</small>
                                    </CardText>
                                </CardBody>
                                <Button onClick={this.toggle}>Read Full Post</Button>
                                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                    <ModalHeader toggle={this.toggle}>The Importance of Finance</ModalHeader>
                                    <ModalBody>Imagine this. You just graduated from university. Excited to enter the workforce, earn your own income and finally, leave from under parents' ceiling.</ModalBody>
                                </Modal>
                            </Card>
                        </Col>
             
                    </Row>
                </Container>
            </div>
        );
    }
}

export default PastBlogs;