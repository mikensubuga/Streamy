import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
class StreamList extends Component {
  componentDidMount() {
    this.props.onFetchStreams();
  }
  render() {
    return <div>StreamList</div>;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onFetchStreams: () => {
      dispatch(actions.fetchStreams());
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(StreamList);
