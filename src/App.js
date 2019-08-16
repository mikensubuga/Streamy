import React from "react";
import { Route } from "react-router-dom";
import StreamList from "./components/Streams/StreamList/StreamList";
import StreamCreate from "./components/Streams/StreamCreate/StreamCreate";
import StreamDelete from "./components/Streams/StreamDelete/StreamDelete";
import StreamShow from "./components/Streams/StreamShow/StreamShow";
import StreamEdit from "./components/Streams/StreamEdit/StreamEdit";
import Header from "./components/Navigation/Header/Header";
const App = () => {
  return (
    <div className="ui container">
      <div>
        <Header />
      </div>
      <div>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
        <Route path="/streams/edit/:id" exact component={StreamEdit} />
      </div>
    </div>
  );
};

export default App;
