import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreate extends Component {
  renderInput({ input }) {
    return <input {...input} />;
  }
  render() {
    return (
      <div>
        <div>StreamCreate</div>
        <form>
          <Field name="title" component={this.renderInput} />
          <Field name="description" component={this.renderInput} />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
