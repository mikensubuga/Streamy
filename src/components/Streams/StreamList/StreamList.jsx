import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../../store/actions/index";
class StreamList extends Component {
  componentDidMount() {
    this.props.onFetchStreams();
  }
  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`/streams/delete`} className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  }
  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}

          <i className="large middle aligned icon camera" />
          <div className="content">
            <a className="header">{stream.title}</a>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="ui grid">
        <div className="twelve wide column">
          <div>
            <h2 className="ui block header">Streams</h2>

            <div className="ui celled list">{this.renderList()}</div>
            {this.renderCreate()}
          </div>
        </div>
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
    streams: Object.values(state.streams.stream),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamList);
