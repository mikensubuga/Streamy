import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
class StreamList extends Component {
  componentDidMount() {
    this.props.onFetchStreams();
  }
  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            <a className="header">{stream.title}</a>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onFetchStreams: () => {
      dispatch(actions.fetchStreams());
    }
  };
};

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams.stream)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamList);
