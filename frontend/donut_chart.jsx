import Donut from 'react-donut-chart';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class DonutChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      assets: this.props.assets
    };
  }

    componentDidUpdate(prevProps, prevState){
      if (prevProps.riskFactor !== this.props.riskFactor){
        return this.setState({
          assets: this.props.assets
            });
      }
    }




  render() {

    return(

        <div className="donut_chart">
          <Donut data={[
              {label: this.props.assets.asset1.name,
              value: this.props.assets.asset1.amount},
              {label: this.props.assets.asset2.name,
              value: this.props.assets.asset2.amount},
              {label: this.props.assets.asset3.name,
              value: this.props.assets.asset3.amount},
              {label: this.props.assets.asset4.name,
              value: this.props.assets.asset4.amount},
              {label: this.props.assets.asset5.name,
              value: this.props.assets.asset5.amount},
          ]}/>
        </div>

    );
  }

  }
  export default DonutChart;
