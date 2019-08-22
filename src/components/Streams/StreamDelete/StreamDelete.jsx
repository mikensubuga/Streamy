import React from "react";
import Modal from "../../UI/Modal";
const StreamDelete = () => {
  const actions = (
    <div>
      <button className="ui button">Cancel</button>
      <button className="ui negative button">Delete</button>
    </div>
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
