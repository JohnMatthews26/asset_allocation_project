import React from 'react';
import ReactDOM from 'react-dom';


class RiskInput extends React.Component {
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
        </div>

    );
  }

}
export default RiskInput;
