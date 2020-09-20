import React, {Component} from 'react';
import axios from 'axios';

import {
    Jumbotron, 
    Container, 
    Row, 
    Col, 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody,
    Card,

} 
from 'reactstrap';

class Blog extends Component {


    state = {
        modal: false,
        quote: []
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    componentDidMount() {
        const url = 'https://quotes.rest/qod?language=en'

        axios.get(url)
            .then((response) => {
                this.setState({
                    quote: response.data.contents.quotes
                })
            })
            .catch((error) => console.log(error));
        
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
                        <Col lg="4">
                            <Card>
                                <h4 style={{textAlign: 'center', paddingTop: '10px'}}>Quote of the Day</h4>
                                <hr className="my-2"/>
                                {this.state.quote.map((quote) => 
                                    <div key={quote.id}>
                                        <p style={{textAlign: 'center', padding: '0 10px'}}>{`"${quote.quote}"`}</p>
                                        <h6 style={{paddingLeft: '20px'}}><i> - {quote.author}</i></h6>
                                    </div>
                                )}
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Blog;