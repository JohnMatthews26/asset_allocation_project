import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import assets from './assets';


class UserPortfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      asset1_current_holdings: 0,
      asset2_current_holdings: 0,
      asset3_current_holdings: 0,
      asset4_current_holdings: 0,
      asset5_current_holdings: 0,
    };
    this.update = this.update.bind(this);
    this.userCurrentAssetAllocations = this.userCurrentAssetAllocations.bind(this);
    this.renderTradesRequired = this.renderTradesRequired.bind(this);
  }

  update(e){
    return event => this.setState({[e]: event.target.value});
  }

  renderTradesRequired(e){
    e.preventDefault();
    console.log('it is being called');
    return (<div className='trades-required-div'>
      <ul className='trades-required'>
      </ul>
    </div>);
  }

  userCurrentAssetAllocations(){
    let total =
    this.state.asset1_current_holdings +
    this.state.asset2_current_holdings +
    this.state.asset3_current_holdings +
    this.state.asset4_current_holdings +
    this.state.asset5_current_holdings;

    let asset1Percentage =
    this.state.asset1_current_holdings / total;
    let asset2Percentage =
    this.state.asset2_current_holdings / total;
    let asset3Percentage =
    this.state.asset3_current_holdings / total;
    let asset4Percentage =
    this.state.asset4_current_holdings / total;
    let asset5Percentage =
    this.state.asset5_current_holdings / total;

    return [asset1Percentage,
      asset2Percentage,
      asset3Percentage,
      asset4Percentage,
      asset5Percentage];
  }

  render() {
    console.log(this.renderTradesRequired);
    return(

        <div className="user-portfolio-div">
          <div className='user-asset-input'>
            <input
              placeholder={`${assets['asset1']['name']}`}
                onChange={this.update('asset1_current_holdings')}>
            </input>
            <input
              placeholder={`${assets['asset2']['name']}`}
                onChange={this.update('asset2_current_holdings')}>
            </input>
            <input
              placeholder={`${assets['asset3']['name']}`}
                onChange={this.update('asset3_current_holdings')}>
            </input>
            <input
              placeholder={`${assets['asset4']['name']}`}
                onChange={this.update('asset4_current_holdings')}>
            </input>
            <input
              placeholder={`${assets['asset5']['name']}`}
                onChange={this.update('asset5_current_holdings')}>
            </input>
          </div>
          <input type='submit'
            value='Trades required for optimal portfolio'
            onClick={this.renderTradesRequired}>
          </input>
        </div>

    );
  }

}
export default UserPortfolio;
