import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import assets from './assets';


class UserPortfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      asset1_amount: 0,
      asset2_amount: 0,
      asset3_amount: 0,
      asset4_amount: 0,
      asset5_amount: 0,
    };
    this.update = this.update.bind(this);
    this.userCurrentAssetAllocations = this.userCurrentAssetAllocations.bind(this);
  }

  update(e){
    return event => this.setState({[e]: event.target.value});
  }

  renderTradesRequired(){
    
  }

  userCurrentAssetAllocations(){
    let total =
    this.state.asset1_amount +
    this.state.asset2_amount +
    this.state.asset3_amount +
    this.state.asset4_amount +
    this.state.asset5_amount;

    let asset1Percentage =
    this.state.asset1_amount / total;
    let asset2Percentage =
    this.state.asset2_amount / total;
    let asset3Percentage =
    this.state.asset3_amount / total;
    let asset4Percentage =
    this.state.asset4_amount / total;
    let asset5Percentage =
    this.state.asset5_amount / total;

    return [asset1Percentage,
      asset2Percentage,
      asset3Percentage,
      asset4Percentage,
      asset5Percentage];
  }

  render() {
    return(

        <div className="user-portfolio-div">
          <div className='user-asset-input'>
            <input
              placeholder={`${assets['asset1']['name']}`}
                onChange={this.update('asset1_amount')}>
            </input>
            <input
              placeholder={`${assets['asset2']['name']}`}
                onChange={this.update('asset2_amount')}>
            </input>
            <input
              placeholder={`${assets['asset3']['name']}`}
                onChange={this.update('asset3_amount')}>
            </input>
            <input
              placeholder={`${assets['asset4']['name']}`}
                onChange={this.update('asset4_amount')}>
            </input>
            <input
              placeholder={`${assets['asset5']['name']}`}
                onChange={this.update('asset5_amount')}>
            </input>
          </div>
          <input type='submit'
            value='Trades required for optimal portfolio'
            onClick={this.renderTradesRequired()}>
          </input>
        </div>

    );
  }

}
export default UserPortfolio;
