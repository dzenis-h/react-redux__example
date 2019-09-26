import React from "react";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="ui container">
      <h1 className="myHeader">Simple Redux - Thunk Example</h1>
      <PostList />
    </div>
  );
};

export default App;
