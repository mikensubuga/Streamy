import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import { runInThisContext } from "vm";
class StreamEdit extends Component {
  componentDidMount() {
    this.props.onfetchStream(this.props.match.params.id);
  }
  render() {
    console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading ...</div>;
    }
    return <div>{this.props.stream.title}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams.stream[ownProps.match.params.id]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onfetchStream: id => {
      dispatch(actions.fetchStream(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamEdit);
