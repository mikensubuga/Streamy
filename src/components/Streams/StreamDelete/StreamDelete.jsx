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

  render() {
    return (
      <div>
        StreamDelete
        <Modal
          header="Delete"
          content="Are you sure you want to Delete this Stream?"
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onfetchStream: id => {
      dispatch(actions.fetchStream(id));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(StreamDelete);
