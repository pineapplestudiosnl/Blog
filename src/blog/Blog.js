import React, { Component } from 'react';
import {routes} from '../routes'
import {Link} from 'react-router-dom'
import './Blog.css';
import { connect } from 'react-redux'
import {selectTopic, addBlogPost} from './BlogState'
import BlogPost from './BlogPost'

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      topic: this.props.selectedTopic
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ height: window.innerHeight });
  }

  render() {
    const {height} = this.state;
    const {blogPosts} = this.props;
    const newBlogPost = {
      title: "Title of my another blogpost",
      subtitle: "Whatever description you want to give it",
      image: "https://www.google.com/logo.svg"
    }
    return (
      <div className="wrapper" style={{height}}>
        {blogPosts.map((blogPost, i) => (
          <BlogPost key={i} blogPost={blogPost}/>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedTopic: state.blog.selectedTopic,
  blogPosts: state.blog.posts,
})

const mapDispatchToProps = dispatch => ({
  selectTopic: (id) => dispatch(selectTopic(id)),
  addBlogPost: (newBlogPost) => dispatch(addBlogPost(newBlogPost))
})

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
