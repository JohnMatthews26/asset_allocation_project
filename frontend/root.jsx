import React from 'react';
import ReactDOM from 'react-dom';
import RiskInput from './risk_input';


class Root extends React.Component {
  render() {
    return(
      <div className='div'>
        <header className='header-bar'><h1>Asset Allocation Tool</h1></header>
        <RiskInput/>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
