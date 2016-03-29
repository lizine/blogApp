import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount(){
    this.props.fetchBlogPosts();
  }
renderPosts(){
  return this.props.posts.map((post) => {
    return(
      <li
        key={post.id}
        className="list-group-item">
        <Link to={"posts/" + post.id} >
          <span className="pull-xs-right">{post.categories}</span>
          <span><strong>{post.title}</strong></span>
          </Link>
      </li>
    );
  });
}
  render (){
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add new Post
          </Link>
        </div>
      <h3>List of blog posts:</h3>
      <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}
/*function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchBlogPosts}, dispatch);
} we don't need this if we do the export like below*/

function mapStateToProps(state){
  return { posts : state.posts.all };
}

export default connect(mapStateToProps, { fetchBlogPosts })(PostsIndex);
