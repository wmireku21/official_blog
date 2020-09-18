import React, {Component} from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardLink,
    Row, Col, Container
} from 'reactstrap';

import '../styles/SingleArticle.css';

/*const SingleArticle = ({this.props}) => (

    <Container>
        <Row>
                <Card>
                    <CardImg src={this.props.urlToImage} alt={this.props.source.name}/>
                    <CardBody>
                        <CardTitle>
                            {this.props.title}
                        </CardTitle>
                        <CardLink style={{color: 'gray'}} href={this.props.url} target="_blank">Read Full Article</CardLink>
                    </CardBody>
                </Card>
        </Row>
    </Container>
);
*/

class SingleArticle extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Row>
                    <h5 style={{position: 'relative', top: '0', left: '50%', transform: 'translate(-50%, -50%'}}>{this.props.source}</h5>
                    <Card style={{height: '350px'}}>
                        <CardImg style={{height: '200px'}} src={this.props.urlToImage}/>
                        <CardBody>
                            <CardTitle>
                                {this.props.title}
                            </CardTitle>
                            <CardLink style={{color: 'gray'}} href={this.props.url} target="_blank">Read Full Article</CardLink>
                        </CardBody>
                    </Card>
                </Row>
            </Container>
        );
    }
}

export default SingleArticle;