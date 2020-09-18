import React, {Component} from 'react';

import {Jumbotron, Container, Row, Col, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';

class Blog extends Component {

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
            <div>
                <Container>
                    <Row>
                        <Col lg="8">
                            <h3>Latest Post</h3>
                            <Jumbotron>
                                <h1>Forget About Your Friends</h1> 
                                <h4 className="lead">Forget who your friends are, what they do and who they are.</h4>
                                <hr className="my-2"/>
                                <Button onClick={this.toggle}>Read Full Post</Button>
                                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                    <ModalHeader toggle={this.toggle}>Forget About Your Friends</ModalHeader>
                                    <ModalBody>
                                        <div style={{textAlign: 'center'}}><i>"Comparison is the thief of joy" - Theodore Roosevelt</i></div> 
                                        <p>Yeah, you read that right. Forget about your friends. Your peers. Even, your family. And I mean that seriously... But just not literally. Having friends and closed ones to love and support you is the best feeling in the world but the danger is when we start to compare ourselves to them. We judge our accomplishments based on what your friends are doing, what your peers think you should be doing by your age and what your family thinks you should be doing with your life.</p>
                                    </ModalBody>
                                </Modal>
                            </Jumbotron>
                        </Col>
                        <Col lg="4"></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Blog;