import Donut from 'react-donut-chart';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import assets from './assets';

class DonutChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      asset1: 20,
      asset2: 20,
      asset3: 20,
      asset4: 20,
      asset5: 20,
      asset1name: assets[0],
      asset2name: assets[1],
      asset3name: assets[2],
      asset4name: assets[3],
      asset5name: assets[4]
    };
    this.update = this.update.bind(this);
  }



  update(e){
    return event => this.setState({[e]: event.target.value});
  }


  render() {
    return(

        <div className="donut_chart">
          <Donut data={[
              {label: this.state.asset1name, value: this.state.asset1},
              {label: this.state.asset2name, value: this.state.asset2},
              {label: this.state.asset3name, value: this.state.asset3},
              {label: this.state.asset4name, value: this.state.asset4},
              {label: this.state.asset5name, value: this.state.asset5},
          ]}/>
        </div>

    );
  }

  }
  export default DonutChart;
