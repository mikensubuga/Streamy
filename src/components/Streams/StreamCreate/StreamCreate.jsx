import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreate extends Component {
  render() {
    return (
      <div>
        <div>StreamCreate</div>
        <form>
          <Field name="title" />
          <Field name="description" />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
