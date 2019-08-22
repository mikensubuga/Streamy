import React from "react";
import Modal from "../../UI/Modal";
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
        header="Delete Test"
        content="Are you sure you want to Delete this Stream?"
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;
