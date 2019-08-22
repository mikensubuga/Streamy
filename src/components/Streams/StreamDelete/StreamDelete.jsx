import React, { Component } from "react";
import Modal from "../../UI/Modal";
import history from "../../../history";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import { Link } from "react-router-dom";
class StreamDelete extends Component {
  componentDidMount() {
    this.props.onfetchStream(this.props.match.params.id);
  }
  onDelete = () => {
    this.props.onDeleteStream(this.props.match.params.id);
  };
  renderActions() {
    return (
      <React.Fragment>
        <Link to="/" className="ui button">
          Cancel
        </Link>
        <button className="ui negative button" onClick={this.onDelete}>
          Delete
        </button>
      </React.Fragment>
    );
  }
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete the stream with title: ${
      this.props.stream.title
    }`;
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading ...</div>;
    }
    return (
      <div>
        <Modal
          header="Delete"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
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
    onDeleteStream: id => {
      dispatch(actions.deleteStream(id));
    },
    onfetchStream: id => {
      dispatch(actions.fetchStream(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamDelete);
