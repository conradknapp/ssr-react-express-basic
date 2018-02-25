import React from "react";

const App = ({ postData }) => {
  const posts = postData.map((el, i) => (
    <li key={i}>
      <h1>${el.title}</h1>
      <p>${el.body}</p>
    </li>
  ));
  return <ul>{posts}</ul>;
};

export default App;
