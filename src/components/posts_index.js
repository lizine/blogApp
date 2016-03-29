import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBlogPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount(){
    console.log("good time to call a ction creator");
    const list = this.props.fetchBlogPosts();
  }

  render (){
    return (
      <div>{this.props.list}</div>
    );
  }
}
/*function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchBlogPosts}, dispatch);
} we don't need this if we do the export like below*/


export default connect(null, {fetchBlogPosts : fetchBlogPosts})(PostsIndex);
