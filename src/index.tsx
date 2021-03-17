import React from 'react';
import ReactDOM from 'react-dom';

import './scss/styles.scss';

function NoteTakingApp() {
  return (
    <div>
      <h3>Note Taking App</h3>
      <p>initial commit</p>
    </div>
  );
}

ReactDOM.render(
  <NoteTakingApp />,
  document.getElementById("app-root")
);