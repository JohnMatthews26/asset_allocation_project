import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DonutChart from './donut_chart';
import Assets from './assets';
import inputs from './inputs';

class RiskInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      risk_value: 5
    };
    this.update = this.update.bind(this);
    this.riskFactor = this.riskFactor.bind(this);
    this.riskAdjustedAssets = this.riskAdjustedAssets.bind(this);
  }

  update(e){
    return event => this.setState({[e]: parseInt(event.target.value)});
  }

  riskFactor(){

    let factor = (5 - this.state.risk_value) * 1.9;
    return factor;
  }

  riskAdjustedAssets(){
    let factor = this.riskFactor();
    let adjustedAssets = {
    asset1: {amount: inputs.asset1.amount + factor, name: inputs.asset1.name},
    asset2: {amount: inputs.asset2.amount + factor, name: inputs.asset2.name},
    asset3: {amount: inputs.asset3.amount, name: inputs.asset3.name},
    asset4: {amount: inputs.asset4.amount - factor, name: inputs.asset4.name},
    asset5: {amount: inputs.asset5.amount - factor, name: inputs.asset5.name},
    };
    return adjustedAssets;
  }



  render() {
    return(

        <div className="main-div">
          <div className='slider-div'>
          <input type="range" min="1" max="10"
            value={this.state.risk_value} className="slider"
            onChange={this.update('risk_value')}/>
          <section className='risk-text'>
            <h2 id='risk-header'>
              Current Level of Risk: {this.state.risk_value}
            </h2>
          </section>
          </div>
          <DonutChart assets={this.riskAdjustedAssets()}
            riskFactor={this.state.risk_value}
            />
          <Assets assets={this.riskAdjustedAssets()}
            riskFactor={this.state.risk_value}/>
        </div>

    );
  }
}
export default RiskInput;
