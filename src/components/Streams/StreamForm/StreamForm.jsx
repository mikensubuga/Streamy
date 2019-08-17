import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <div className="ui error message">{error}</div>;
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = formValues => {
    console.log(formValues);
    this.props.onSubmit(formValues);
  };
  render() {
    console.log("render", this.props);
    return (
      <div className="ui grid">
        <div className="twelve wide column">
          <div>
            <h2 className="ui block header">StreamCreate</h2>
            <form
              onSubmit={this.props.handleSubmit(this.onSubmit)}
              className="ui form error"
            >
              <Field
                name="title"
                component={this.renderInput}
                label="Enter Title"
              />
              <Field
                name="description"
                component={this.renderInput}
                label="Enter Description"
              />
              <button
                className="ui button primary"
                disabled={this.props.invalid}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onSubmit: formValues => dispatch(actions.createStream(formValues))
//   };
// };
export default reduxForm({
  form: "streamForm",
  validate: validate
})(StreamForm);
