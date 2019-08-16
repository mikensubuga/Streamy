import React from "react";
import { connect } from "react-redux";
const StreamEdit = props => {
  return <div>StreamEdit</div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams.stream[ownProps.match.params.id]
  };
};
export default StreamEdit;
