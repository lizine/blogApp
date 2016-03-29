import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
  componentWillMount(){
    this.props.fetchSinglePost(this.props.params.id);
  }
/*renderPosts(){
  return this.props.post.map((post) => {
    return(
      <li
        key={post.id}
        className="list-group-item">
        <span className="pull-xs-right">{post.categories}</span>
        <span><strong>{post.title}</strong></span>
        <span><strong>{post.content}</strong></span>

      </li>
    );
  });
}*/
  render (){
 if(!this.props.post){
   return <div>Loading..</div>
 }
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/" className="btn btn-primary">
            Go Back to list
          </Link>
        </div>
      <h3>Blogpost: {this.props.params.id}</h3>
        <p>{this.props.post.title}</p>
          <p>{this.props.post.content}</p>
      </div>
    );
  }
}
/*function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchBlogPosts}, dispatch);
} we don't need this if we do the export like below*/

function mapStateToProps(state){
  return { post : state.posts.post };
}

export default connect(mapStateToProps, { fetchSinglePost })(PostsShow);
