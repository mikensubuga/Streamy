import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
class StreamShow extends Component {
  componentDidMount() {
    this.props.onfetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        StreamShow
        <h1>{this.props.stream.title}</h1>
        <h5>{this.props.stream.description}</h5>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams.stream[ownProps.match.params.id]
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onfetchStream: id => {
      dispatch(actions.fetchStream(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamShow);
