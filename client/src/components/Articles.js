import React, {Component} from 'react';

import axios from 'axios';

import SingleArticle from './SingleArticle.js';

import '../styles/Articles.css';
import {Row, Col, Container} from 'reactstrap';

class Articles extends Component {

    constructor(props) {
        super(props);

        this.state = {
            news: []
        };
    }

    componentDidMount() {
        
        const url = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9efb7316ffec4817bf4d82264cb7160d'
        
        axios.get(url)
            .then((response) => {
                this.setState({
                    news: response.data.articles
                })
            })
            .catch((error) => console.log(error));
    }

    render() {
        const single = this.state.news.slice(0,3)
        return (
            <div>
                <Container>
                    <h2><span>News</span></h2>
                    <h5 style={{paddingBottom: '50px', textAlign: 'center'}}><i>scientia potentia est</i></h5>
                </Container>
                <Col>
                    <Row>
                        {single.map((item) =>
                            <Col lg="4" sm="4">
                                <SingleArticle key={item.id} source={item.source.name} urlToImage={item.urlToImage} title={item.title} url={item.url}/>
                            </Col>
                        )};
                      
                    </Row>
                </Col>
            </div>
        );
    }
}

export default Articles;