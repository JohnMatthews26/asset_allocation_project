import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DonutChart from './donut_chart';

class RiskInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      risk_value: 5
    };
    this.update = this.update.bind(this);
  }

  update(e){
    return event => this.setState({[e]: event.target.value});
  }


  render() {
    return(

        <div className="risk_slider">
          <input type="range" min="1" max="10"
            value={this.state.risk_value} className="slider" onChange={this.update('risk_value')}/>
          {this.state.risk_value}
          <input type="submit" value="Check my desired portfolio"></input>
          <DonutChart risk={this.state.risk_value}/>
        </div>

    );
  }

}
export default RiskInput;
