import React from "react";
import { Route } from "react-router-dom";
import StreamList from "./components/Streams/StreamList/StreamList";
import StreamCreate from "./components/Streams/StreamCreate/StreamCreate";
import StreamDelete from "./components/Streams/StreamDelete/StreamDelete";
import StreamShow from "./components/Streams/StreamShow/StreamShow";
import StreamEdit from "./components/Streams/StreamEdit/StreamEdit";

const App = () => {
  return (
    <div>
      <h4>Navigation</h4>
      <div>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
        <Route path="/streams/edit" exact component={StreamEdit} />
      </div>
    </div>
  );
};

export default App;
