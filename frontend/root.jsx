import React from 'react';
import ReactDOM from 'react-dom';
import RiskInput from './risk_input';


class Root extends React.Component {
  render() {
    return(
      <div>
        <RiskInput/>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
