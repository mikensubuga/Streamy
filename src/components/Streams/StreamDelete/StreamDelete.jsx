import React from "react";
import Modal from "../../UI/Modal";
import history from "../../../history";
const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui button">Cancel</button>
      <button className="ui negative button">Delete</button>
    </React.Fragment>
  );
  return (
    <div>
      StreamDelete
      <Modal
        header="Delete"
        content="Are you sure you want to Delete this Stream?"
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

export default StreamDelete;
