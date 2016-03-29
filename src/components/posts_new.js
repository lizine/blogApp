import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index'; //import action creator
import { Link } from 'react-router';

class PostsNew extends Component {
// let fetch an instance of router so we can use push in submit form
  static contextTypes = {
    router : PropTypes.object
  };
onSubmit(props){
  //call createpost with props and when promise is resolved (that when form is submitted)..
  this.props.createPost(props)
  .then(() => {
    //navigate user to index by calling this.context.router.push
    this.context.router.push('/');
  });
}

  render () {
    const { fields: { title, categories, content }, handleSubmit } = this.props; //es6 syntax. same as const handleSubmit = this.props.handlesubmit;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      <h3>Create a new post</h3>
      <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
        <label>Title</label>
        <input type="text" className="form-control" {...title } />
        <div className="text-help">
        {title.touched ? title.error : ''}
        </div>
      </div>

    <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
        <label>Categories</label>
        <input type="text" className="form-control" {...categories} />
        <div className="text-help">
        {categories.touched ? categories.error : ''}
        </div>
      </div>

    <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
        <label>Content</label>
        <textarea className="form-control" {...content } />
        <div className="text-help">
        {content.touched ? content.error : ''}
        </div>
      </div>

      <button type="submit" className="btn btn-primary">submit</button>
      <Link to="/" className="btn btn-secondary">
        Cancel
      </Link>

      </form>
    );
  }
}

//to mark the form invalid,just add property to error object with turhy value.
function validate(values){
  const errors = {};
  if(!values.title){
    errors.title = 'Enter a title';
  }
  if(!values.categories){
    errors.categories = 'Enter categories';
  }
  if(!values.content){
    errors.content = 'Enter some content';
  }
  return errors;
}

/* reduxform takes an actioncreator just like connect
 1 arg is configObj, 2nd is mapStateToProps, 3rd is mapDispatchToProps
so, we'll pass object, null, createPost. */
export default reduxForm({
  form : 'PostsNewForm',  //this needs to be unique, mapped with app state
  fields : ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
