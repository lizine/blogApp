import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount(){
    console.log("good time to call a ction creator");
    const list = this.props.fetchBlogPosts();
  }

  render (){
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add new Post
          </Link>
        </div>
      <div>List of blog posts</div>
      </div>
    );
  }
}
/*function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchBlogPosts}, dispatch);
} we don't need this if we do the export like below*/


export default connect(null, { fetchBlogPosts })(PostsIndex);
