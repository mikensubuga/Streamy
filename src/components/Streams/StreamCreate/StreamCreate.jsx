import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import StreamForm from "../StreamForm/StreamForm";
class StreamCreate extends Component {
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
            <StreamForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: formValues => dispatch(actions.createStream(formValues))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(StreamCreate);
