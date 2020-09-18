import React, {Component} from 'react';
import Articles from './Articles.js';
import Blog from './Blog.js';
import PastBlogs from './PastBlogs.js';
import '../styles/Home.css';

import axios from 'axios';

class Home extends Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>Blog</h1>
                <Blog/>
                <PastBlogs/>
                <Articles/>
            </div>
        );
    }
}

export default Home;