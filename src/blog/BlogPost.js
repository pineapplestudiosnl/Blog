import React, { Component } from 'react';

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {blogPost} = this.props
    return (
      <div className="post">
        <h1>{blogPost.title}</h1>
        <p>{blogPost.subtitle}</p>
        <img src={blogPost.image}/>
        <p>{blogPost.body}</p>
      </div>
    );
  }
}

export default BlogPost
