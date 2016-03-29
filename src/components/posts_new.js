import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {

  render () {
    return (
      <form>
      <h3>Create a new post</h3>
      <div className="form-group">
        <label>Title</label>
        <input type="text" className="form-control"/>
      </div>
      <div className="form-group">
        <label>Categories</label>
        <input type="text" className="form-control"/>
      </div>
      <div className="form-group">
        <label>Content</label>
        <textarea type="text" className="form-control"/>
      </div>
      <button type="submit" className="btn btn-primary">submit</button>
      </form>
    );
  }
};

export default reduxForm({
  form : 'PostsNewForm',  //this needs to be unique, mapped with app state
  fields : ['title', 'categories', 'content'] //frominputs to watch
})(PostsNew);
