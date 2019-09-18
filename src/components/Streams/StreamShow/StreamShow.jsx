import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import flv from "flv.js";

class StreamShow extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.onfetchStream(id);
    this.buildPlayer();
  }
  componentDidUpdate() {
    this.buildPlayer();
  }
  buildPlayer() {
    const { id } = this.props.match.params;

    if (this.player || !this.props.stream) {
      return;
    }
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h2 className="ui block header">Stream Show</h2>
        <video ref={this.videoRef} style={{ width: "100%" }} controls></video>
        <h3>{this.props.stream.title}</h3>
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
