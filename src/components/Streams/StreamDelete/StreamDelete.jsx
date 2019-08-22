import React, { Component } from "react";
import Modal from "../../UI/Modal";
import history from "../../../history";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
class StreamDelete extends Component {
  componentDidMount() {
    this.props.onfetchStream(this.props.match.params.id);
  }
  renderActions() {
    return (
      <React.Fragment>
        <button className="ui button">Cancel</button>
        <button className="ui negative button">Delete</button>
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
    onfetchStream: id => {
      dispatch(actions.fetchStream(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamDelete);
