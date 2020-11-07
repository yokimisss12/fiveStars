require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        let's start!
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
