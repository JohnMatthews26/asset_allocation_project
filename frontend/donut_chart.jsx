import Donut from 'react-donut-chart';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import assets from './assets';

class DonutChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      asset1_name: assets['asset1']['name'],
      asset2_name: assets['asset2']['name'],
      asset3_name: assets['asset3']['name'],
      asset4_name: assets['asset4']['name'],
      asset5_name: assets['asset5']['name'],
      asset1_amount: assets['asset1']['amount'] + this.props.riskFactor,
      asset2_amount: assets['asset2']['amount'] + this.props.riskFactor,
      asset3_amount: assets['asset3']['amount'],
      asset4_amount: assets['asset4']['amount'] - this.props.riskFactor,
      asset5_amount: assets['asset5']['amount'] - this.props.riskFactor,
    };
  }


  componentDidUpdate(prevProps, prevState){
    if (prevProps.riskFactor !== this.props.riskFactor){
      return this.setState({
        asset1_amount: assets['asset1']['amount'] + this.props.riskFactor,
        asset2_amount: assets['asset2']['amount'] + this.props.riskFactor,
        asset3_amount: assets['asset3']['amount'],
        asset4_amount: assets['asset4']['amount'] - this.props.riskFactor,
        asset5_amount: assets['asset5']['amount'] - this.props.riskFactor,
          });
    }
  }


  render() {

    return(

        <div className="donut_chart">
          <Donut data={[
              {label: this.state.asset1_name,
              value: this.state.asset1_amount},
              {label: this.state.asset2_name,
              value: this.state.asset2_amount},
              {label: this.state.asset3_name,
              value: this.state.asset3_amount},
              {label: this.state.asset4_name,
              value: this.state.asset4_amount},
              {label: this.state.asset5_name,
              value: this.state.asset5_amount},
          ]}/>
        </div>

    );
  }

  }
  export default DonutChart;
