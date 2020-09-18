import React, {Component} from 'react';

import {Container, Col, Row} from 'reactstrap';

import Walter from '../photos/WalterMirekuPortrait.jpg';

class About extends Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>About</h1>
                <Container>
                    <Row>
                        <Col lg="2"></Col>
                        <Col lg="8">
                            <p><b>Just Graduated</b> is a growing community that seeks to ease the burden that young adults, specifically recent or soon to-be graduates, face as they are start to make their own financial decisions. The goal of the post is to equip young adults with the knowledge to make their own financial decisions and the resources to put them in the right direction to make better financial decisons.</p> 
                            <p>Each blog offers advice and information on how to change your mindset so you are more aware of your finances and know how to manage and/or increase your income. Each new day, news on the market and specific company is given, so you also have an idea of what's going on economically. </p>
                            <p>Subscribe to be updated whenever a new blog is posted and stay tuned for a podcast that will host guests whom hope to spread their knowledge to listeners.</p>
                            <h4 style={{textAlign: 'center'}}>Founder</h4>
                            <div style={{margin: '40px 0'}}className="founder">
                                <Row>
                                    <Col lg="6"><img src={Walter} style={{width: '100%', height: '350px'}}/></Col>
                                    <Col lg="6"><p><b>Walter Mireku</b> is a college graduate of 2020 and an aspiring blogger. In the wake of the pandemic and the uncertainty it caused for new graduates, he realized many people depend solely on corporate jobs for income. He wishes to help young graduates learn more about money and help them gain financial freedom. </p></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg="2"></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;