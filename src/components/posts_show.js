import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
  componentWillMount(){
    this.props.fetchSinglePost(this.props.params.id);
  }
  static contextTypes = {
    router : PropTypes.object
  };

onDeleteClick(){
  this.props.deletePost(this.props.params.id)
  .then(() => {
      //navigate user to index by calling this.context.router.push
      this.context.router.push('/');
    });
};

  render (){
 const { post } = this.props; {/*lets pull post to its own const*/}

 if(!this.props.post){
   return <div>Loading..</div>
 }
    return (
      <div>
          <Link to="/">
            Go Back to list
          </Link>
          <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
          >
          Delete Post
          </button>
          <h3>{post.title}</h3>
          <p>Categories: {post.categories}</p>
          <p>{post.content}</p>
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

export default connect(mapStateToProps, { fetchSinglePost, deletePost })(PostsShow);
